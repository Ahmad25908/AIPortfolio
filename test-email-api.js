// Test script for Contact Form API
async function testEmail() {
    console.log('📧 Testing Contact API at http://localhost:3000/api/send-email');

    // Test data
    const payload = {
        name: "Test User",
        email: "test@example.com",
        budget: "$1k–$3k",
        projectIdea: "This is a test submission from the verification script."
    };

    try {
        const response = await fetch('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        console.log(`\n📡 Status: ${response.status} ${response.statusText}`);

        const data = await response.json();
        console.log('📋 Response Body:', JSON.stringify(data, null, 2));

        if (response.ok) {
            console.log('\n✅ Email API check PASSED!');
        } else {
            console.log('\n❌ Email API check FAILED');
            if (data.error && data.error.includes('Resend API key')) {
                console.log('👉 TIP: Make sure RESEND_API_KEY is set in .env.local and server is restarted.');
            }
        }

    } catch (error) {
        console.error('❌ Network/Connection Error:', error.message);
        console.log('👉 Check if the dev server is running on port 3000');
    }
}

testEmail();
