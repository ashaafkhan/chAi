import {Inngest} from "inngest";
import{openaiResponses} from "@inngest/ai/models"

export const inngest = new Inngest({
    id: "chAI-inngest"
});

export const llama33 = openaiResponses({
    model: "llama-3.3-70b-versatile",
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});