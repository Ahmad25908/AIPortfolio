// Quick test for the live API endpoint
async function testLiveEndpoint() {
    console.log('🧪 Testing live API on port 3001...');

    try {
        const response = await fetch('http://localhost:3001/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [{ role: 'user', content: 'Hello, who are you?' }]
            })
        });

        console.log('📡 Status:', response.status, response.statusText);

        if (!response.ok) {
            const errorText = await response.text();
            console.log('❌ Error:', errorText.substring(0, 500));
            return;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let result = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            result += decoder.decode(value, { stream: true });
        }

        console.log('✅ Response received!');
        console.log('📝 First 300 chars:', result.substring(0, 300));
    } catch (error) {
        console.error('❌ Fetch error:', error.message);
    }
}

testLiveEndpoint();
