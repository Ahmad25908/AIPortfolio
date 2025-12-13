// Test Gemini API key directly to find working models
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyCNZxwuDjW-5NgfVSq_YyS3kMGcGkDpgCs';

async function testModels() {
    console.log('🧪 Testing Gemini API key...\n');

    const genAI = new GoogleGenerativeAI(apiKey);

    // Try different model names
    const modelsToTry = [
        'gemini-pro',
        'gemini-1.5-pro',
        'gemini-1.5-flash',
        'gemini-1.5-flash-latest',
    ];

    for (const modelName of modelsToTry) {
        try {
            console.log(`Testing: ${modelName}...`);
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent('Say hello');
            const response = await result.response;
            const text = response.text();

            console.log(`✅ ${modelName} WORKS!`);
            console.log(`Response: ${text.substring(0, 50)}...\n`);

        } catch (error) {
            console.log(`❌ ${modelName} failed: ${error.message}\n`);
        }
    }
}

testModels();
