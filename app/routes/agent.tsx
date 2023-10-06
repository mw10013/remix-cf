import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

export async function action({ context }: ActionFunctionArgs) {
  // https://js.langchain.com/docs/modules/agents/agent_types/openai_functions_agent
  assertCloudflareEnv(context.env);
  const tools = [new Calculator(), new SerpAPI(context.env.SERPAPI_API_KEY)];
  const chat = new ChatOpenAI({
    // modelName: "gpt-4",
    modelName: "gpt-4-0613",
    openAIApiKey: context.env.OPENAI_API_KEY,
    temperature: 0,
  });

  const executor = await initializeAgentExecutorWithOptions(tools, chat, {
    agentType: "openai-functions",
    verbose: true,
  });

  const result = await executor.run("What is the weather in New York?");
  console.log(result);
  return { result };
}

export default function Route() {
  const actionData = useActionData<typeof action>();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>Agent</CardHeader>
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
