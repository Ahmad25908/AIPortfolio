// Test Gemini API key directly
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBm6YVdDwOuQ_R3bTyTTJ4aCdjduffxfcI';

async function testGeminiKey() {
    console.log('🔑 Testing Gemini API Key directly...\n');
    console.log('Key:', API_KEY.substring(0, 20) + '...\n');

    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        console.log('📡 Sending test prompt...\n');
        const result = await model.generateContent('Hello! Say "Hi, I am working!" in one sentence.');

        const response = await result.response;
        const text = response.text();

        console.log('✅ SUCCESS! Gemini API is working:\n');
        console.log(text);
        console.log('\n✅ API Key is valid!');

    } catch (error) {
        console.error('\n❌ FAILED! Error:', error.message);
        if (error.status) console.error('Status:', error.status);
        if (error.statusText) console.error('Status Text:', error.statusText);
        console.error('\nFull error:', error);
    }
}

testGeminiKey();
