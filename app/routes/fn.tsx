import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import { createStructuredOutputChainFromZod } from "langchain/chains/openai_functions";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

// https://js.langchain.com/docs/modules/chains/popular/structured_output

async function formatTextIntoStructuredData(openAIApiKey: string) {
  const zodSchema = z.object({
    foods: z
      .array(
        z.object({
          name: z.string().describe("The name of the food item"),
          healthy: z.boolean().describe("Whether the food is good for you"),
          color: z.string().optional().describe("The color of the food"),
        }),
      )
      .describe("An array of food items mentioned in the text"),
  });

  const prompt = new ChatPromptTemplate({
    promptMessages: [
      SystemMessagePromptTemplate.fromTemplate(
        "List all food items mentioned in the following text.",
      ),
      HumanMessagePromptTemplate.fromTemplate("{inputText}"),
    ],
    inputVariables: ["inputText"],
  });
  const llm = new ChatOpenAI({
    modelName: "gpt-3.5-turbo-0613",
    openAIApiKey,
    temperature: 0,
  });

  const functionCallingModel = llm.bind({
    functions: [
      {
        name: "output_formatter",
        description: "Should always be used to properly format output",
        parameters: zodToJsonSchema(zodSchema),
      },
    ],
    function_call: { name: "output_formatter" }, // always call
  });
  const outputParser = new JsonOutputFunctionsParser();
  const chain = prompt.pipe(functionCallingModel).pipe(outputParser);
  const response = await chain.invoke({
    inputText: "I like apples, bananas, oxygen, and french fries.",
  });
  return response;
}

async function generateDatabaseRecord(openAIApiKey: string) {
  const zodSchema = z.object({
    name: z.string().describe("Human name"),
    surname: z.string().describe("Human surname"),
    age: z.number().describe("Human age"),
    birthplace: z.string().describe("Where the human was born"),
    appearance: z.string().describe("Human appearance description"),
    shortBio: z.string().describe("Short bio secription"),
    university: z.string().optional().describe("University name if attended"),
    gender: z.string().describe("Gender of the human"),
    interests: z
      .array(z.string())
      .describe("json array of strings human interests"),
  });

  const prompt = new ChatPromptTemplate({
    promptMessages: [
      SystemMessagePromptTemplate.fromTemplate(
        "Generate details of a hypothetical person.",
      ),
      HumanMessagePromptTemplate.fromTemplate(
        "Additional context: {inputText}",
      ),
    ],
    inputVariables: ["inputText"],
  });

  const llm = new ChatOpenAI({
    modelName: "gpt-3.5-turbo-0613",
    openAIApiKey,
    temperature: 1,
  });

  const chain = createStructuredOutputChainFromZod(zodSchema, {
    prompt,
    llm,
    outputKey: "person",
  });

  const response = await chain.call({
    inputText:
      "Please generate a diverse group of people, but don't generate anyone who likes video games.",
  });
  return response;
}

export async function action({ context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);
  return {
    formatTextIntoStructuredData: await formatTextIntoStructuredData(
      context.env.OPENAI_API_KEY,
    ),
    generateDatabaseRecord: await generateDatabaseRecord(
      context.env.OPENAI_API_KEY,
    ),
  };
}

export default function Route() {
  const actionData = useActionData<typeof action>();
  return (
    <div className="flex flex-col gap-2">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>Fn</CardHeader>
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
