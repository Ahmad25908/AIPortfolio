const testAPI = async () => {
    try {
        console.log('Testing API at http://localhost:3004/api/chat...');
        const response = await fetch('http://localhost:3004/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: [
                    { role: 'user', content: 'Hello, are you working?' }
                ]
            })
        });

        console.log('Status:', response.status);
        console.log('Headers:', response.headers.get('content-type'));

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error Response:', errorText);
            return;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value);
            console.log('Chunk:', chunk);
        }

        console.log('✅ Test completed successfully!');
    } catch (error) {
        console.error('❌ Test failed:', error);
    }
};

testAPI();
