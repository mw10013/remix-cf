import {
  createCookie,
  createWorkersKVSessionStorage,
} from "@remix-run/cloudflare";
import { assertCloudflareEnv, CloudflareEnv } from "~/types/cloudflareEnv";

export function hookCloudflareEnv(env: unknown) {
  assertCloudflareEnv(env);
  return env;
}

export function hookSession(env: CloudflareEnv) {
  type SessionData = {
    hubspotAccessToken: string;
    hubspotRefreshToken: string;
    hubspotExpiresAt: number;
  };
  type FlashData = { flashMessage: string };

  const sessionCookie = createCookie("__session", {
    secrets: [env.COOKIE_SECRET],
    // https://github.com/vercel/next.js/discussions/17612
    sameSite: "lax",
    maxAge: 60,
  });

  const { getSession, commitSession, destroySession } =
    createWorkersKVSessionStorage<SessionData, FlashData>({
      kv: env.KV,
      cookie: sessionCookie,
    });

  return { getSession, commitSession, destroySession };
}

export function hookHubspot({
  env,
  session,
}: {
  env: CloudflareEnv;
  session: Awaited<ReturnType<ReturnType<typeof hookSession>["getSession"]>>;
}) {
  const authUrl = `https://app.hubspot.com/oauth/authorize?client_id=${
    env.HUBSPOT_CLIENT_ID
  }&redirect_uri=${encodeURI(
    env.HUBSPOT_REDIRECT_URI,
  )}&scope=crm.objects.contacts.read`;

  const getAccessToken = () => {
    const accessToken = session.get("hubspotAccessToken");
    if (!accessToken) {
      return null;
    }
    return accessToken;
  };

  return {
    authUrl,
    getAccessToken,
  };
}
