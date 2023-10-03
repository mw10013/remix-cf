import * as path from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
import { OpenAI } from "langchain/llms/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "langchain/prompts";
import { RunnableSequence } from "langchain/schema/runnable";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "..", ".dev.vars") });

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    answer: z.string().describe("answer to the user's question"),
    sources: z
      .array(z.string())
      .describe("sources used to answer the question, should be websites."),
  }),
);

const chain = RunnableSequence.from([
  PromptTemplate.fromTemplate(
    "Answer the users question as best as possible.\n{format_instructions}\n{question}",
  ),
  new OpenAI({ temperature: 0 }),
  parser,
]);

console.log(parser.getFormatInstructions());

/*
You must format your output as a JSON value that adheres to a given "JSON Schema" instance.

"JSON Schema" is a declarative language that allows you to annotate and validate JSON documents.

For example, the example "JSON Schema" instance {{"properties": {{"foo": {{"description": "a list of test words", "type": "array", "items": {{"type": "string"}}}}}}, "required": ["foo"]}}}}
would match an object with one required property, "foo". The "type" property specifies "foo" must be an "array", and the "description" property semantically describes it as "a list of test words". The items within "foo" must be strings.
Thus, the object {{"foo": ["bar", "baz"]}} is a well-formatted instance of this example "JSON Schema". The object {{"properties": {{"foo": ["bar", "baz"]}}}} is not well-formatted.

Your output will be parsed and type-checked according to the provided schema instance, so make sure all fields in your output match the schema exactly and there are no trailing commas!

Here is the JSON Schema instance your output must adhere to. Include the enclosing markdown codeblock:
```json
{"type":"object","properties":{"answer":{"type":"string","description":"answer to the user's question"},"sources":{"type":"array","items":{"type":"string"},"description":"sources used to answer the question, should be websites."}},"required":["answer","sources"],"additionalProperties":false,"$schema":"http://json-schema.org/draft-07/schema#"}
```
*/

const response = await chain.invoke({
  question: "What is the capital of France?",
  format_instructions: parser.getFormatInstructions(),
});

console.log(response);
/*
{ answer: 'Paris', sources: [ 'https://en.wikipedia.org/wiki/Paris' ] }
*/