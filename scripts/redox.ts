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
  // const endpoint =
  //   "https://api.redoxengine.com/fhir/R4/redox-fhir-sandbox/Development/";
  const endpoint = "https://api.redoxengine.com/endpoint";
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

  async function post(body: unknown) {
    const jwtAccessToken = await requestJwtAccessToken(
      signedAssertion,
      env.REDOX_API_SCOPE,
    );

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

// { ID: '0000000001', IDType: 'MR' },
// { ID: 'e167267c-16c9-4fe3-96ae-9cff5703e90a', IDType: 'EHRID' },
// { ID: 'a1d4ee8aba494ca', IDType: 'NIST' }

// https://developer.redoxengine.com/data-models/PatientSearch.html#Query
console.log("😀> PatientSearch Query: Timothy Bixby, 2008-01-06");
console.dir(
  await redox.post({
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
        FirstName: "Timothy",
        LastName: "Bixby",
        DOB: "2008-01-06",
      },
    },
  }),
  { depth: null },
);

console.log("😀> PatientSearch Query: { ID: '0000000001', IDType: 'MR' }");
console.dir(
  await redox.post({
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
      Identifiers: [{ ID: "0000000001", IDType: "MR" }],
    },
  }),
  { depth: null },
);

// https://developer.redoxengine.com/data-models/ClinicalSummary.html#PatientQuery
// console.log("😀> Clinical Summary: { ID: '0000000001', IDType: 'MR' }");
// console.dir(
//   await redox.post({
//     Meta: {
//       DataModel: "Clinical Summary",
//       EventType: "PatientQuery",
//       EventDateTime: "2023-10-27T20:13:23.435Z",
//       Test: true,
//       // Source: {
//       //   ID: "7ce6f387-c33c-417d-8682-81e83628cbd9",
//       //   Name: "Redox Dev Tools",
//       // },
//       Destinations: [
//         {
//           ID: "ef9e7448-7f65-4432-aa96-059647e9b357",
//           Name: "Patient Query Endpoint",
//         },
//       ],
//       Logs: [
//         {
//           ID: "d9f5d293-7110-461e-a875-3beb089e79f3",
//           AttemptID: "925d1617-2fe0-468c-a14c-f8c04b572c54",
//         },
//       ],
//       FacilityCode: null,
//     },
//     Patient: {
//       Identifiers: [
//         {
//           ID: "0000000001",
//           IDType: "MR",
//         },
//         {
//           ID: "e167267c-16c9-4fe3-96ae-9cff5703e90a",
//           IDType: "EHRID",
//         },
//         {
//           ID: "a1d4ee8aba494ca",
//           IDType: "NIST",
//         },
//       ],
//     },
//     Location: {
//       Department: null,
//     },
//   }),
//   { depth: null },
// );
