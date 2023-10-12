import { $, glob } from "zx";

const sqliteFiles = await glob("./.wrangler/**/*.sqlite");
console.log({ sqliteFiles });

if (sqliteFiles.length !== 1) {
  console.error("Expected exactly one sqlite file under .wrangler");
  process.exit(1);
}

await $`sqlite3 ${sqliteFiles[0]} "pragma table_list;"`;
await $`sqlite3 ${sqliteFiles[0]} < scripts/reset_sqlite.sql`;
await $`sqlite3 ${sqliteFiles[0]} "pragma table_list;"`;
