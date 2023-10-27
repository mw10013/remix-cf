import * as jose from "jose";
import { z } from "zod";
import { CloudflareEnv } from "~/types/cloudflareEnv";

const envSchema = z.object({
  ENVIRONMENT: z.string().min(1),
  OPENAI_API_KEY: z.string().min(1),
  REDOX_API_CLIENT_ID: z.string().min(1),
  REDOX_API_SCOPE: z.string().min(1),
  REDOX_API_PUBLIC_KID: z.string().min(1),
  REDOX_API_PRIVATE_JWK: z.string().min(1),
  REDOX_ENDPOINT_VERIFICATION_TOKEN: z.string().min(1),
});

type Env = z.infer<typeof envSchema>;

function assertEnv(obj: unknown): asserts obj is Env {
  envSchema.parse(obj);
}

async function createRedox(env: Env) {
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
    get,
    post,
  };

  async function get(api: string) {
    const jwtAccessToken = await requestJwtAccessToken(
      signedAssertion,
      env.REDOX_API_SCOPE,
    );
    console.log("jwtAccessToken:", jwtAccessToken);

    const response = await fetch(endpoint + api, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtAccessToken.access_token}`,
      },
    });
    await assertResponseOk(response);
    return await response.text();
  }

  async function post(api: string, body: unknown) {
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

assertEnv(process.env);
const redox = await createRedox(process.env);

console.log(
  "search: keva:",
  await redox.post("Patient/_search", {
    given: "Keva",
    family: "Green",
    birthdate: "1995-08-26",
  }),
);
console.log(
  "get: keva:",
  await redox.get(`Patient/18a9b01f-6c53-4c1d-a552-1aedab2655cf`),
);
// console.log("get: keva:", await redox.get(`Patient/kyHGADnvX3xbkU4V9ayaqh`));
