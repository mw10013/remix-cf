import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import {
  ActionFunctionArgs,
  DataFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/cloudflare";
import { Form, useLoaderData } from "@remix-run/react";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { getTableConfig } from "drizzle-orm/sqlite-core";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { ChatPromptTemplate, MessagesPlaceholder } from "langchain/prompts";
import { StringOutputParser } from "langchain/schema/output_parser";
import { RunnableSequence } from "langchain/schema/runnable";
import { CloudflareD1MessageHistory } from "langchain/stores/message/cloudflare_d1";
import invariant from "tiny-invariant";
import { ChatMessages, Chats } from "~/lib/db/schema";
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
    .from(Chats)
    .where(eq(Chats.id, Number(params.id)));
  invariant(chat, "invalid chat");

  const memory = new BufferMemory({
    returnMessages: true,
    chatHistory: new CloudflareD1MessageHistory({
      tableName: getTableConfig(ChatMessages).name,
      sessionId: chat.id.toString(),
      database: context.env.DB,
    }),
  });
  return { db, chat, memory, env: context.env };
}

export async function loader({ params, context }: LoaderFunctionArgs) {
  const { chat, memory } = await assertValidChat({ params, context });
  const memoryVariables = await memory.loadMemoryVariables({});

  return {
    memoryVariables,
    chat,
  };
}

export async function action({ request, params, context }: ActionFunctionArgs) {
  const { memory, env } = await assertValidChat({ params, context });
  const formData = await request.formData();
  const input = formData.get("input");
  invariant(typeof input === "string" && input.length > 0, "input is invalid");
  const model = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",

    openAIApiKey: env.OPENAI_API_KEY,
    temperature: 0.8,
  });
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful chatbot"],
    new MessagesPlaceholder("history"),
    ["human", "{input}"],
  ]);

  const chain = RunnableSequence.from<{ input: string }, string>([
    {
      input: (initialInput) => initialInput.input,
      memory: () => memory.loadMemoryVariables({}),
    },
    {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
      input: (previousOutput) => previousOutput.input,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
      history: (previousOutput) => previousOutput.memory.history,
    },
    prompt,
    model,
    new StringOutputParser(),
  ]);

  const chainInput = { input };
  const result = await chain.invoke(chainInput);
  await memory.saveContext(chainInput, {
    output: result,
  });

  // Let revalidation handle data updates.
  return null;
}

export default function Route() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>Conversation</CardHeader>
        <CardBody>
          <Form method="POST" className="flex flex-col gap-2">
            <Input type="text" label="Input" isRequired name="input" />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
