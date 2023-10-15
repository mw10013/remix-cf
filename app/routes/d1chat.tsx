import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { useActionData } from "@remix-run/react";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { ChatPromptTemplate, MessagesPlaceholder } from "langchain/prompts";
import { StringOutputParser } from "langchain/schema/output_parser";
import { RunnableSequence } from "langchain/schema/runnable";
import { CloudflareD1MessageHistory } from "langchain/stores/message/cloudflare_d1";
import invariant from "tiny-invariant";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

export async function action({ request, context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);
  const formData = await request.formData();
  const input = formData.get("input");
  invariant(typeof input === "string" && input.length > 0, "input is invalid");
  const model = new ChatOpenAI({
    openAIApiKey: context.env.OPENAI_API_KEY,
    temperature: 0.8,
  });
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful chatbot"],
    new MessagesPlaceholder("history"),
    ["human", "{input}"],
  ]);

  const memory = new BufferMemory({
    returnMessages: true,
    chatHistory: new CloudflareD1MessageHistory({
      tableName: "d1chat_message",
      sessionId: "d1chat_sessionid_1",
      database: context.env.DB,
    }),
  });

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

  return { result, messages: await memory.chatHistory.getMessages() };
}

export default function Route() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto max-w-md">
        <CardHeader>D1 Chat</CardHeader>
        <CardBody>
          <form method="POST" className="flex flex-col gap-2">
            <Input type="text" label="Input" isRequired name="input" />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
      <pre>{JSON.stringify(actionData, null, 2)}</pre>
    </div>
  );
}
