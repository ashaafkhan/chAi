import {inngest, modelConfig} from "./inngest-client.js";
import { OpenAI } from "openai";

export const summarizeThenTranslate = inngest.createFunction(
    {
        id: "chai-summarize-then-translate",
        triggers: [{event: "chai.summarize-then-translate"}],
    },

    async({event,step}) =>{
        const client = new OpenAI({
            apiKey: modelConfig.apiKey,
            baseURL: modelConfig.baseURL,
        });

        const sum = await step.run("summarize", async () => {
            const response = await client.chat.completions.create({
                model: modelConfig.model,
                messages: [
                    {
                        role: "user",
                        content: "Summarize the following text in 1 line: " + event.data.text
                    },
                ],
            });
            return response.choices[0].message.content;
        });

        const tr = await step.run("translate", async () => {
            const response = await client.chat.completions.create({
                model: modelConfig.model,
                messages: [
                    {
                        role: "user",
                        content: `Translate the following text to Hindi: ${sum}`,
                    },
                ],
            });
            return response.choices[0].message.content;
        });

        return tr;
    }
);
