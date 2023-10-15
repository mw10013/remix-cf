import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const Chats = sqliteTable("Chats", {
  id: integer("id", { mode: "number" }).primaryKey(),
  createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
});

/**
 * Must align with CloudflareD1MessageHistory schema in ensureTable() method.
 * Reason for session_id and not sessionId.
 */
export const ChatMessages = sqliteTable(
  "ChatMessages",
  {
    id: text("id").primaryKey(),
    session_id: text("session_id")
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
      session_id_index: index("session_id_index").on(table.session_id),
    };
  },
);
