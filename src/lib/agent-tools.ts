// Agent Tools - TypeScript Implementation
// Functions the AI agent can execute autonomously

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface LeadData {
    name: string;
    email: string;
    budget: string;
    projectIdea: string;
    leadScore?: number;
    collectedAt?: string;
    status?: string;
}

// Calculate lead score based on budget and project
function calculateLeadScore(budget: string, projectIdea: string): number {
    let score = 5; // Base score

    // Budget scoring
    if (budget.includes('$15k') || budget.includes('$25k') || budget.includes('20k')) {
        score += 4;
    } else if (budget.includes('$8k') || budget.includes('$10k')) {
        score += 3;
    } else if (budget.includes('$3k') || budget.includes('$5k')) {
        score += 2;
    } else {
        score += 1;
    }

    // Project complexity scoring
    const keywords = ['saas', 'ai', 'agent', 'automation', 'platform', 'enterprise'];
    if (keywords.some(keyword => projectIdea.toLowerCase().includes(keyword))) {
        score += 1;
    }

    return Math.min(score, 10);
}

// Send email to Ahmad with lead information
export async function sendEmailToAhmad(
    name: string,
    email: string,
    budget: string,
    projectIdea: string,
    leadScore: number
): Promise<{ success: boolean; message: string }> {
    try {
        const urgency = leadScore >= 8 ? '🔥 HIGH PRIORITY' : leadScore >= 5 ? '⭐ QUALIFIED LEAD' : '📋 NEW LEAD';

        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #A855F7;">${urgency} - New Lead from AI Agent</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Lead Score:</strong> ${leadScore}/10</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Project Idea:</strong></p>
          <p style="white-space: pre-wrap;">${projectIdea}</p>
        </div>
        
        <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; border-left: 4px solid #22D3EE;">
          <p><strong>🤖 Agent Notes:</strong></p>
          <p>This lead was automatically qualified and collected by your AI agent.</p>
          <p><strong>Recommended Action:</strong> ${leadScore >= 8 ? 'Reply within 2 hours - High value!' : 'Follow up within 6 hours'}</p>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          Sent by Agent Hassan at ${new Date().toLocaleString()}
        </p>
      </div>
    `;

        await resend.emails.send({
            from: 'Agent Hassan <onboarding@resend.dev>',
            to: [process.env.AHMAD_EMAIL || 'ahmadhassan41093@gmail.com'],
            subject: `${urgency} - ${name} (${budget})`,
            html: htmlContent,
        });

        return {
            success: true,
            message: `Email sent to Ahmad successfully`,
        };
    } catch (error) {
        console.error('Email sending error:', error);
        return {
            success: false,
            message: `Failed to send email: ${error}`,
        };
    }
}

// Collect lead information
export async function collectLead(
    name: string,
    email: string,
    budget: string,
    projectIdea: string
): Promise<{ success: boolean; message: string; leadData: LeadData }> {
    const leadScore = calculateLeadScore(budget, projectIdea);

    const leadData: LeadData = {
        name,
        email,
        budget,
        projectIdea,
        leadScore,
        collectedAt: new Date().toISOString(),
        status: 'new',
    };

    // Database storage would be implemented here (Supabase/Firebase)

    return {
        success: true,
        message: `Lead collected successfully! Score: ${leadScore}/10`,
        leadData,
    };
}

// Check Ahmad's availability
export function checkAvailability(): {
    available: boolean;
    spotsLeft: number;
    calendlyLink: string;
    message: string;
} {
    return {
        available: true,
        spotsLeft: 3,
        calendlyLink: 'https://calendly.com/ahmadhassan41093/15min',
        message: 'Ahmad has 3 client spots left this month',
    };
}

// Book a call
export function bookCall(email: string, name: string): {
    success: boolean;
    calendlyLink: string;
    message: string;
} {
    const calendlyLink = 'https://calendly.com/ahmadhassan41093/15min';

    return {
        success: true,
        calendlyLink,
        message: `Calendly link ready for ${name}: ${calendlyLink}`,
    };
}
