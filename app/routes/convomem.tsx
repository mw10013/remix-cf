import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { ChatPromptTemplate, MessagesPlaceholder } from "langchain/prompts";
import { BaseMessageChunk } from "langchain/schema";
import { RunnableSequence } from "langchain/schema/runnable";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

export async function action({ context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);
  const model = new ChatOpenAI({
    openAIApiKey: context.env.OPENAI_API_KEY,
    temperature: 0.8,
  });
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful chatbot"],
    new MessagesPlaceholder("history"),
    ["human", "{input}"],
  ]);

  // Default "inputKey", "outputKey", and "memoryKey values would work here
  // but we specify them for clarity.
  const memory = new BufferMemory({
    returnMessages: true,
    inputKey: "input",
    outputKey: "output",
    memoryKey: "history",
  });

  const chain = RunnableSequence.from<{ input: string }, BaseMessageChunk>([
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
  ]);

  const inputs = {
    input: "Hey, I'm Bob!",
  };
  const response = await chain.invoke(inputs);
  await memory.saveContext(inputs, {
    output: response.content,
  });

  const inputs2 = {
    input: "What's my name?",
  };
  const response2 = await chain.invoke(inputs2);
  return {
    chain,
    memory: await memory.loadMemoryVariables({}),
    inputs,
    content: response.content,
    response,
    inputs2,
    response2,
  };
}

export default function Route() {
  const actionData = useActionData<typeof action>();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>Conversation Memory</CardHeader>
        <CardBody>
          <Form method="POST">
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
      {actionData && (
        <Accordion
          isCompact
          selectionMode="multiple"
          defaultExpandedKeys={["1"]}
        >
          <AccordionItem key="1" aria-label="Chat" title="Chat">
            <pre>
              {JSON.stringify(
                {
                  inputs: actionData.inputs,
                  response: actionData.response,
                  inputs2: actionData.inputs2,
                  response2: actionData.response2,
                },
                null,
                2,
              )}
            </pre>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Memory" title="Memory">
            <pre>{JSON.stringify(actionData.memory, null, 2)}</pre>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Chain" title="Chain">
            <pre>{JSON.stringify(actionData.chain, null, 2)}</pre>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}
