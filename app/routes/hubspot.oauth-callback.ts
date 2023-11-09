import { LoaderFunctionArgs, redirect } from "@remix-run/cloudflare";
import invariant from "tiny-invariant";
import { hookCloudflareEnv, hookHubspot, hookSession } from "~/lib/hooks";

export async function loader({ request, context }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  invariant(code, "Invalid code");

  const env = hookCloudflareEnv(context.env);
  const { getSession, commitSession } = hookSession(env);
  const session = await getSession(request.headers.get("Cookie"));
  const { exchangeProofForTokens } = hookHubspot();

  const searchParams = new URLSearchParams();
  searchParams.append("grant_type", "authorization_code");
  searchParams.append("client_id", env.HUBSPOT_CLIENT_ID);
  searchParams.append("client_secret", env.HUBSPOT_CLIENT_SECRET);
  searchParams.append("redirect_uri", env.HUBSPOT_REDIRECT_URI);
  searchParams.append("code", code);
  await exchangeProofForTokens(searchParams, session);

  return redirect("/session", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
