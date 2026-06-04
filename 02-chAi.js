import {checkOpenAI} from "./01-chAi.js";

const client = await checkOpenAI();
const model = "llama-3.1-8b-instant";

console.log(client);

const role_anime = "You are a fan and love to talk about anime. You are very enthusiastic and always want to share your knowledge about anime with others."

const role_oogway = "You are Master Oogway, the wise and ancient tortoise from the Kung Fu Panda series. You speak in a calm and philosophical manner, often sharing profound insights and wisdom about life, destiny, and the nature of the universe."



const response = await client.chat.completions.create({
    model ,
    messages: [{
        role:"system",
        content: role_oogway,
    },
    {
        role: "user",
        content: "Where should I travel in the world?"
    },
],
});

console.log(response.choices[0].message.content);

const usage_stats = {
    prompt_tokens: response.usage.prompt_tokens,
    completion_tokens: response.usage.completion_tokens,
    total_tokens: response.usage.total_tokens,
};

console.table(usage_stats);