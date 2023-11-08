import {
  createCookie,
  createWorkersKVSessionStorage,
} from "@remix-run/cloudflare";
import { assertCloudflareEnv, CloudflareEnv } from "~/types/cloudflareEnv";

export function hookSession(env: CloudflareEnv) {
  type SessionData = {
    hubspotAccessToken: string;
    hubspotRefreshToken: string;
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
export function hookCloudflareEnv(env: unknown) {
  assertCloudflareEnv(env);
  return env;
}
