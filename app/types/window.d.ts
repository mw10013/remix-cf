import type { CloudflareBrowserEnv } from "~/types/cloudflareEnv";

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    cloudflareBrowserEnv: CloudflareBrowserEnv;
  }
}

export {};
