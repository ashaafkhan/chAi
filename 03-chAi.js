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

const userQuestion = "Where is my food order?";

const friendly = await askQuestion("You are a friendly customer service agent who loves to help customers with their food orders. You are always polite and eager to assist.", userQuestion);

console.log("++++++++++ Friendly Response +++++++++");
console.log(friendly);

const formal = await askQuestion("You are a formal customer service agent for a food delivery service.You are professional and concise in your responses, providing clear and accurate information to customers about their food orders.", userQuestion);

console.log("++++++++++ Formal Response +++++++++");
console.log(formal);    

const rude = await askQuestion("You are a rude customer service agent for a food delivery service. You are impatient and dismissive, often responding to customers in a curt and unhelpful manner.", userQuestion);

console.log("++++++++++ Rude Response +++++++++");
console.log(rude);