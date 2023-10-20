import readline from "readline/promises";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { RunnableSequence } from "langchain/schema/runnable";
import { DynamicStructuredTool, DynamicTool } from "langchain/tools";
import { z } from "zod";

console.log("achat");

const tools = [
  new DynamicTool({
    name: "getDoctors",
    description: "Get list of doctors",
    func: async () =>
      Promise.resolve(JSON.stringify({ doctors: ["Dr Bob", "Dr Jung"] })),
  }),
  new DynamicStructuredTool({
    name: "getPatientsForDoctor",
    description: "Get list of patients for a doctor",
    schema: z
      .object({
        doctor: z.string().min(1).describe("Name of doctor"),
      })
      .describe("The JSON for doctor"),
    func: async ({ doctor }) => {
      switch (doctor) {
        case "Dr Bob":
          return Promise.resolve(
            JSON.stringify({ patients: ["Bucky", "Bobby", "Bobby Sue"] }),
          );
        case "Dr Jung":
          return Promise.resolve(
            JSON.stringify({ patients: ["Jack", "Jill", "June"] }),
          );
        default:
          return Promise.resolve(JSON.stringify({ error: "Unknown doctor" }));
      }
    },
  }),
];
const llm = new ChatOpenAI({
  modelName: "gpt-4-0613",
  temperature: 0.8,
});
const memory = new BufferMemory({
  returnMessages: true,
});
const executor = await initializeAgentExecutorWithOptions(tools, llm, {
  agentType: "openai-functions",
  verbose: true,
});

// @ts-expect-error: not sure how to type this properly
const chain = RunnableSequence.from<{ input: string }, { output: string }>([
  {
    input: (initialInput) => initialInput.input,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    history: async () => (await memory.loadMemoryVariables({})).history,
  },
  executor,
]);

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
    const chainInput = { input };
    const output = await chain.invoke(chainInput);
    await memory.saveContext(chainInput, output);
    console.log(`🦫 ${typeof output}>`, output);
  }
}
stdio.close();
