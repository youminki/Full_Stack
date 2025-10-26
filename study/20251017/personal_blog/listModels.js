/*
 * This is a temporary script to debug model availability.
 * It will list all generative models available to the provided API key.
 */

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function run() {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
            throw new Error('GEMINI_API_KEY is not set in .env file');
        }
        const genAI = new GoogleGenerativeAI(apiKey);
        const models = await genAI.listModels();
        
        console.log('Available Models:');
        for await (const m of models) {
            if (m.supportedGenerationMethods.includes('generateContent')) {
                console.log('  - ', m.name);
            }
        }
    } catch (error) {
        console.error('Error listing models:', error);
    }
}

run();
