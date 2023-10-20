import readline from "readline/promises";
import * as jose from "jose";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { RunnableSequence } from "langchain/schema/runnable";
import { DynamicStructuredTool, DynamicTool } from "langchain/tools";
import invariant from "tiny-invariant";
import { z } from "zod";

console.log("achat");

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

invariant(
  typeof process.env.REDOX_API_PRIVATE_JWK === "string" &&
    typeof process.env.REDOX_API_CLIENT_ID === "string" &&
    typeof process.env.REDOX_API_SCOPE === "string" &&
    typeof process.env.REDOX_API_PUBLIC_KID === "string",
  "Invalid env",
);
const signedAssertion = await getSignedAssertion({
  privateKeyJwk: JSON.parse(process.env.REDOX_API_PRIVATE_JWK) as jose.JWK,
  clientId: process.env.REDOX_API_CLIENT_ID,
  scope: process.env.REDOX_API_SCOPE,
  kid: process.env.REDOX_API_PUBLIC_KID,
  aud: AUD,
});
const jwtAccessToken = await requestJwtAccessToken(
  signedAssertion,
  process.env.REDOX_API_SCOPE,
);
console.log("jwtAccessToken:", jwtAccessToken);

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
            JSON.stringify({ patients: ["Jack", "Jill", "June"] }),
          );
        default:
          return Promise.resolve(JSON.stringify({ error: "Unknown doctor" }));
      }
    },
  }),
];
const llm = new ChatOpenAI({
  modelName: "gpt-4-0613",
  temperature: 0.8,
});
const memory = new BufferMemory({
  returnMessages: true,
});
const executor = await initializeAgentExecutorWithOptions(tools, llm, {
  agentType: "openai-functions",
  verbose: true,
  returnIntermediateSteps: true,
  maxIterations: 5,
  handleParsingErrors:
    "Try again, checking step-by-step that the arguments you supply exactly match the parameter types of the function",
});

// @ts-expect-error: not sure how to type this properly
const chain = RunnableSequence.from<{ input: string }, { output: string }>([
  {
    input: (initialInput) => initialInput.input,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    history: async () => (await memory.loadMemoryVariables({})).history,
  },
  executor,
]);

const stdio = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, no-constant-condition
while (true) {
  const input = await stdio.question("😀> ");
  if (input.toLowerCase() === "quit" || input.toLowerCase() === "exit") {
    break;
  } else if (input.length) {
    const chainInput = { input };
    const { output } = await chain.invoke(chainInput);
    await memory.saveContext(chainInput, { output });
    console.log(`🦫 ${typeof output}>`, output);
  }
}
stdio.close();
