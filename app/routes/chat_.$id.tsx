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
import * as jose from "jose";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import invariant from "tiny-invariant";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { ChatMessages, Chats } from "~/lib/db/schema";
import { assertCloudflareEnv, CloudflareEnv } from "~/types/cloudflareEnv";

type MessageStore = Awaited<ReturnType<typeof createMessageStore>>;
type FunctionDescription<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends z.ZodObject<any, any, any, any> = z.ZodObject<any, any, any, any>,
> = {
  name: string;
  description: string;
  schema: T;
  func: (input: z.infer<T>) => Promise<string>;
};

async function createRedox(env: CloudflareEnv) {
  const endpoint =
    "https://api.redoxengine.com/fhir/R4/redox-fhir-sandbox/Development/";
  const aud = "https://api.redoxengine.com/v2/auth/token";

  const signedAssertion = await getSignedAssertion({
    privateKeyJwk: JSON.parse(env.REDOX_API_PRIVATE_JWK) as jose.JWK,
    clientId: env.REDOX_API_CLIENT_ID,
    scope: env.REDOX_API_SCOPE,
    kid: env.REDOX_API_PUBLIC_KID,
    aud,
  });

  const redox = {
    post,
  };

  async function post(api: string, body: unknown) {
    invariant(
      typeof env.REDOX_API_SCOPE === "string",
      "Invalid REDOX_API_SCOPE",
    );
    const jwtAccessToken = await requestJwtAccessToken(
      signedAssertion,
      env.REDOX_API_SCOPE,
    );
    console.log("jwtAccessToken:", jwtAccessToken);

    const response = await fetch(endpoint + api, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtAccessToken.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    await assertResponseOk(response);
    return await response.text();
  }

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

  return redox;
}

async function createMessageStore({
  chatId,
  db,
}: {
  chatId: number;
  db: ReturnType<typeof drizzle>;
}) {
  const chatMessages = await db
    .select()
    .from(ChatMessages)
    .where(eq(ChatMessages.chatId, chatId))
    .orderBy(ChatMessages.id)
    .all();
  const messages = chatMessages.map((chatMessage) => chatMessage.message);
  const messageStore = {
    messages,
    async add(message: ChatCompletionMessageParam) {
      await db.insert(ChatMessages).values({ chatId: chatId, message });
      messageStore.messages.push(message);
    },
  };
  if (messageStore.messages.length === 0) {
    await messageStore.add({
      role: "system",
      content: "You are a helpful assistant.",
    });
  }
  return messageStore;
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
  const messageStore = await createMessageStore({ chatId: chat.id, db });
  return { db, chat, messageStore, env: context.env };
}

export async function loader({ params, context }: LoaderFunctionArgs) {
  const { messageStore } = await assertValidChat({ params, context });
  return {
    messages: messageStore.messages,
  };
}

async function completeMessages({
  messageStore,
  env,
}: {
  messageStore: MessageStore;
  env: CloudflareEnv;
}) {
  const redox = await createRedox(env);
  const functionDescriptions: FunctionDescription[] = [
    {
      name: "getCurrentWeather",
      description: "Get the current weather in a given location",
      schema: z.object({
        location: z
          .string()
          .describe("The city and state, e.g. San Francisco, CA"),
        unit: z.enum(["celsius", "fahrenheit"]).optional(),
      }),
      func: async ({ location, unit = "fahrenheit" }) => {
        const weatherInfo = {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          location,
          temperature: "72",
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          unit,
          forecast: ["sunny", "windy"],
        };
        return Promise.resolve(JSON.stringify(weatherInfo));
      },
    },
    {
      name: "getKevaGreenDetails",
      description: "Get Keva Green's details",
      schema: z.object({}),
      func: async () => {
        return redox.post("Patient/_search", {
          given: "Keva",
          family: "Green",
          birthdate: "1995-08-26",
        });
      },
    },
  ];

  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4-0613",
    temperature: 0,
    messages: messageStore.messages,
    functions: functionDescriptions.map(({ name, description, schema }) => {
      return {
        name,
        description,
        parameters: zodToJsonSchema(schema),
      };
    }),
  });
  // console.log("completion:", completion);
  const completionMessage = completion.choices[0].message;
  console.log("completionMessage:", completionMessage);
  await messageStore.add(completionMessage);

  if (!completionMessage.function_call) {
    return;
  }

  const functionName = completionMessage.function_call.name;
  const functionDescription = functionDescriptions.find(
    ({ name }) => name === functionName,
  );
  if (!functionDescription) {
    await messageStore.add({
      role: "system",
      content: `Function ${functionName} not found`,
    });
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const functionArguments = JSON.parse(
    completionMessage.function_call.arguments,
  );
  const parseResult = functionDescription.schema.safeParse(functionArguments);
  if (!parseResult.success) {
    await messageStore.add({
      role: "system",
      content: `Error parsing arguments for function ${functionName}: ${parseResult.error.message}`,
    });
    return;
  }
  const functionOutput = await functionDescription.func(parseResult.data);
  await messageStore.add({
    role: "function",
    name: functionName,
    content: functionOutput,
  });
  const functionCompletion = await openai.chat.completions.create({
    model: "gpt-4-0613",
    temperature: 0,
    messages: messageStore.messages,
  });
  const functionCompletionMessage = functionCompletion.choices[0].message;
  await messageStore.add(functionCompletionMessage);
}

export async function action({ request, params, context }: ActionFunctionArgs) {
  const { messageStore, env } = await assertValidChat({ params, context });
  const formData = await request.formData();
  const input = formData.get("input");
  invariant(typeof input === "string" && input.length > 0, "input is invalid");
  await messageStore.add({ role: "user", content: input });
  await completeMessages({ messageStore, env });
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
              .map((message, index) => (
                <div key={index} className="">
                  <pre>{JSON.stringify(message, null, 2)}</pre>
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
