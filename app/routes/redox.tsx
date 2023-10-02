import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";
import * as jose from "jose";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

// const jose = require('jose');
// const axios = require('axios');
// const randomBytes = require('crypto').randomBytes;
// const qsStringify = require('querystring').stringify;
// const https = require('node:https');

// // import your private key as PEM or JWK
// const privateKeyPEM = ``;  // INSERT PRIVATE PEM KEY HERE

const clientId = "d250b218-c786-44d7-8c72-62937f6b132c";
// const iat = Math.floor(new Date().getTime()/1000);  // Current timestamp in seconds (undefined is valid)
const aud = "https://api.redoxengine.com/v2/auth/token";
// const kid = '<INSERT KID HERE>';
const scope = "fhir:development"; // valid scopes are 'fhir:development', 'fhir:staging', or 'fhir:production'

async function getSignedAssertion(
  clientId,
  privateKeyPEM,
  kid,
  aud,
  iat,
  scope,
) {
  const privateKey = await jose.importPKCS8(privateKeyPEM, "RS384");

  const payload = {
    scope,
  };

  const signedAssertion = await new jose.SignJWT(payload)
    .setProtectedHeader({
      alg: "RS384",
      kid: kid,
    })
    .setAudience(aud)
    .setIssuer(clientId)
    .setSubject(clientId)
    .setIssuedAt(iat)
    .setJti(randomBytes(8).toString("hex")) // a random string to prevent replay attacks
    .sign(privateKey);

  return signedAssertion;
}

export function action({ context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);
  //   console.log("redox: action:", context.env.REDOX_PRIVATE_JWK);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const privateKeyJwk = JSON.parse(context.env.REDOX_PRIVATE_JWK);
  console.log("redox: action: privateKeyJwk", privateKeyJwk);

  //   const signedAssertion = await getSignedAssertion(
  //     clientId,
  //     privateKeyPEM,
  //     kid,
  //     aud,
  //     iat,
  //     scope,
  //   );
  //   console.log("go: signedAssertion:", signedAssertion);
  return null;
}

/*
            console.log("signedAssertion:", signedAssertion);
            //   try {
            //     const response = await fetch('/api/redox', {
            //       method: 'POST',
            //       headers: {
            //         'Content-Type': 'application/json'
            //       },
            //       body: JSON.stringify({
            //         challenge: 'challenge'
            //       })
            //     });
            //     const data = await response.json();
            //     console.log(data);
            //   } catch (error) {
            //     console.log('Error fetching:', error);
            //   }
*/

export default function Route() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>Redox</CardHeader>
      <CardBody>
        <Form method="POST">
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

// async function getSignedAssertion(clientId, privateKeyPEM, kid, aud, iat, scope) {
//     const privateKey = await jose.importPKCS8(privateKeyPEM, 'RS384');

//     const payload = {
//         scope,
//     };

//     const signedAssertion = await new jose.SignJWT(payload)
//     .setProtectedHeader({
//         alg: 'RS384',
//         kid: kid
//     })
//     .setAudience(aud)
//     .setIssuer(clientId)
//     .setSubject(clientId)
//     .setIssuedAt(iat)
//     .setJti(randomBytes(8).toString('hex')) // a random string to prevent replay attacks
//     .sign(privateKey);

//     return signedAssertion;
// }

// async function requestJwtAccessTokenAxios(signedAssertion, scope) {
//     const requestBody = qsStringify({
//       grant_type: 'client_credentials',
//       client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
//       client_assertion: signedAssertion,
//       scope
//     });

//     try {
//       const result = await axios.post(
//         "https://api.redoxengine.com/v2/auth/token", requestBody, {
//           headers: {
//             'content-type': 'application/x-www-form-urlencoded'
//           }
//         }
//       );

//       // return response with keys: access_token, scope, token_type, and expires_in
//       return result.data;
//     }
//     catch(e) {
//       return e.response.data;
//     }
// }

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
