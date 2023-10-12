import { $ } from "zx";

// await $`ls -la`;

// const flags = ["--oneline", "--decorate", "--color"];
// await $`git log ${flags}`;

// await $`pnpm drizzle:check`;
await $`pnpm wrangler d1 execute rcf_db --file=scripts/reset_sqlite.sql --local`;
