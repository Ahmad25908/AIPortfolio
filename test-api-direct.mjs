// Direct API test
async function testAPI() {
    console.log('🧪 Testing /api/chat endpoint...\n');

    try {
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [{ role: 'user', content: 'Hello, who are you?' }]
            })
        });

        console.log('📡 Status:', response.status, response.statusText);
        console.log('📋 Headers:', Object.fromEntries(response.headers.entries()));

        if (!response.ok) {
            const errorText = await response.text();
            console.log('\n❌ Error Response:');
            console.log(errorText);
            return;
        }

        // Try to read the stream
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullResponse = '';

        console.log('\n📥 Reading stream...\n');

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            fullResponse += chunk;
            process.stdout.write('.');
        }

        console.log('\n\n✅ Full Response:');
        console.log(fullResponse);
        console.log('\n✅ Response length:', fullResponse.length, 'characters');

    } catch (error) {
        console.error('\n❌ Fetch Error:', error.message);
        console.error('Stack:', error.stack);
    }
}

testAPI();
