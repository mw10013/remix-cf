import readline from "readline/promises";
import * as jose from "jose";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { cloudflareEnvSchema } from "~/types/cloudflareEnv";

console.log("bchat");

function createEnv() {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    DB,
    ...env
  } = cloudflareEnvSchema.shape;
  const envSchema = z.object({
    ...env,
  });
  return envSchema.parse(process.env);
}

async function createRedox(env: ReturnType<typeof createEnv>) {
  const endpoint = "https://api.redoxengine.com/endpoint";
  const fhirEndpoint =
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
    get,
    post,
    fhirPost,
  };

  async function get(api: string) {
    const jwtAccessToken = await requestJwtAccessToken(
      signedAssertion,
      env.REDOX_API_SCOPE,
    );
    // console.log("jwtAccessToken:", jwtAccessToken);

    const response = await fetch(endpoint + api, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtAccessToken.access_token}`,
      },
    });
    await assertResponseOk(response);
    return await response.json();
  }

  async function post(body: unknown) {
    const jwtAccessToken = await requestJwtAccessToken(
      signedAssertion,
      env.REDOX_API_SCOPE,
    );

    console.log("post:");
    console.dir(body, { depth: null });

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtAccessToken.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    await assertResponseOk(response);
    return await response.json();
  }

  async function fhirPost(api: string, body: unknown) {
    const jwtAccessToken = await requestJwtAccessToken(
      signedAssertion,
      env.REDOX_API_SCOPE,
    );
    // console.log("jwtAccessToken:", jwtAccessToken);
    const response = await fetch(fhirEndpoint + api, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtAccessToken.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    await assertResponseOk(response);
    return await response.json();
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

const env = createEnv();
const redox = await createRedox(env);

type FunctionDescription<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends z.ZodObject<any, any, any, any> = z.ZodObject<any, any, any, any>,
> = {
  name: string;
  description: string;
  schema: T;
  func: (input: z.infer<T>) => Promise<unknown>;
};

const functionDescriptions: FunctionDescription[] = [
  {
    name: "getPatientList",
    description:
      "Get a list of patients that includes identifiers and demographics",
    schema: z.object({}),
    func: async () =>
      Promise.resolve({
        patients: [
          {
            Identifiers: [
              { ID: "0000000001", IDType: "MR" },
              { ID: "e167267c-16c9-4fe3-96ae-9cff5703e90a", IDType: "EHRID" },
              { ID: "a1d4ee8aba494ca", IDType: "NIST" },
            ],
            FirstName: "Timothy",
            LastName: "Bixby",
            DOB: "2008-01-06",
          },
          { // Seems to be missing in Data Model API
            Identifiers: [
              // { ID: "483749", IDType: "MR" },
              { ID: "kyHGADnvX3xbkU4V9ayaqh", IDType: "MR" },
              { ID: "81c2f5eb-f99f-40c4-b504-59483e6148d", IDType: "EHRID" },
            ],
            FirstName: "Keva",
            LastName: "Green",
            DOB: "1995-08-26",
          },
        ],
      }),
  },
  (() => {
    const schema = z.object({
      FirstName: z.string().describe("The patient's first name"),
      LastName: z.string().describe("The patient's last name"),
      DOB: z.string().describe("The patient's date of birth"),
    });

    return {
      name: "patientSearchWithDemographics",
      description:
        "Search for a patient with demographics (first name, last name, DOB)",
      schema,
      func: async (demographics: z.infer<typeof schema>) => {
        return redox.post({
          Meta: {
            DataModel: "PatientSearch",
            EventType: "Query",
            Destinations: [
              {
                ID: "0f4bd1d1-451d-4351-8cfd-b767d1b488d6",
                Name: "Patient Search Endpoint",
              },
            ],
          },
          Patient: {
            Demographics: {
              ...demographics,
            },
          },
        });
      },
    };
  })(),
  (() => {
    const schema = z.object({
      Identifiers: z.array(
        z.object({
          ID: z.string().describe("The patient's identifier"),
          IDType: z.string().describe("The patient's identifier type"),
        }),
      ),
    });

    return {
      name: "patientSearchWithIdentifiers",
      description: "Search for a patient with identifiers (id and id type)",
      schema,
      func: async (identifiers: z.infer<typeof schema>) => {
        return redox.post({
          Meta: {
            DataModel: "PatientSearch",
            EventType: "Query",
            Destinations: [
              {
                ID: "0f4bd1d1-451d-4351-8cfd-b767d1b488d6",
                Name: "Patient Search Endpoint",
              },
            ],
          },
          Patient: {
            ...identifiers,
          },
        });
      },
    };
  })(),
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
  console.log("functionOutput:");
  console.dir(functionOutput, { depth: null });
  messageStore.add({
    role: "function",
    name: functionName,
    content:
      typeof functionOutput === "string"
        ? functionOutput
        : JSON.stringify(functionOutput, null, 2),
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
