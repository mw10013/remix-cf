import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Textarea,
} from "@nextui-org/react";
import {
  ActionFunctionArgs,
  DataFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/cloudflare";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { getTableConfig } from "drizzle-orm/sqlite-core";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { ChatPromptTemplate, MessagesPlaceholder } from "langchain/prompts";
import { BaseMessage, MessageType } from "langchain/schema";
import { StringOutputParser } from "langchain/schema/output_parser";
import { RunnableSequence } from "langchain/schema/runnable";
import { CloudflareD1MessageHistory } from "langchain/stores/message/cloudflare_d1";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import invariant from "tiny-invariant";
import { AChatMessages, AChats } from "~/lib/db/schema";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

async function assertValidChat({
  params,
  context,
}: Pick<DataFunctionArgs, "params" | "context">) {
  invariant(params.id, "invalid id");
  assertCloudflareEnv(context.env);
  const db = drizzle(context.env.DB);
  const [chat] = await db
    .select()
    .from(AChats)
    .where(eq(AChats.id, Number(params.id)));
  invariant(chat, "invalid chat");

  const memory = new BufferMemory({
    returnMessages: true,
    chatHistory: new CloudflareD1MessageHistory({
      tableName: getTableConfig(AChatMessages).name,
      sessionId: chat.id.toString(),
      database: context.env.DB,
    }),
  });
  return { db, chat, memory, env: context.env };
}

export async function loader({ params, context }: LoaderFunctionArgs) {
  const { memory } = await assertValidChat({ params, context });
  const memoryVariables = await memory.loadMemoryVariables({});
  const history = memoryVariables.history as BaseMessage[];
  const messages: { type: MessageType; content: string }[] = history.map(
    (m) => ({ type: m._getType(), content: m.content }),
  );

  return {
    messages,
  };
}

export async function action({ request, params, context }: ActionFunctionArgs) {
  const { memory, env } = await assertValidChat({ params, context });
  const formData = await request.formData();
  const input = formData.get("input");
  invariant(typeof input === "string" && input.length > 0, "input is invalid");
  const tools = [new Calculator(), new SerpAPI(env.SERPAPI_API_KEY)];
  const model = new ChatOpenAI({
    // modelName: "gpt-3.5-turbo",
    modelName: "gpt-4-0613",

    openAIApiKey: env.OPENAI_API_KEY,
    temperature: 0.8,
  });

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "openai-functions",
    verbose: true,
    // memory,
  });

  // const result = await executor.run("What is the weather in New York?");
  const result = await executor.run(input);
  console.log(result);

  // const prompt = ChatPromptTemplate.fromMessages([
  //   ["system", "You are a helpful chatbot"],
  //   new MessagesPlaceholder("history"),
  //   ["human", "{input}"],
  // ]);

  // const chain = RunnableSequence.from<{ input: string }, string>([
  //   {
  //     input: (initialInput) => initialInput.input,
  //     memory: () => memory.loadMemoryVariables({}),
  //   },
  //   {
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
  //     input: (previousOutput) => previousOutput.input,
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
  //     history: (previousOutput) => previousOutput.memory.history,
  //   },
  //   prompt,
  //   model,
  //   new StringOutputParser(),
  // ]);

  // const chainInput = { input };
  // const result = await chain.invoke(chainInput);
  // await memory.saveContext(chainInput, {
  //   output: result,
  // });

  // Let revalidation handle data updates.
  return null;
}

export default function Route() {
  const { messages } = useLoaderData<typeof loader>();
  const submit = useSubmit();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>Conversation</CardHeader>
        <CardBody className="flex flex-col gap-2">
          {/* https://code.hnldesign.nl/scrolltobottom/ */}
          <div className="flex h-64 flex-col-reverse overflow-y-auto">
            {messages
              .slice() // clone since reverse will mutate
              .reverse()
              .map(({ type, content }, index) => (
                <div key={index} className="">
                  {type}: {content}
                  {/* {index !== 0 && <Divider className="my-2" />} */}
                  <Divider className="my-2" />
                </div>
              ))}
          </div>
          <Form method="POST" className="flex flex-col gap-2">
            <Textarea
              name="input"
              minRows={2}
              maxRows={7}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (
                    e.target instanceof HTMLTextAreaElement &&
                    e.target.value.trim().length > 0
                  ) {
                    submit(e.target.form);
                    e.target.value = "";
                  }
                }
              }}
            />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
