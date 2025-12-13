// Test newest Gemini 2.0 models
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

const API_KEY = 'AIzaSyBm6YVdDwOuQ_R3bTyTTJ4aCdjduffxfcI';

console.log('🧪 Testing Gemini 2.0 and other models...\n');

const google = createGoogleGenerativeAI({ apiKey: API_KEY });

const testModels = [
    'gemini-2.0-flash-exp',
    'gemini-exp-1206',
    'gemini-1.5-pro-002',
    'gemini-exp-1121',
];

for (const modelName of testModels) {
    try {
        console.log(`\nTrying: ${modelName}...`);
        const startTime = Date.now();
        const { text } = await generateText({
            model: google(modelName),
            prompt: 'Say "Working!" in one word',
        });
        const duration = Date.now() - startTime;
        console.log(`✅ SUCCESS with ${modelName} in ${duration}ms!`);
        console.log(`Response: ${text}`);
        console.log('\n🎉 FOUND WORKING MODEL!');
        break;
    } catch (error) {
        console.log(`❌ ${error.message.substring(0, 120)}`);
    }
}
