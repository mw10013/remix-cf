import * as jose from "jose";
import { z } from "zod";
import { cloudflareEnvSchema } from "~/types/cloudflareEnv";

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

  async function post(api: string, body: unknown) {
    const jwtAccessToken = await requestJwtAccessToken(
      signedAssertion,
      env.REDOX_API_SCOPE,
    );
    // console.log("jwtAccessToken:", jwtAccessToken);

    const response = await fetch(endpoint + api, {
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

// https://docs.redoxengine.com/fhir-api-actions/patients/search-for-a-patient-with-identifier/
console.log("search: urn:redox:redox-fhir-sandbox:MR|kyHGADnvX3xbkU4V9ayaqh");
console.dir(
  await redox.post("Patient/_search", {
    identifier: "urn:redox:redox-fhir-sandbox:MR|kyHGADnvX3xbkU4V9ayaqh",
  }),
  { depth: null },
);

// https://docs.redoxengine.com/fhir-api-actions/patients/search-for-a-patient-by-demographics/
console.log("search: Keva Green 1995-08-26");
console.dir(
  await redox.post("Patient/_search", {
    given: "Keva",
    family: "Green",
    birthdate: "1995-08-26",
  }),
  { depth: null },
);

// Inactive: const patientId = "69efd2ea-1256-4ae7-b4ec-5d0160427185";
const patientId = "81c2f5eb-f99f-40c4-b504-59483e6148d7";
console.log(`get ${patientId}`);
console.dir(await redox.get(`Patient/${patientId}`), { depth: null });

