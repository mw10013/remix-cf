import * as path from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
import { OpenAI } from "langchain/llms/openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "..", ".dev.vars") });

const llm = new OpenAI({
  temperature: 0.9,
});

const text =
  "What would be a good company name for a company that makes colorful socks?";

const llmResult = await llm.predict(text);
console.log(llmResult);
