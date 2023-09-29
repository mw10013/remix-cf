import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { StreamingTextResponse, Message as VercelChatMessage } from "ai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { BytesOutputParser } from "langchain/schema/output_parser";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

/**
 * Basic memory formatter that stringifies and passes message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`;
};

const TEMPLATE = `You are a pirate named Patchy. All responses must be laconic and in pirate dialect.
 
Current conversation:
{chat_history}
 
User: {input}
AI:`;

/**
 * @see https://sdk.vercel.ai/docs/guides/providers/langchain
 * @see https://js.langchain.com/docs/guides/expression_language/cookbook#prompttemplate--llm--outputparser
 */
export const action = async ({ request, context }: ActionFunctionArgs) => {
  assertCloudflareEnv(context.env);

  const body = await request.json<{ messages?: VercelChatMessage[] }>();
  const messages = body.messages ?? [];
  console.log("api.langchain: messages:", JSON.stringify(messages, null, 2));
  const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
  const currentMessageContent = messages[messages.length - 1].content;
  console.log(
    "api.langchain: formattedPreviousMessages:",
    JSON.stringify(formattedPreviousMessages, null, 2),
  );
  console.log("api.langchain: currentMessageContent:", currentMessageContent);

  const prompt = PromptTemplate.fromTemplate(TEMPLATE);
  const model = new ChatOpenAI({
    openAIApiKey: context.env.OPENAI_API_KEY,
    temperature: 0.8,
  });

  /**
   * Chat models stream message chunks rather than bytes, so this
   * output parser handles serialization and encoding.
   */
  const outputParser = new BytesOutputParser();

  /*
   * Can also initialize as:
   *
   * import { RunnableSequence } from "langchain/schema/runnable";
   * const chain = RunnableSequence.from([prompt, model, outputParser]);
   */
  const chain = prompt.pipe(model).pipe(outputParser);

  const stream = await chain.stream({
    chat_history: formattedPreviousMessages.join("\n"),
    input: currentMessageContent,
  });

  return new StreamingTextResponse(stream);
};
