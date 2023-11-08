import { LoaderFunctionArgs, redirect } from "@remix-run/cloudflare";
import invariant from "tiny-invariant";
import { hookCloudflareEnv } from "~/lib/hooks";

async function assertResponseOk(res: Response) {
  if (!res.ok) {
    const error = new Error(
      `${res.status} ${res.statusText} ${await res.text()}`,
    );
    throw error;
  }
}

export async function loader({ request, context }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  console.log("hubspot.oauth-callback:", {
    url: request.url,
    search: url.search,
    code,
  });
  invariant(code, "Invalid code");

  const env = hookCloudflareEnv(context.env);
  // https://bobbyhadz.com/blog/post-form-data-using-javascript-fetch-api
  const formData = new FormData();
  formData.append("grant_type", "authorization_code");
  formData.append("client_id", env.HUBSPOT_CLIENT_ID);
  formData.append("client_secret", env.HUBSPOT_CLIENT_SECRET);
  formData.append("redirect_uri", env.HUBSPOT_REDIRECT_URI);
  formData.append("code", code);
  console.dir(Array.from(formData));

  const searchParams = new URLSearchParams();
  for (const [key, value] of formData) {
    if (typeof value === "string") {
      searchParams.append(key, value);
    }
  }

  console.log(searchParams.toString());

  const response = await fetch("https://api.hubapi.com/oauth/v1/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: searchParams,
  });
  await assertResponseOk(response);
  console.dir(await response.json());

  // const { getSession, commitSession } = hookSession(env.KV);
  // const session = await getSession(request.headers.get("Cookie"));

  return redirect("/");
}
