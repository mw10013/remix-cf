import readline from "readline/promises";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

console.log("bchat");

type FunctionDescription<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends z.ZodObject<any, any, any, any> = z.ZodObject<any, any, any, any>,
> = {
  name: string;
  description: string;
  schema: T;
  func: (input: z.infer<T>) => Promise<string>;
};

const functionDescriptions: FunctionDescription[] = [
  {
    name: "getCurrentWeather",
    description: "Get the current weather in a given location",
    schema: z.object({
      location: z
        .string()
        .describe("The city and state, e.g. San Francisco, CA"),
      unit: z.enum(["celsius", "fahrenheit"]).optional(),
    }),
    func: async ({ location, unit = "fahrenheit" }) => {
      const weatherInfo = {
        location,
        temperature: "72",
        unit,
        forecast: ["sunny", "windy"],
      };
      return Promise.resolve(JSON.stringify(weatherInfo));
    },
  },
];


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const messages: ChatCompletionMessageParam[] = [
  { role: "system", content: "You are a helpful assistant." },
];

const stdio = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, no-constant-condition
while (true) {
  const input = await stdio.question("😀> ");
  if (input.toLowerCase() === "quit" || input.toLowerCase() === "exit") {
    break;
  } else if (input.length) {
    messages.push({ role: "user", content: input });
    const completion = await openai.chat.completions.create({
      model: "gpt-4-0613",
      temperature: 0,
      messages,
      functions: functionDescriptions.map(({ name, description, schema }) => {
        return {
          name,
          description,
          parameters: zodToJsonSchema(schema),
        };
      }),
    });
    // console.log("completion:", completion);
    const completionMessage = completion.choices[0].message;
    console.log("completionMessage:", completionMessage);
    messages.push(completionMessage);

    if (completionMessage.function_call) {
      const functionName = completionMessage.function_call.name;
      console.log(
        `🦫 >`,
        `${functionName}: ${completionMessage.function_call.arguments}`,
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const functionArguments = JSON.parse(
        completionMessage.function_call.arguments,
      );
      const functionOutput =
        await functionDescriptions[0].func(functionArguments);
      messages.push({
        role: "function",
        name: functionName,
        content: functionOutput,
      });
      const functionCompletion = await openai.chat.completions.create({
        model: "gpt-4-0613",
        temperature: 0,
        messages: messages,
      });
      const functionCompletionMessage = functionCompletion.choices[0].message;
      console.log("functionCompletionMessage:", functionCompletionMessage);
      messages.push(functionCompletionMessage);
      console.log(`🦫 >`, functionCompletionMessage.content);
    } else {
      console.log(`🦫 >`, completionMessage.content);
    }
  }
}
stdio.close();
