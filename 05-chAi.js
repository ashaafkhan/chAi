//stateful code to test the llama-3.1-8b-instant model with conversation history and different system prompts
import {checkOpenAI} from "./01-chAi.js";

const client = await checkOpenAI();
const model = "llama-3.1-8b-instant";

console.log(client);

const conversation = [];

async function askQuestion(systemPrompt, userPrompt, history = []){
    const response = await client.chat.completions.create({
        model,
        messages:[
            {role:"system", content: systemPrompt},
            ...history,
            {role:"user", content: userPrompt},
        ]
    });
    history.push({role:"user", content: userPrompt});
    history.push({role:"assistant",content: response.choices[0].message.content});
    return response.choices[0].message.content; 
}

const userQuestion = "My name is Ashaaf and I love coding and doing AI projects. Can you tell me a 1 line joke?";

const response1 = await askQuestion("You always respond in 1 line", userQuestion, conversation);

console.log("++++++++++ Response 1 +++++++++");
console.log(response1);

const userQuestion2 = "Tell me my Name?";

const response2 = await askQuestion("You always respond in 1 line", userQuestion2, conversation);

console.log("++++++++++ Response 2 +++++++++");
console.log(response2);