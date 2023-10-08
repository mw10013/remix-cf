import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { ChatPromptTemplate, MessagesPlaceholder } from "langchain/prompts";
import { BaseMessage, BaseMessageChunk } from "langchain/schema";
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

  console.log(await memory.loadMemoryVariables({}));
  /*
    { history: [] }
  */

  const chain = RunnableSequence.from<{ input: string }, BaseMessageChunk>([
    //   const chain = RunnableSequence.from<{ input: string }, BaseMessage>([
    {
      input: (initialInput) => initialInput.input,
      memory: () => memory.loadMemoryVariables({}),
    },
    {
      input: (previousOutput) => previousOutput.input,
      history: (previousOutput) => previousOutput.memory.history,
    },
    prompt,
    model,
  ]);

  const inputs = {
    input: "Hey, I'm Bob!",
  };
  const response = await chain.invoke(inputs);
  console.log(response);

  /*
    AIMessage {
      content: " Hi Bob, nice to meet you! I'm Claude, an AI assistant created by Anthropic to be helpful, harmless, and honest.",
      additional_kwargs: {}
    }
  */

  await memory.saveContext(inputs, {
    output: response.content,
  });
  console.log(await memory.loadMemoryVariables({}));
  /*
    {
      history: [
        HumanMessage {
          content: "Hey, I'm Bob!",
          additional_kwargs: {}
        },
        AIMessage {
          content: " Hi Bob, nice to meet you! I'm Claude, an AI assistant created by Anthropic to be helpful, harmless, and honest.",
          additional_kwargs: {}
        }
      ]
    }
  */

  const inputs2 = {
    input: "What's my name?",
  };
  const response2 = await chain.invoke(inputs2);
  console.log(response2);
  return {
    chain,
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
      <pre className="mt-2">{JSON.stringify(actionData, null, 2)}</pre>
    </div>
  );
}
