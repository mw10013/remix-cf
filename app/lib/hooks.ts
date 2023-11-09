import {
  createCookie,
  createWorkersKVSessionStorage,
} from "@remix-run/cloudflare";
import { assertResponseOk } from "~/lib/utils";
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

export function hookHubspot() {
  type Session = Awaited<
    ReturnType<ReturnType<typeof hookSession>["getSession"]>
  >;

  const getAuthUrl = (env: CloudflareEnv) =>
    `https://app.hubspot.com/oauth/authorize?client_id=${
      env.HUBSPOT_CLIENT_ID
    }&redirect_uri=${encodeURI(
      env.HUBSPOT_REDIRECT_URI,
    )}&scope=crm.objects.contacts.read`;

  const getAccessToken = async ({
    session,
    env,
  }: {
    session: Session;
    env: CloudflareEnv;
  }) => {
    const accessToken = session.get("hubspotAccessToken");
    const refreshToken = session.get("hubspotRefreshToken");
    const expiresAt = session.get("hubspotExpiresAt");
    if (!accessToken || !refreshToken || !expiresAt) {
      return null;
    }
    if (Date.now() < expiresAt) {
      return accessToken;
    }
    console.log("getAccessToken: refresh token");
    const searchParams = new URLSearchParams();
    searchParams.append("grant_type", "refresh_token");
    searchParams.append("client_id", env.HUBSPOT_CLIENT_ID);
    searchParams.append("client_secret", env.HUBSPOT_CLIENT_SECRET);
    searchParams.append("redirect_uri", env.HUBSPOT_REDIRECT_URI);
    searchParams.append("refresh_token", refreshToken);
    await exchangeProofForTokens(searchParams, session);
    return session.get("hubspotAccessToken");
  };

  const exchangeProofForTokens = async (
    proof: URLSearchParams,
    session: Session,
  ) => {
    // https://bobbyhadz.com/blog/post-form-data-using-javascript-fetch-api
    const response = await fetch("https://api.hubapi.com/oauth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: proof,
    });
    await assertResponseOk(response);
    const { access_token, refresh_token, expires_in } = await response.json<{
      access_token: string;
      refresh_token: string;
      expires_in: number;
    }>();
    console.log({ access_token, refresh_token, expires_in });

    session.set("hubspotAccessToken", access_token);
    session.set("hubspotRefreshToken", refresh_token);
    session.set(
      "hubspotExpiresAt",
      Date.now() + Math.round(expires_in * 0.75) * 1000,
    );
  };

  return {
    getAuthUrl,
    getAccessToken,
    exchangeProofForTokens,
  };
}
