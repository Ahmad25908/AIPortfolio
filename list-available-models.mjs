// List available models for this API key
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyCNZxwuDjW-5NgfVSq_YyS3kMGcGkDpgCs';

async function listModels() {
    console.log('📋 Fetching available models for your API key...\n');

    try {
        // Using fetch to call the list models endpoint
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
        );

        if (!response.ok) {
            console.error(`❌ API Error: ${response.status} ${response.statusText}`);
            const errorText = await response.text();
            console.error('Details:', errorText);
            return;
        }

        const data = await response.json();

        if (data.models && data.models.length > 0) {
            console.log(`✅ Found ${data.models.length} available models:\n`);
            data.models.forEach(model => {
                console.log(`  📦 ${model.name}`);
                console.log(`     Display: ${model.displayName}`);
                console.log(`     Description: ${model.description}`);
                console.log('');
            });
        } else {
            console.log('⚠️  No models available with this API key');
        }

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

listModels();
