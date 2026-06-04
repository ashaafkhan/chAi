//stateless code to test the llama-3.1-8b-instant model with different system prompts
import {checkOpenAI} from "./01-chAi.js";

const client = await checkOpenAI();
const model = "llama-3.1-8b-instant";

console.log(client);

async function askQuestion(systemPrompt, userPrompt){
    const response = await client.chat.completions.create({
        model,
        messages:[
            {role:"system", content: systemPrompt},
            {role:"user", content: userPrompt},
        ]
    });
    return response.choices[0].message.content; 
}

const userQuestion = "My name is Ashaaf. Can you tell me a 1 line joke?";

const friendly = await askQuestion("You always respond in 1 line", userQuestion);

console.log("++++++++++ Friendly Response +++++++++");
console.log(friendly);

const userQuestion2 = "Tell me my Name";

const formal = await askQuestion("You always respond in 1 line", userQuestion2);

console.log("++++++++++ Formal Response +++++++++");
console.log(formal);    
