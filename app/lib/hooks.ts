import {
  createCookie,
  createWorkersKVSessionStorage,
} from "@remix-run/cloudflare";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

export function hookSession(kv: KVNamespace) {
  type SessionData = {
    hubspotAccessToken: string;
    hubspotRefreshToken: string;
    count: number;
  };
  type FlashData = { flashMessage: string };

  const sessionCookie = createCookie("__session", {
    secrets: ["r3m1xr0ck5"],
    // https://github.com/vercel/next.js/discussions/17612
    // sameSite: true,
    sameSite: "lax",
    maxAge: 60,
  });

  const { getSession, commitSession, destroySession } =
    createWorkersKVSessionStorage<SessionData, FlashData>({
      kv,
      cookie: sessionCookie,
    });

  return { getSession, commitSession, destroySession };
}
export function hookCloudflareEnv(env: unknown) {
  assertCloudflareEnv(env);
  return env;
}
