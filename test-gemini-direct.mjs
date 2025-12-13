
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import fs from 'fs';
import path from 'path';

// Manual .env.local loader
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    console.log('📄 Loading .env.local...');
    const envConfig = fs.readFileSync(envPath, 'utf-8');
    const lines = envConfig.split('\n');
    console.log(`📄 Found ${lines.length} lines.`);

    lines.forEach(line => {
        // Match KEY=VALUE, ignoring comments and export
        const match = line.match(/^\s*(?:export\s+)?([\w_]+)\s*=\s*(.*)/);
        if (match) {
            const key = match[1];
            let value = match[2].trim();
            // Remove comments
            if (value.includes('#')) {
                value = value.split('#')[0].trim();
            }
            // Remove quotes
            value = value.replace(/^["'](.*)["']$/, '$1');

            if (key === 'GEMINI_API_KEY') {
                console.log('✅ Found GEMINI_API_KEY!');
            }
            process.env[key] = value;
        }
    });
} else {
    console.warn('⚠️ .env.local not found!');
}

async function testGemini() {
    console.log('🤖 Testing Gemini API Direct Connection...');

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
        console.error('❌ Neither GEMINI_API_KEY nor GOOGLE_GENERATIVE_AI_API_KEY is set');
        console.log('   Available env vars:', Object.keys(process.env).filter(k => k.includes('GEMINI') || k.includes('GOOGLE')).join(', '));
        process.exit(1);
    }

    // Set for the SDK
    process.env.GOOGLE_GENERATIVE_AI_API_KEY = apiKey;

    console.log('🔑 Key found (length):', apiKey.length);

    try {
        const { text } = await generateText({
            model: google('gemini-1.5-flash'),
            prompt: 'Hello! Are you working?',
        });
        console.log('✅ Success! Response:', text);
    } catch (error) {
        console.error('❌ API Call Failed:', error.message);
        if (error.cause) console.error('   Cause:', error.cause);
    }
}

testGemini();
