// Test different model names with @ai-sdk/google
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

console.log('🧪 Testing different Gemini model names with @ai-sdk/google...\n');

const testModels = [
    'models/gemini-1.5-flash-latest',
    'models/gemini-1.5-flash',
    'models/gemini-pro',
    'gemini-1.5-flash-latest',
    'gemini-flash-1.5',
    'gemini-1.5-flash-001',
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
        console.log(`❌ Failed: ${error.message.substring(0, 100)}`);
    }
}
