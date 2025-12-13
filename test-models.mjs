// List available Gemini models
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBm6YVdDwOuQ_R3bTyTTJ4aCdjduffxfcI';

async function listModels() {
    console.log('📋 Listing available Gemini models...\n');

    try {
        const genAI = new GoogleGenerativeAI(API_KEY);

        // Try gemini-pro (most common)
        console.log('Testing gemini-pro...');
        const model1 = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const result1 = await model1.generateContent('Say hi');
        console.log('✅ gemini-pro works!');
        console.log('Response:', (await result1.response).text());

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

listModels();
