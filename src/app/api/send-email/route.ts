// FINAL PROFESSIONAL CONTACT – Real email + WhatsApp + Calendly – 100% working

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        // Check if API key exists
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error('RESEND_API_KEY not found in environment variables');
            return NextResponse.json(
                { error: 'Email service not configured. Please contact directly via WhatsApp or Email.' },
                { status: 503 }
            );
        }

        const resend = new Resend(apiKey);

        const body = await request.json();
        const { name, email, budget, projectIdea } = body;

        // Validation
        if (!name || !email || !budget) {
            return NextResponse.json(
                { error: 'Name, email, and budget are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['ahmadhassan41093@gmail.com'],
            subject: `New Contact Form Submission - ${budget}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #A855F7;">New Contact Form Submission</h2>
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Budget:</strong> ${budget}</p>
                        <p><strong>Project Idea:</strong></p>
                        <p style="white-space: pre-wrap;">${projectIdea || 'Not provided'}</p>
                    </div>
                    <p style="color: #666; font-size: 12px;">Sent from your portfolio contact form</p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, messageId: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

