import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { ActionFunctionArgs, json } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import * as jose from "jose";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

const AUD = "https://api.redoxengine.com/v2/auth/token";

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

  if (!response.ok) {
    throw new Error("Request failed with status: " + response.status);
  }

  return await response.json<string>();
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

export async function action({ context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);
  const signedAssertion = await getSignedAssertion({
    privateKeyJwk: JSON.parse(context.env.REDOX_API_PRIVATE_JWK) as jose.JWK,
    clientId: context.env.REDOX_API_CLIENT_ID,
    scope: context.env.REDOX_API_SCOPE,
    kid: context.env.REDOX_API_PUBLIC_KID,
    aud: AUD,
  });
  const accessToken = await requestJwtAccessToken(
    signedAssertion,
    context.env.REDOX_API_SCOPE,
  );
  console.log(
    "redox: action: accessToken:",
    JSON.stringify(accessToken, null, 2),
  );
  //     const accessTokenNoLibrary = await requestJwtAccessTokenNoLibrary(signedAssertion, scope);
  //     console.log({accessTokenNoLibrary});

  return json({ signedAssertion, accessToken });
}

export default function Route() {
  const actionData = useActionData<typeof action>();
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>Redox</CardHeader>
      <CardBody>
        <Form method="POST">
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
        <pre>{JSON.stringify(actionData, null, 2)}</pre>
      </CardBody>
    </Card>
  );
}

// async function requestJwtAccessTokenNoLibrary(signedAssertion, scope) {

//     const requestBody = qsStringify({
//         grant_type: 'client_credentials',
//         client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
//         client_assertion: signedAssertion,
//         scope
//       });

//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded'
//         }
//     };

//     return new Promise(function(resolve, reject) {
//         try {
//             const req = https.request('https://api.redoxengine.com/v2/auth/token', options, (res) => {
//                 console.log('statusCode:', res.statusCode);
//                 console.log('headers:', res.headers);
//                 let data = '';

//                 res.on('data', (d) => {
//                     data += d;
//                 });
//                 res.on('end', (d) =>{
//                     const parsed = JSON.parse(data);
//                     resolve(parsed);
//                 });
//                 res.on('error', (error) => {
//                     throw error;
//                 })
//             });

//             req.write(requestBody);
//             req.end();
//         }
//         catch(e) {
//             reject(e);
//         }

//     });
// }

// (async() => {
//     const signedAssertion = await getSignedAssertion(clientId, privateKeyPEM, kid, aud, iat, scope);
//     const accessTokenAxios = await requestJwtAccessTokenAxios(signedAssertion, scope);
//     const accessTokenNoLibrary = await requestJwtAccessTokenNoLibrary(signedAssertion, scope);
//     console.log({accessTokenAxios});
//     console.log({accessTokenNoLibrary});
// })();
