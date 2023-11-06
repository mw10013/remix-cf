import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import invariant from "tiny-invariant";
import { hookCloudflareEnv, hookSession } from "~/lib/hooks";

export function loader({ request, context }: LoaderFunctionArgs) {
  const env = hookCloudflareEnv(context.env);
  const { getSession, commitSession } = hookSession(env.KV);
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  console.log("hubspot.oauth-callback:", {
    url: request.url,
    search: url.search,
  });
  invariant(code, "Invalid code");
  const formData = new FormData();
  formData.append("grant_type", "authorization_code");
  formData.append("client_id", env.HUBSPOT_CLIENT_ID);
  formData.append("client_secret", env.HUBSPOT_CLIENT_SECRET);
}
