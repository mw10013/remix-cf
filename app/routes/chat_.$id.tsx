import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Textarea,
} from "@nextui-org/react";
import {
  ActionFunctionArgs,
  DataFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/cloudflare";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { getTableConfig } from "drizzle-orm/sqlite-core";
import * as jose from "jose";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { BaseMessage, MessageType } from "langchain/schema";
import { RunnableSequence } from "langchain/schema/runnable";
import { CloudflareD1MessageHistory } from "langchain/stores/message/cloudflare_d1";
import { DynamicStructuredTool, DynamicTool } from "langchain/tools";
import invariant from "tiny-invariant";
import { z } from "zod";
import { ChatMessages, Chats } from "~/lib/db/schema";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

const AUD = "https://api.redoxengine.com/v2/auth/token";

async function assertResponseOk(res: Response) {
  if (!res.ok) {
    const error = new Error(
      `${res.status} ${res.statusText} ${await res.text()}`,
    );
    throw error;
  }
}

async function requestJwtAccessToken(signedAssertion: string, scope: string) {
  const requestBody = new URLSearchParams();
  requestBody.append("grant_type", "client_credentials");
  requestBody.append(
    "client_assertion_type",
    "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
  );
  requestBody.append("client_assertion", signedAssertion);
  requestBody.append("scope", scope);

  const response = await fetch("https://api.redoxengine.com/v2/auth/token", {
    method: "POST",
    body: requestBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  await assertResponseOk(response);
  return await response.json<{
    access_token: string;
    scope: string;
    token_type: string;
    expires_in: number;
  }>();
}

async function getSignedAssertion({
  privateKeyJwk,
  clientId,
  scope,
  kid,
  aud,
}: {
  privateKeyJwk: jose.JWK;
  clientId: string;
  scope: string;
  kid: string;
  aud: string;
}) {
  const privateKey = await jose.importJWK(privateKeyJwk, "RS384");
  const payload = {
    scope,
  };

  const randomBytes = new Uint8Array(8);
  crypto.getRandomValues(randomBytes);
  const signedAssertion = await new jose.SignJWT(payload)
    .setProtectedHeader({
      alg: "RS384",
      kid,
    })
    .setAudience(aud)
    .setIssuer(clientId)
    .setSubject(clientId)
    .setIssuedAt(Math.floor(new Date().getTime() / 1000)) // Current timestamp in seconds (undefined is valid)
    .setJti(
      Array.from(randomBytes) // Array.from() so that map returns string whereas Uint8Array.map returns number.
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join(""),
    ) // a random string to prevent replay attacks
    .sign(privateKey);
  return signedAssertion;
}

async function assertValidChat({
  params,
  context,
}: Pick<DataFunctionArgs, "params" | "context">) {
  invariant(params.id, "invalid id");
  assertCloudflareEnv(context.env);
  const db = drizzle(context.env.DB);
  const [chat] = await db
    .select()
    .from(Chats)
    .where(eq(Chats.id, Number(params.id)));
  invariant(chat, "invalid chat");

  const memory = new BufferMemory({
    returnMessages: true,
    chatHistory: new CloudflareD1MessageHistory({
      tableName: getTableConfig(ChatMessages).name,
      sessionId: chat.id.toString(),
      database: context.env.DB,
    }),
  });
  return { db, chat, memory, env: context.env };
}

export async function loader({ params, context }: LoaderFunctionArgs) {
  const { memory } = await assertValidChat({ params, context });
  const memoryVariables = await memory.loadMemoryVariables({});
  const history = memoryVariables.history as BaseMessage[];
  const messages: { type: MessageType; content: string }[] = history.map(
    (m) => ({ type: m._getType(), content: m.content }),
  );

  return {
    messages,
  };
}

export async function action({ request, params, context }: ActionFunctionArgs) {
  const { memory, env } = await assertValidChat({ params, context });
  const formData = await request.formData();
  const input = formData.get("input");
  invariant(typeof input === "string" && input.length > 0, "input is invalid");
  const tools = [
    new DynamicTool({
      name: "getDoctors",
      description: "Get list of doctors",
      func: async () =>
        Promise.resolve(JSON.stringify({ doctors: ["Dr Bob", "Dr Jung"] })),
    }),
    new DynamicStructuredTool({
      name: "getPatientsForDoctor",
      description: "Get list of patients for a doctor",
      schema: z
        .object({
          doctor: z.string().min(1).describe("Name of doctor"),
        })
        .describe("The JSON for doctor"),
      func: async ({ doctor }) => {
        switch (doctor) {
          case "Dr Bob":
            return Promise.resolve(
              JSON.stringify({ patients: ["Bucky", "Bobby", "Bobby Sue"] }),
            );
          case "Dr Jung":
            return Promise.resolve(
              JSON.stringify({
                patients: ["Jack", "Jill", "June", "Keva Green"],
              }),
            );
          default:
            return Promise.resolve(JSON.stringify({ error: "Unknown doctor" }));
        }
      },
    }),
    new DynamicTool({
      name: "getKevaGreenDetails",
      description: "Get Keva Green's details",
      func: async () => {
        const signedAssertion = await getSignedAssertion({
          privateKeyJwk: JSON.parse(env.REDOX_API_PRIVATE_JWK) as jose.JWK,
          clientId: env.REDOX_API_CLIENT_ID,
          scope: env.REDOX_API_SCOPE,
          kid: env.REDOX_API_PUBLIC_KID,
          aud: AUD,
        });
        const jwtAccessToken = await requestJwtAccessToken(
          signedAssertion,
          env.REDOX_API_SCOPE,
        );

        const response = await fetch(
          "https://api.redoxengine.com/fhir/R4/redox-fhir-sandbox/Development/Patient/_search",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${jwtAccessToken.access_token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              given: "Keva",
              family: "Green",
              birthdate: "1995-08-26",
            }),
          },
        );
        await assertResponseOk(response);
        return response.text();
      },
    }),
    new DynamicTool({
      name: "getPatientDocumentList",
      description: "Get the list of documents for a patient",
      func: async () => {
        const signedAssertion = await getSignedAssertion({
          privateKeyJwk: JSON.parse(env.REDOX_API_PRIVATE_JWK) as jose.JWK,
          clientId: env.REDOX_API_CLIENT_ID,
          scope: env.REDOX_API_SCOPE,
          kid: env.REDOX_API_PUBLIC_KID,
          aud: AUD,
        });
        const jwtAccessToken = await requestJwtAccessToken(
          signedAssertion,
          env.REDOX_API_SCOPE,
        );
        const response = await fetch(
          "https://api.redoxengine.com/fhir/R4/redox-fhir-sandbox/Development/Patient/_search",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${jwtAccessToken.access_token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              patient: "81c2f5eb-f99f-40c4-b504-59483e6148d7",
            }),
          },
        );
        await assertResponseOk(response);
        return response.text();
      },
    }),
  ];

  const llm = new ChatOpenAI({
    modelName: "gpt-4-0613",
    openAIApiKey: env.OPENAI_API_KEY,
    temperature: 0.8,
  });
  const executor = await initializeAgentExecutorWithOptions(tools, llm, {
    agentType: "openai-functions",
    verbose: true,
    returnIntermediateSteps: true,
    maxIterations: 5,
    handleParsingErrors:
      "Try again, checking step-by-step that the arguments you supply exactly match the parameter types of the function",
  });

  const chain = RunnableSequence.from<
    { input: string },
    { output: string; intermediateSteps?: unknown[] }
    // @ts-expect-error: not sure how to type this properly
  >([
    {
      input: (initialInput) => initialInput.input,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      history: async () => (await memory.loadMemoryVariables({})).history,
    },
    executor,
  ]);

  const chainInput = { input };
  const { output, intermediateSteps } = await chain.invoke(chainInput);
  await memory.saveContext(chainInput, {
    output: intermediateSteps
      ? `Intermediate Steps: ${JSON.stringify(
          intermediateSteps,
          null,
          2,
        )}\n\n${output}`
      : output,
  });
  return null; // Let revalidation handle data updates.
}

export default function Route() {
  const { messages } = useLoaderData<typeof loader>();
  const submit = useSubmit();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>Conversation</CardHeader>
        <CardBody className="flex flex-col gap-2">
          {/* https://code.hnldesign.nl/scrolltobottom/ */}
          <div className="flex h-64 flex-col-reverse overflow-y-auto">
            {messages
              .slice() // clone since reverse will mutate
              .reverse()
              .map(({ type, content }, index) => (
                <div key={index} className="">
                  {type}: {content}
                  {/* {index !== 0 && <Divider className="my-2" />} */}
                  <Divider className="my-2" />
                </div>
              ))}
          </div>
          <Form method="POST" className="flex flex-col gap-2">
            <Textarea
              name="input"
              minRows={2}
              maxRows={7}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (
                    e.target instanceof HTMLTextAreaElement &&
                    e.target.value.trim().length > 0
                  ) {
                    submit(e.target.form);
                    e.target.value = "";
                  }
                }
              }}
            />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
