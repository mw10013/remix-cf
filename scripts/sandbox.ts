/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Database from "better-sqlite3";
import { BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";
import { glob } from "zx";
import { ChatMessages, Chats } from "~/lib/db/schema";

/**
 * Reset the local d1 database in .wrangler and apply migrations.
 * This will only work locally
 */

const sqliteFiles = await glob("./.wrangler/**/*.sqlite");
console.log({ sqliteFiles });

if (sqliteFiles.length !== 1) {
  console.error("Expected exactly one sqlite file under .wrangler");
  process.exit(1);
}

const sqlite = new Database(sqliteFiles[0]);
const db: BetterSQLite3Database = drizzle(sqlite);

const [{ id }] = await db.insert(Chats).values({}).returning({ id: Chats.id });

const message: ChatCompletionMessageParam = {
  role: "system",
  content: "You are a helpful assistant.",
};

await db.insert(ChatMessages).values({ chat_id: id, message });

const result = await db.select().from(ChatMessages);
console.log({ result });
