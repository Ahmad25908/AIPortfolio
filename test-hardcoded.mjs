// Test with @ai-sdk/google and hardcoded key
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

const API_KEY = 'AIzaSyBm6YVdDwOuQ_R3bTyTTJ4aCdjduffxfcI';

console.log('🧪 Testing @ai-sdk/google with hardcoded key...\n');

const google = createGoogleGenerativeAI({ apiKey: API_KEY });

const testModels = [
    'gemini-1.5-flash-latest',
    'gemini-1.5-flash',
    'gemini-pro',
    'gemini-1.5-pro',
];

for (const modelName of testModels) {
    try {
        console.log(`\nTrying: ${modelName}...`);
        const { text } = await generateText({
            model: google(modelName),
            prompt: 'Say "Hi!" in one word',
        });
        console.log(`✅ SUCCESS with ${modelName}!`);
        console.log(`Response: ${text}`);
        break;
    } catch (error) {
        console.log(`❌ Failed: ${error.message}`);
    }
}
