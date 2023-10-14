import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const Chats = sqliteTable("Chats", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
});

/**
 * Must align with CloudflareD1MessageHistory schema in ensureTable() method.
 */
export const chatMessages = sqliteTable(
  "chatMessages",
  {
    id: text("id").primaryKey(),
    sessionId: text("sessionId")
      .notNull()
      .references(() => Chats.id, { onDelete: "cascade" }), // https://www.answeroverflow.com/m/1110915016959475743
    type: text("type").notNull(),
    content: text("content").notNull(),
    role: text("role"),
    name: text("name"),
    additional_kwargs: text("additional_kwargs").notNull(),
  },
  (table) => {
    return {
      sessionIdIndex: index("sessionIdIndex").on(table.sessionId),
    };
  },
);

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  comment: text("comment"),
});

// interface selectStoredMessagesDTO {
//   id: string;
//   session_id: string;
//   type: string;
//   content: string;
//   role: string | null;
//   name: string | null;
//   additional_kwargs: string;

// private async ensureTable(): Promise<void> {
//   if (this.tableInitialized) {
//     return;
//   }

//   const query = `CREATE TABLE IF NOT EXISTS ${this.tableName} (id TEXT PRIMARY KEY, session_id TEXT, type TEXT, content TEXT, role TEXT, name TEXT, additional_kwargs TEXT);`;
//   await this.database.prepare(query).bind().all();

//   const idIndexQuery = `CREATE INDEX IF NOT EXISTS id_index ON ${this.tableName} (id);`;
//   await this.database.prepare(idIndexQuery).bind().all();

//   const sessionIdIndexQuery = `CREATE INDEX IF NOT EXISTS session_id_index ON ${this.tableName} (session_id);`;
//   await this.database.prepare(sessionIdIndexQuery).bind().all();

//   this.tableInitialized = true;
// }
