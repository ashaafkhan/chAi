import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.GROQ_API_KEY;


export const apikeyChecker = () => {
    if(!API_KEY){
        console.error('Error: GROQ_API_KEY is not set in the environment variable.');
        process.exit(1);
    }
} 

export const checkOpenAI = async() =>{
    const OpenAI = (await import('openai')).default;
    const client = new OpenAI({
        apiKey: API_KEY,
        baseURL: "https://api.groq.com/openai/v1"
    });

    if(!client) {
        console.error('Error: Failed to initialize OpenAI client.');
        process.exit(1);
    }
    console.log('OpenAI client initialized successfully');
    return client;
}