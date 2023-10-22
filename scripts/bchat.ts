import readline from "readline/promises";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";

console.log("bchat");

function getCurrentWeather(location: string, unit = "fahrenheit") {
  const weatherInfo = {
    location: location,
    temperature: "72",
    unit: unit,
    forecast: ["sunny", "windy"],
  };
  return JSON.stringify(weatherInfo);
}

const functions = [
  {
    name: "get_current_weather",
    description: "Get the current weather in a given location",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "The city and state, e.g. San Francisco, CA",
        },
        unit: { type: "string", enum: ["celsius", "fahrenheit"] },
      },
      required: ["location"],
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
      functions,
    });
    // console.log("completion:", completion);
    const completionMessage = completion.choices[0].message;
    console.log("completionMessage:", completionMessage);
    messages.push(completionMessage);
    console.log(`🦫 >`, completionMessage.content);
  }
}
stdio.close();
