import { z } from "zod";

export const cloudflareEnvSchema = z.object({
  ENVIRONMENT: z.string().min(1),
  HUBSPOT_CLIENT_ID: z.string().min(1),
  HUBSPOT_CLIENT_SECRET: z.string().min(1),
  HUBSPOT_REDIRECT_URI: z.string().min(1),
  OPENAI_API_KEY: z.string().min(1),
  REDOX_API_CLIENT_ID: z.string().min(1),
  REDOX_API_SCOPE: z.string().min(1),
  REDOX_API_KID: z.string().min(1),
  REDOX_API_PRIVATE_JWK: z.string().min(1),
  REDOX_ENDPOINT_VERIFICATION_TOKEN: z.string().min(1),
  SERPAPI_API_KEY: z.string().min(1),
  KV: z.record(z.unknown()).transform((obj) => obj as unknown as KVNamespace),
  DB: z.record(z.unknown()).transform((obj) => obj as unknown as D1Database),
  // SMN_R2: z.record(z.unknown()).transform((obj) => obj as unknown as R2Bucket),
});

export type CloudflareEnv = z.infer<typeof cloudflareEnvSchema>;

export function assertCloudflareEnv(
  obj: unknown,
): asserts obj is CloudflareEnv {
  cloudflareEnvSchema.parse(obj);
}

/**
 * Attached to window and contains browser env vars so no secrets.
 * See window.d.ts.
 */
export type CloudflareBrowserEnv = Pick<
  CloudflareEnv,
  "ENVIRONMENT"
  // | "SUPABASE_URL" | "SUPABASE_ANON_KEY"
>;

export type FormServerError = {
  formErrors: string[];
  fieldErrors: Record<string, string[]>;
};
