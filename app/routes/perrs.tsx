import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { DynamicStructuredTool } from "langchain/tools";
import { z } from "zod";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

/**
 * @see https://js.langchain.com/docs/modules/agents/how_to/handle_parsing_errors
 */
export async function action({ context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);

  const model = new ChatOpenAI({
    openAIApiKey: context.env.OPENAI_API_KEY,
    temperature: 0.1,
  });
  const tools = [
    new DynamicStructuredTool({
      name: "task-scheduler",
      description: "Schedules tasks",
      schema: z
        .object({
          tasks: z
            .array(
              z.object({
                title: z
                  .string()
                  .describe("The title of the tasks, reminders and alerts"),
                due_date: z
                  .string()
                  .describe("Due date. Must be a valid JavaScript date string"),
                task_type: z
                  .enum([
                    "Call",
                    "Message",
                    "Todo",
                    "In-Person Meeting",
                    "Email",
                    "Mail",
                    "Text",
                    "Open House",
                  ])
                  .describe("The type of task"),
              }),
            )
            .describe("The JSON for task, reminder or alert to create"),
        })
        .describe("JSON definition for creating tasks, reminders and alerts"),
      func: async (input: { tasks: object }) =>
        Promise.resolve(JSON.stringify(input)),
    }),
  ];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "openai-functions",
    verbose: true,
    handleParsingErrors:
      "Please try again, paying close attention to the allowed enum values",
  });
  console.log("Loaded agent.");

  const input = `Set a reminder to renew our online property ads next week.`;

  console.log(`Executing with input "${input}"...`);

  const result = await executor.invoke({ input });

  console.log({ result });
  return { result };
}

export default function Route() {
  const actionData = useActionData<typeof action>();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>Handling Parsing Errors</CardHeader>
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
