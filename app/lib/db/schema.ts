import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const Chats = sqliteTable("Chats", {
  id: integer("id", { mode: "number" }).primaryKey(),
  createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
});

/**
 * Must align with CloudflareD1MessageHistory schema in ensureTable() method.
 */
export const ChatMessages = sqliteTable(
  "ChatMessages",
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

export const Users = sqliteTable("Users", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  comment: text("comment"),
});
