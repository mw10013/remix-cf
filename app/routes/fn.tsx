import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import { createTaggingChain } from "langchain/chains";
import {
  createExtractionChainFromZod,
  createStructuredOutputChainFromZod,
} from "langchain/chains/openai_functions";
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  JsonOutputFunctionsParser,
  type FunctionParameters,
} from "langchain/output_parsers";
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

/**
 * @see https://js.langchain.com/docs/modules/chains/additional/openai_functions/extraction
 */
async function extraction(openAIApiKey: string) {
  const zodSchema = z.object({
    "person-name": z.string().optional(),
    "person-age": z.number().optional(),
    "person-hair_color": z.string().optional(),
    "dog-name": z.string().optional(),
    "dog-breed": z.string().optional(),
  });
  const chatModel = new ChatOpenAI({
    modelName: "gpt-3.5-turbo-0613",
    openAIApiKey,
    temperature: 0,
  });
  const chain = createExtractionChainFromZod(zodSchema, chatModel);
  return await chain.run(`Alex is 5 feet tall. Claudia is 4 feet taller Alex and jumps higher than him. Claudia is a brunette and Alex is blonde.
      Alex's dog Frosty is a labrador and likes to play hide and seek.`);
}

/**
 * @see https://js.langchain.com/docs/modules/chains/additional/openai_functions/tagging
 */
async function tagging(openAIApiKey: string) {
  const schema: FunctionParameters = {
    type: "object",
    properties: {
      sentiment: { type: "string" },
      tone: { type: "string" },
      language: { type: "string" },
    },
    required: ["tone"],
  };
  const chatModel = new ChatOpenAI({
    modelName: "gpt-4-0613",
    openAIApiKey,
    temperature: 0,
  });
  const chain = createTaggingChain(schema, chatModel);
  return await chain.run(
    `Estoy increiblemente contento de haberte conocido! Creo que seremos muy buenos amigos!`,
  );
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
    extraction: await extraction(context.env.OPENAI_API_KEY),
    tagging: await tagging(context.env.OPENAI_API_KEY),
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
