import {checkOpenAI} from "./01-chAi.js";

const client = await checkOpenAI();
const model = "llama-3.1-8b-instant";

console.log(client);

const stream = await client.chat.completions.create({
    model,
    stream: true,
    messages: [
        {role:"system" , content: "You are a helpful assistant who always responds in 5 line."},
        {role:"user", content: "What is latest in AI?"},
    ],
});

let last_chunk = null;

for await (const message of stream){
    const delta = message.choices[0]?.delta?.content;
    if(delta){
        process.stdout.write(delta);
    }
    last_chunk += delta;
}