import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { MessagesPlaceholder } from "langchain/prompts";
import { Calculator } from "langchain/tools/calculator";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

/**
 * @see https://js.langchain.com/docs/modules/agents/agent_types/structured_chat
 */
export async function action({ context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);

  const model = new ChatOpenAI({
    modelName: "gpt-4-0613",
    openAIApiKey: context.env.OPENAI_API_KEY,
    temperature: 0,
  });
  const tools = [new Calculator()];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "structured-chat-zero-shot-react-description",
    verbose: true,
    memory: new BufferMemory({
      memoryKey: "chat_history",
      returnMessages: true,
    }),
    agentArgs: {
      inputVariables: ["input", "agent_scratchpad", "chat_history"],
      memoryPrompts: [new MessagesPlaceholder("chat_history")],
    },
  });

  const input = `what is 9 to the 2nd power?`;
  const result = await executor.call({ input });
  const input2 = `what is that number squared?`;
  const result2 = await executor.call({
    input: input2,
  });
  return { input, result, input2, result2 };
}

export default function Route() {
  const actionData = useActionData<typeof action>();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>Tool</CardHeader>
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
