import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";

export const Chats = sqliteTable("Chats", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
});

export const ChatMessages = sqliteTable(
  "ChatMessages",
  {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    chat_id: integer("chat_id")
      .notNull()
      .references(() => Chats.id, { onDelete: "cascade" }), // https://www.answeroverflow.com/m/1110915016959475743
    message: text("message", {
      mode: "json",
    }).$type<ChatCompletionMessageParam>(),
  },
  (table) => {
    return {
      chat_id_index: index("chat_id_index").on(table.chat_id),
    };
  },
);
