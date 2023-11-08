import { LoaderFunctionArgs, redirect } from "@remix-run/cloudflare";
import invariant from "tiny-invariant";
import { hookCloudflareEnv, hookSession } from "~/lib/hooks";

async function assertResponseOk(res: Response) {
  if (!res.ok) {
    const error = new Error(
      `${res.status} ${res.statusText} ${await res.text()}`,
    );
    throw error;
  }
}

export async function loader({ request, context }: LoaderFunctionArgs) {
  console.log("oauth-callback: cookie:", request.headers.get("Cookie"));

  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  invariant(code, "Invalid code");

  const env = hookCloudflareEnv(context.env);
  // https://bobbyhadz.com/blog/post-form-data-using-javascript-fetch-api
  const searchParams = new URLSearchParams();
  searchParams.append("grant_type", "authorization_code");
  searchParams.append("client_id", env.HUBSPOT_CLIENT_ID);
  searchParams.append("client_secret", env.HUBSPOT_CLIENT_SECRET);
  searchParams.append("redirect_uri", env.HUBSPOT_REDIRECT_URI);
  searchParams.append("code", code);

  const response = await fetch("https://api.hubapi.com/oauth/v1/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: searchParams,
  });
  await assertResponseOk(response);
  const { access_token, refresh_token } = await response.json<{
    access_token: string;
    refresh_token: string;
  }>();

  const { getSession, commitSession } = hookSession(env.KV);
  const session = await getSession(request.headers.get("Cookie"));
  session.set("hubspotAccessToken", access_token);
  session.set("hubspotRefreshToken", refresh_token);

  return redirect("/session", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
