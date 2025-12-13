// List available Gemini models for this API key via REST
import https from 'https';

const API_KEY = 'AIzaSyBm6YVdDwOuQ_R3bTyTTJ4aCdjduffxfcI';

console.log('📋 Listing available models for key ending in ...' + API_KEY.slice(-5));

const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models?key=${API_KEY}`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
};

const req = https.request(options, (res) => {
    let body = '';
    res.on('data', c => body += c);
    res.on('end', () => {
        try {
            const parsed = JSON.parse(body);
            if (parsed.models) {
                console.log('\n✅ AVAILABLE MODELS:');
                parsed.models.forEach(m => {
                    if (m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent')) {
                        console.log(`- ${m.name}`);
                    }
                });
            } else {
                console.log('\n❌ No models found or error:', parsed);
            }
        } catch (e) { console.log('Parse error', body); }
    });
});

req.on('error', e => console.error(e));
req.end();
