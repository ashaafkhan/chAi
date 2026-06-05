import {checkOpenAI} from "./01-chAi.js";

import { calculator,calculateTool} from "./tools/calculator.js";

const client = await checkOpenAI();
const model = "llama-3.1-8b-instant";

console.log(client.baseURL);

const tools = [calculateTool];

const messages = [
        {role: "user", content: "What is 12345 * 6789?"},
    ];

const firstResponse = await client.chat.completions.create({
    model,
    messages,
    tool_choice: "auto",
    tools,
});

console.log("First Response:");
const assistantMessage = firstResponse.choices[0].message;
console.log(assistantMessage);
console.log(assistantMessage.tool_calls);

messages.push(assistantMessage);

if(assistantMessage.tool_calls){
    const toolCall = assistantMessage.tool_calls[0];
    const toolResponse = await calculator(JSON.parse(toolCall.function.arguments));
    console.log("Tool Response:");
    console.log(toolResponse);
    messages.push({role:"tool", name: toolCall.function.name, content: String(toolResponse)});
}

const secondResponse = await client.chat.completions.create({
    model,
    messages,
    tool_choice: "auto",
    tools,
});     
console.log("Second Response:");
console.log(secondResponse.choices[0].message);


