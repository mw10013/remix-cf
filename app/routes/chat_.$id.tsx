import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { StringOutputParser } from "langchain/schema/output_parser";
import { RunnableSequence } from "langchain/schema/runnable";
import invariant from "tiny-invariant";
import { Chats } from "~/lib/db/schema";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

const TEMPLATE = `You are a dim sum server in chinatown nyc. All responses must be Chinglish dialect that an English speaker can understand.
 
Current conversation:
{chat_history}
 
User: {input}
AI:`;

export async function action({ context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);
  const model = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    openAIApiKey: context.env.OPENAI_API_KEY,
    temperature: 0.8,
  });
  const prompt = PromptTemplate.fromTemplate(TEMPLATE);
  const outputParser = new StringOutputParser();
  const chain = RunnableSequence.from([prompt, model, outputParser]);
  const result = await chain.invoke({
    chat_history: "",
    input: "Tell me a joke",
  });

  return { chain, result };
}

export async function loader({ params, context }: LoaderFunctionArgs) {
  invariant(params.id, "invalid id");
  assertCloudflareEnv(context.env);
  const db = drizzle(context.env.DB);
  const chats = await db
    .select()
    .from(Chats)
    .where(eq(Chats.id, Number(params.id)));

  if (chats.length !== 1) {
    throw new Error("invalid chat");
  }
  return { chat: chats[0] };
}

export default function Route() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>Conversation</CardHeader>
        <CardBody>
          <Form method="POST">
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
      <pre className="mt-2">{JSON.stringify(actionData, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
