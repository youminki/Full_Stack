const express = require('express');
const path = require('path');
const fs = require('fs');

// Wrap almost the entire server logic in a try-catch block to log any startup error.
try {
    require('dotenv').config();

    const { GoogleGenerativeAI } = require('@google/generative-ai');

    const app = express();
    const port = process.env.PORT || 3000;

    let model;

    // --- Middleware ---
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));

    // --- Gemini API Initialization ---
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
        throw new Error('GEMINI_API_KEY is not set or is invalid. Please check your .env file.');
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({ model: "text-bison-001"});

    console.log('Gemini AI model initialized successfully.');

    // --- API Endpoint for Chat ---
    app.post('/api/chat', async (req, res) => {
        if (!model) {
            return res.status(500).json({ error: 'AI model is not initialized.' });
        }
        try {
            const { prompt } = req.body;
            if (!prompt) {
                return res.status(400).json({ error: 'Prompt is required' });
            }

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            
            res.json({ response: text });

        } catch (error) {
            console.error('Error calling Gemini API:', error);
            fs.appendFileSync('api_error.log', `[${new Date().toISOString()}] ${error.toString()}\n`);
            res.status(500).json({ error: 'Failed to communicate with the AI.' });
        }
    });

    // --- Start Server ---
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });

} catch (error) {
    console.error('Failed to initialize server:', error.message);
    fs.writeFileSync('startup_error.log', error.toString());
    process.exit(1); // Exit the process with an error code
}