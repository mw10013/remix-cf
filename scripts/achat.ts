import readline from "readline/promises";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { ChatPromptTemplate, MessagesPlaceholder } from "langchain/prompts";
import { StringOutputParser } from "langchain/schema/output_parser";
import { RunnableSequence } from "langchain/schema/runnable";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

console.log("achat environment");

const tools = [new Calculator(), new SerpAPI()];
const llm = new ChatOpenAI({
  // modelName: "gpt-3.5-turbo",
  modelName: "gpt-4-0613",
  temperature: 0.8,
});
const prompt = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful chatbot"],
  new MessagesPlaceholder("history"),
  ["human", "{input}"],
]);
const memory = new BufferMemory({
  returnMessages: true,
});

const executor = await initializeAgentExecutorWithOptions(tools, llm, {
  agentType: "openai-functions",
  verbose: true,
});

// const chain = RunnableSequence.from<{ input: string }, string>([
// {
//   input: (initialInput) => initialInput.input,
//   memory: () => memory.loadMemoryVariables({}),
// },
// {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
//   input: (previousOutput) => previousOutput.input,
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
//   history: (previousOutput) => previousOutput.memory.history,
// },
// prompt,
// model
// new StringOutputParser(),
// ]);

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
    const output = await executor.invoke({ input });
    // const output = await executor.run(input);
    // const chainInput = { input };
    // const output = await chain.invoke(chainInput);
    // await memory.saveContext(chainInput, {
    //   output,
    // });
    console.log(`${typeof output}:`, output);
  }
}
stdio.close();
