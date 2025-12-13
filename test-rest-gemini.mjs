// Test script for Gemini using pure REST API (no SDK)
import https from 'https';

const API_KEY = 'AIzaSyBm6YVdDwOuQ_R3bTyTTJ4aCdjduffxfcI';
const MODEL = 'gemini-flash-latest';

console.log('🧪 Testing Gemini API via direct REST...');
console.log(`🔑 Key: ${API_KEY.substring(0, 10)}...`);
console.log(`🤖 Model: ${MODEL}`);

const data = JSON.stringify({
    contents: [{
        parts: [{ text: "Hello! Reply with 'REST API WORKING' if you see this." }]
    }]
});

const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

console.log(`\n📡 Connecting to ${options.hostname}${options.path}...`);

const req = https.request(options, (res) => {
    console.log(`\n📥 Status Code: ${res.statusCode}`);

    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
        console.log('\n📄 Response Body:');
        try {
            const parsed = JSON.parse(body);
            console.log(JSON.stringify(parsed, null, 2));

            if (res.statusCode === 200 && parsed.candidates && parsed.candidates[0].content) {
                console.log('\n✅ SUCCESS! The API is working correctly via REST.');
                console.log(`📝 Output: ${parsed.candidates[0].content.parts[0].text}`);
            } else {
                console.log('\n❌ FAILED. This confirms the issue.');
                if (parsed.error) {
                    console.log(`Error Message: ${parsed.error.message}`);
                    if (parsed.error.details) console.log(parsed.error.details);
                }
            }
        } catch (e) {
            console.log(body);
        }
    });
});

req.on('error', (error) => {
    console.error('\n❌ Network Error:', error);
});

req.write(data);
req.end();
