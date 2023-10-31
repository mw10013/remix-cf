import readline from "readline/promises";
import * as jose from "jose";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";
import invariant from "tiny-invariant";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

console.log("bchat");

async function createRedox() {
  const endpoint =
    "https://api.redoxengine.com/fhir/R4/redox-fhir-sandbox/Development/";
  const aud = "https://api.redoxengine.com/v2/auth/token";

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
    aud,
  });

  const redox = {
    post,
  };

  async function post(api: string, body: unknown) {
    invariant(
      typeof process.env.REDOX_API_SCOPE === "string",
      "Invalid REDOX_API_SCOPE",
    );
    const jwtAccessToken = await requestJwtAccessToken(
      signedAssertion,
      process.env.REDOX_API_SCOPE,
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

type FunctionDescription<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends z.ZodObject<any, any, any, any> = z.ZodObject<any, any, any, any>,
> = {
  name: string;
  description: string;
  schema: T;
  func: (input: z.infer<T>) => Promise<string>;
};

const redox = await createRedox();
const functionDescriptions: FunctionDescription[] = [
  (() => {
    const schema = z.object({
      location: z
        .string()
        .describe("The city and state, e.g. San Francisco, CA"),
      unit: z.enum(["celsius", "fahrenheit"]).optional(),
    });

    return {
      name: "getCurrentWeather",
      description: "Get the current weather in a given location",
      schema,
      func: async ({
        location,
        unit = "fahrenheit",
      }: z.infer<typeof schema>) => {
        const weatherInfo = {
          location,
          temperature: "72",

          unit,
          forecast: ["sunny", "windy"],
        };
        return Promise.resolve(JSON.stringify(weatherInfo));
      },
    };
  })(),
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
  apiKey: process.env.OPENAI_API_KEY,
});

function createMessageStore() {
  const messageStore = {
    messages: [] as ChatCompletionMessageParam[],
    add(message: ChatCompletionMessageParam) {
      messageStore.messages.push(message);
    },
  };
  return messageStore;
}

type MessageStore = ReturnType<typeof createMessageStore>;

async function completeMessages(messageStore: MessageStore) {
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
  messageStore.add(completionMessage);

  if (!completionMessage.function_call) {
    return completionMessage.content;
  }

  const functionName = completionMessage.function_call.name;
  console.log(
    `🦫 >`,
    `${functionName}: ${completionMessage.function_call.arguments}`,
  );

  const functionDescription = functionDescriptions.find(
    ({ name }) => name === functionName,
  );
  if (!functionDescription) {
    return `Function named ${functionName} not found`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const functionArguments = JSON.parse(
    completionMessage.function_call.arguments,
  );
  const parseResult = functionDescription.schema.safeParse(functionArguments);
  if (!parseResult.success) {
    return `Error parsing arguments for function ${functionName}: ${parseResult.error.message}`;
  }
  const functionOutput = await functionDescription.func(parseResult.data);
  messageStore.add({
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
  console.log("functionCompletionMessage:", functionCompletionMessage);
  messageStore.add(functionCompletionMessage);
  return functionCompletionMessage.content;
}

const messageStore = createMessageStore();
messageStore.add({ role: "system", content: "You are a helpful assistant." });

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
    messageStore.add({ role: "user", content: input });
    const output = await completeMessages(messageStore);
    console.log(`🦫 > ${output}`);
  }
}
stdio.close();
