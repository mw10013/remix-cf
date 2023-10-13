import { $, glob } from "zx";

/**
 * Push schema to the local d1 database in .wrangler.
 * This will only work locally
 */

const sqliteFiles = await glob("./.wrangler/**/*.sqlite");
console.log({ sqliteFiles });

if (sqliteFiles.length !== 1) {
  console.error("Expected exactly one sqlite file under .wrangler");
  process.exit(1);
}

await $`sqlite3 ${sqliteFiles[0]} --version`;
await $`drizzle-kit push:sqlite --schema=./app/lib/db/schema.ts --driver=better-sqlite --url=${sqliteFiles[0]} --verbose`;
