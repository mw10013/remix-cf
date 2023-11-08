import { LoaderFunctionArgs, redirect } from "@remix-run/cloudflare";
import invariant from "tiny-invariant";
import { hookCloudflareEnv, hookSession } from "~/lib/hooks";
import { assertResponseOk } from "~/lib/utils";

export async function loader({ request, context }: LoaderFunctionArgs) {
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
  const { access_token, refresh_token, expires_in } = await response.json<{
    access_token: string;
    refresh_token: string;
    expires_in: number;
  }>();
  console.log({ access_token, refresh_token, expires_in });

  const { getSession, commitSession } = hookSession(env);
  const session = await getSession(request.headers.get("Cookie"));
  session.set("hubspotAccessToken", access_token);
  session.set("hubspotRefreshToken", refresh_token);

  return redirect("/session", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
