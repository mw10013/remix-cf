import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

/**
 * @see https://js.langchain.com/docs/modules/agents/agent_types/chat_conversation_agent
 */
export async function action({ context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);
  // https://github.com/langchain-ai/langchain/issues/3443
  // process.env.LANGCHAIN_HANDLER = "langchain";
  const model = new ChatOpenAI({
    openAIApiKey: context.env.OPENAI_API_KEY,
    temperature: 0,
  });
  const tools = [
    new SerpAPI(context.env.SERPAPI_API_KEY, {
      location: "Austin,Texas,United States",
      hl: "en",
      gl: "us",
    }),
    new Calculator(),
  ];

  // Passing "chat-conversational-react-description" as the agent type
  // automatically creates and uses BufferMemory with the executor.
  // If you would like to override this, you can pass in a custom
  // memory option, but the memoryKey set on it must be "chat_history".
  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "chat-conversational-react-description",
    verbose: true,
  });
  const input0 = "hi, i am bob";
  const result0 = await executor.call({ input: input0 });

  const input1 = "whats my name?";
  const result1 = await executor.call({ input: input1 });

  const input2 = "whats the weather in pomfret?";
  const result2 = await executor.call({ input: input2 });

  return { input0, result0, input1, result1, input2, result2 };
}

export default function Route() {
  const actionData = useActionData<typeof action>();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>Agent Conversation 1</CardHeader>
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
