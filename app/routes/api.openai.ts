import { ActionFunctionArgs } from "@remix-run/cloudflare";
import {
  OpenAIStream,
  StreamingTextResponse,
  Message as VercelChatMessage,
} from "ai";
import OpenAI from "openai";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

export const action = async ({ request, context }: ActionFunctionArgs) => {
  assertCloudflareEnv(context.env);
  const openai = new OpenAI({
    apiKey: context.env.OPENAI_API_KEY,
  });
  const { messages } = await request.json<{
    messages: VercelChatMessage[];
  }>();
  console.log("api.openai:", JSON.stringify(messages, null, 2));
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
};
