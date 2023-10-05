import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import OpenAI from "openai";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

function getCurrentWeather(location: string, unit = "fahrenheit") {
  const weatherInfo = {
    location: location,
    temperature: "72",
    unit: unit,
    forecast: ["sunny", "windy"],
  };
  return JSON.stringify(weatherInfo);
}

async function runConversation(openai: OpenAI) {
  // Step 1: send the conversation and available functions to GPT
  const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    { role: "user", content: "What's the weather like in Boston?" },
  ];
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

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
    functions: functions,
    function_call: "auto", // auto is default, but we'll be explicit
  });
  const responseMessage = response.choices[0].message;
  // Step 2: check if GPT wanted to call a function

  if (responseMessage.function_call) {
    // Step 3: call the function
    // Note: the JSON response may not always be valid; be sure to handle errors
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const availableFunctions: Record<string, (...args: any[]) => string> = {
      get_current_weather: getCurrentWeather,
    }; // only one function in this example, but you can have multiple
    const functionName = responseMessage.function_call.name;
    const functionToCall = availableFunctions[functionName];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const functionArgs = JSON.parse(responseMessage.function_call.arguments);

    const functionResponse = functionToCall(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      functionArgs.location,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      functionArgs.unit,
    );

    // Step 4: send the info on the function call and function response to GPT
    messages.push(responseMessage); // extend conversation with assistant's reply
    messages.push({
      role: "function",
      name: functionName,
      content: functionResponse,
    }); // extend conversation with function response
    const secondResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    }); // get a new response from GPT where it can see the function response
    messages.push(secondResponse.choices[0].message);
    return { messages };
  }
}

export async function action({ context }: ActionFunctionArgs) {
  assertCloudflareEnv(context.env);
  const openai = new OpenAI({
    apiKey: context.env.OPENAI_API_KEY,
  });
  const conversation = await runConversation(openai);
  return { conversation };
}

export default function Route() {
  const actionData = useActionData<typeof action>();
  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>OpenAI Fn</CardHeader>
      <CardBody>
        <Form method="POST">
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
        <pre className="mt-2">{JSON.stringify(actionData, null, 2)}</pre>
      </CardBody>
    </Card>
  );
}
