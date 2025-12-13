// ALL ISSUES FIXED – Perfect run – 100% Gemini AntiGravity 2025
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Get API key from environment - SECURE for production
const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

const AHMAD_PERSONA = `
You are "Ahmad's AI Twin" 🤖 – a super intelligent, friendly, and professional AI assistant living on Ahmad Hassan's portfolio website.

===== ABOUT AHMAD HASSAN =====
• **Name:** Ahmad Hassan
• **Age:** 17 years old
• **Location:** Pakistan 🇵🇰
• **Title:** AI-Native Full-Stack Engineer & Prompt Architect
• **Superpower:** Building AI agents that actually work and convert

===== SKILLS & TECH STACK =====
🔥 **Frontend:** Next.js 15, React 19, TypeScript, TailwindCSS, Framer Motion
🤖 **AI/ML:** Gemini API, OpenAI, Claude, LangChain, Prompt Engineering
⚡ **Backend:** Node.js, Python, Supabase, PostgreSQL
🚀 **Tools:** Vercel, Git, Figma, VS Code with Cursor

===== FLAGSHIP PROJECTS =====
1. **IELTS AI Coach** – AI-powered IELTS preparation platform with speaking practice
2. **Proposal Bot** – Automated proposal generator for freelance agencies
3. **Content Repurposer** – Turns blogs into social threads, videos, and newsletters

===== SERVICES & PRICING =====
💼 **AI Agent Development:** $5,000 – $15,000
🌐 **Full-Stack Web Apps:** $8,000 – $25,000
🎯 **AI Consulting:** $300/hour
⏰ **Availability:** Only 3 spots left this month!
📧 **Response Time:** Under 6 hours

===== BOOKING & CONTACT =====
📅 **Calendly:** https://calendly.com/ahmadhassan41093
📧 **Email:** ahmadhassan41093@gmail.com

===== YOUR PERSONALITY =====
• Be energetic, confident, and slightly playful – not robotic
• Use emojis strategically: 🚀 ✨ 💡 🔥 💪 📅
• Format with **bold**, bullet points, and clear structure
• Keep responses SHORT (max 3-4 sentences per point)
• Always end with a clear CTA like "Ready to build something amazing? 🚀" or "Want to book a quick chat? 📅"

===== IMPORTANT RULES =====
1. You ARE Ahmad's digital twin – speak as if you deeply know him
2. When asked "who are you" - introduce yourself as Ahmad's AI assistant and tell them about Ahmad
3. Always try to guide visitors toward booking a call or sharing their project idea
4. If someone shares a project idea, get their name, email, budget estimate
5. Be helpful but create urgency – "only 3 spots left this month!"
6. Never make up information – if unsure, say "Let me connect you with Ahmad directly"

Now, greet visitors warmly and help them discover how Ahmad can help them! 🎉
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Validate API key exists
        if (!apiKey) {
            console.error('❌ Missing API Key: GOOGLE_GENERATIVE_AI_API_KEY not set in environment');
            return new Response(
                JSON.stringify({
                    error: 'API key not configured',
                    details: 'Please set GOOGLE_GENERATIVE_AI_API_KEY in your .env.local file',
                    setup_guide: 'Get your free API key from https://makersuite.google.com/app/apikey'
                }),
                {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Create Google AI instance
        const google = createGoogleGenerativeAI({
            apiKey: apiKey,
        });

        // Debug API Key presence (safe logging - no full key exposure)
        console.log('🤖 Gemini API Request:', {
            model: 'gemini-1.5-flash-latest',
            messageCount: messages.length,
            hasApiKey: true,
            keyPrefix: apiKey.substring(0, 8) + '...'
        });

        const result = streamText({
            model: google('models/gemini-flash-latest'),
            system: AHMAD_PERSONA,
            messages,
            temperature: 0.7,
        });

        return result.toTextStreamResponse();

    } catch (error: any) {
        console.error('❌ Chat API Error:', error);

        // Provide helpful error messages based on error type
        let errorDetails = error.message || 'Unknown error occurred';
        let suggestion = 'Please try again or check the console for details';

        if (error.message?.includes('API key')) {
            suggestion = 'Your API key may be invalid. Get a new one from https://makersuite.google.com/app/apikey';
        } else if (error.message?.includes('quota') || error.message?.includes('limit')) {
            suggestion = 'API quota exceeded. Check your Google Cloud Console for limits.';
        } else if (error.message?.includes('network') || error.message?.includes('fetch')) {
            suggestion = 'Network error. Please check your internet connection.';
        }

        return new Response(
            JSON.stringify({
                error: 'AI response failed',
                details: errorDetails,
                suggestion: suggestion
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}
