async function testAgent() {
    console.log('🧪 Testing "Ahmad\'s AI Twin"...');
    const startTime = Date.now();

    try {
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [{ role: 'user', content: 'Who are you?' }]
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let result = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            result += decoder.decode(value, { stream: true });
        }

        const endTime = Date.now();
        const duration = endTime - startTime;

        console.log('\n✅ Test Passed!');
        console.log(`⏱️ Response Time: ${duration}ms`);
        console.log(`📝 Response Length: ${result.length} chars`);
        console.log(`🤖 Agent Response Preview: ${result.substring(0, 100)}...`);

        if (duration < 2000) {
            console.log('⚡ Speed: EXCELLENT (<2s)');
        } else {
            console.log('⚠️ Speed: GOOD (but >2s)');
        }

    } catch (error) {
        console.error('❌ Test Failed:', error.message);
    }
}

testAgent();
