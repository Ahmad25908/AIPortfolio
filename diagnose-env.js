const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');

console.log('🔍 Diagnosing .env.local file...');

if (fs.existsSync(envPath)) {
    console.log('✅ .env.local file exists.');
    try {
        const content = fs.readFileSync(envPath, 'utf8');
        const lines = content.split('\n');
        let hasResend = false;
        let hasGemini = false;

        lines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('RESEND_API_KEY=')) {
                hasResend = true;
                const val = trimmed.split('=')[1];
                if (val && val.length > 5) {
                    console.log('✅ RESEND_API_KEY found (length: ' + val.length + ')');
                } else {
                    console.log('⚠️ RESEND_API_KEY found but seems empty or too short');
                }
            }
            if (trimmed.startsWith('GOOGLE_GENERATIVE_AI_API_KEY=')) {
                hasGemini = true;
                console.log('✅ GOOGLE_GENERATIVE_AI_API_KEY found');
            }
        });

        if (!hasResend) {
            console.log('❌ RESEND_API_KEY NOT found in file.');
        }

    } catch (err) {
        console.error('❌ Error reading file:', err.message);
    }
} else {
    console.log('❌ .env.local file does NOT exist.');
}
