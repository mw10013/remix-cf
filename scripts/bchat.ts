import readline from "readline/promises";
import OpenAI from "openai";
import {
  ChatCompletionMessage,
} from "openai/resources/chat/index.mjs";

console.log("bchat");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const messages: ChatCompletionMessageParam[] = [
const messages: ChatCompletionMessage[] = [
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
      messages,
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    messages.push(completion.choices[0].message);
    console.log(`🦫 >`, completion.choices[0].message.content);
  }
}
stdio.close();
