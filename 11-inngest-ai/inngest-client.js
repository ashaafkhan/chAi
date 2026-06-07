import {Inngest} from "inngest";

export const inngest = new Inngest({
    id: "chAI-inngest"
});

// Export the model configuration as a simple object
export const modelConfig = {
    model: "llama-3.3-70b-versatile",
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
};