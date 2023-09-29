import { ActionFunctionArgs, json } from "@remix-run/cloudflare";
import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

export const action = async ({ request, context }: ActionFunctionArgs) => {
  try {
    assertCloudflareEnv(context.env);
    const openai = new OpenAI({
      apiKey: context.env.OPENAI_API_KEY,
    });
    const { messages } = await request.json<any>();
    console.log("api.openai:", JSON.stringify(messages, null, 2));
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages,
    });
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);

    // const { stream, handlers } = LangChainStream();
    // const chat = new ChatOpenAI({
    //   // modelName: "gpt-4",
    //   modelName: "gpt-3.5-turbo",
    //   temperature: 0, // default is 1, range is 0 to 2
    //   // topP: 0.1, default is 1. openai does not recommend changing temperature and topP together.
    //   // timeout: 1000, put into baseOptions for openai and used for axios calls. axios timeout in ms and defaults to 0 (no timeout)
    //   maxRetries: 0,
    //   streaming: true,
    //   verbose: true,
    // });
    // chat.call(
    //   (messages as Message[]).map((m) =>
    //     m.role == "user"
    //       ? new HumanMessage(m.content)
    //       : m.role == "assistant"
    //       ? new AIMessage(m.content)
    //       : new SystemMessage(m.content),
    //   ),
    //   {},
    //   [handlers],
    // );
    // return new StreamingTextResponse(stream);
  } catch (e) {
    console.error(e);
    return json({ error: e instanceof Error ? e.message : e }, { status: 500 });
  }
};
