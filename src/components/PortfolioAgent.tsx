// PROFESSIONAL PORTFOLIO AGENT – Premium Design – 100% Gemini AntiGravity 2025
"use client";

import React, { useState, useRef, useEffect } from 'react';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export default function PortfolioAgent() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'assistant',
            content: "Hey! 👋 I'm **Ahmad's AI Twin**.\n\nI know everything about his AI projects, skills, and how he can help you build intelligent products.\n\n**What would you like to know?** 🚀"
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMsg: Message = {
            id: `user-${Date.now()}`,
            role: 'user',
            content: inputValue.trim(),
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content }))
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));

                // Specific handling for Rate Limits
                if (response.status === 429) {
                    throw new Error("I'm receiving too many messages right now! 🧠 Please wait 1 minute and try again.");
                }

                // Specific handling for Overloaded Model
                if (response.status === 503) {
                    throw new Error("The AI model is currently overloaded. Please try again in a moment.");
                }

                throw new Error(errorData.suggestion || errorData.error || `API Error: ${response.status}`);
            }

            const reader = response.body?.getReader();
            if (!reader) throw new Error('No response stream');

            const decoder = new TextDecoder();
            let fullContent = '';

            const assistantId = `assistant-${Date.now()}`;
            setMessages(prev => [...prev, { id: assistantId, role: 'assistant', content: '' }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                fullContent += chunk;

                setMessages(prev => prev.map(m =>
                    m.id === assistantId ? { ...m, content: fullContent } : m
                ));
            }

            // Check for empty response
            if (!fullContent.trim()) {
                throw new Error('API returned empty response. Please check your API key configuration at https://makersuite.google.com/app/apikey');
            }
        } catch (err: any) {
            console.error('Chat error:', err);
            setError(err.message || 'Connection failed');
            setMessages(prev => prev.slice(0, -1)); // Remove failed message
        } finally {
            setIsLoading(false);
        }
    };

    const renderText = (text: string) => {
        if (!text) return null;

        return text.split('\n').map((line, i) => {
            let processedLine = line
                .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #c084fc; font-weight: 700;">$1</strong>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color: #22d3ee; text-decoration: underline;">$1</a>');

            if (line.startsWith('• ') || line.startsWith('- ')) {
                return <li key={i} style={{ marginLeft: '1.25rem', color: '#e5e7eb' }} dangerouslySetInnerHTML={{ __html: processedLine.substring(2) }} />;
            }
            if (!line.trim()) return <br key={i} />;
            return <p key={i} style={{ margin: '0.25rem 0', color: '#f3f4f6' }} dangerouslySetInnerHTML={{ __html: processedLine }} />;
        });
    };

    return (
        <>
            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(34, 211, 238, 0.2); }
                    50% { box-shadow: 0 0 30px rgba(34, 211, 238, 0.4), 0 0 50px rgba(168, 85, 247, 0.3); }
                }
                .chat-window {
                    animation: slideUp 0.3s ease-out;
                }
                .orb-button {
                    animation: glow 2s ease-in-out infinite;
                    transition: transform 0.2s;
                }
                .orb-button:hover {
                    transform: scale(1.1);
                }
                .orb-button:active {
                    transform: scale(0.95);
                }
            `}</style>

            <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
                {/* Chat Window */}
                {isOpen && (
                    <div className="chat-window" style={{
                        position: 'fixed',
                        bottom: '104px',
                        right: '24px',
                        width: 'min(420px, calc(100vw - 48px))',
                        maxHeight: '640px',
                        background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.98) 0%, rgba(0, 0, 0, 0.95) 100%)',
                        border: '1px solid rgba(168, 85, 247, 0.4)',
                        borderRadius: '28px',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 80px rgba(168, 85, 247, 0.15)',
                        backdropFilter: 'blur(24px)',
                        overflow: 'hidden',
                    }}>
                        {/* Animated Background */}
                        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.6 }}>
                            <div style={{
                                position: 'absolute',
                                top: '-50%',
                                right: '-30%',
                                width: '200px',
                                height: '200px',
                                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
                                filter: 'blur(40px)',
                            }} />
                            <div style={{
                                position: 'absolute',
                                bottom: '-40%',
                                left: '-20%',
                                width: '180px',
                                height: '180px',
                                background: 'radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 70%)',
                                filter: 'blur(40px)',
                            }} />
                        </div>

                        {/* Header */}
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '20px',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                            background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.15), rgba(6, 182, 212, 0.1))',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <div style={{ position: 'relative' }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #a855f7 0%, #22d3ee 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '24px',
                                        boxShadow: '0 4px 12px rgba(168, 85, 247, 0.4)',
                                    }}>
                                        🤖
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0,
                                        width: '14px',
                                        height: '14px',
                                        background: '#22c55e',
                                        borderRadius: '50%',
                                        border: '3px solid #111827',
                                        animation: 'pulse 2s ease-in-out infinite',
                                    }} />
                                </div>
                                <div>
                                    <div style={{ color: 'white', fontWeight: '700', fontSize: '16px', letterSpacing: '-0.5px' }}>Ahmad's AI Twin</div>
                                    <div style={{ color: '#c084fc', fontSize: '12px', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <div style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%', animation: 'pulse 1.5s ease-in-out infinite' }} />
                                        Online • Lightning Fast ⚡
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: 'none',
                                    color: '#9ca3af',
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                    padding: '8px',
                                    borderRadius: '12px',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.color = '#9ca3af';
                                }}
                            >
                                ×
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            style={{
                                position: 'relative',
                                height: '420px',
                                overflowY: 'auto',
                                padding: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                            }}
                        >
                            {messages.map((m, idx) => (
                                <div key={m.id} style={{
                                    display: 'flex',
                                    justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
                                    animation: `slideUp 0.3s ease-out ${idx * 0.05}s backwards`,
                                }}>
                                    <div style={{
                                        maxWidth: '85%',
                                        padding: '14px 18px',
                                        borderRadius: '18px',
                                        background: m.role === 'user'
                                            ? 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)'
                                            : 'rgba(31, 41, 55, 0.8)',
                                        color: 'white',
                                        fontSize: '14px',
                                        lineHeight: '1.6',
                                        border: m.role === 'assistant' ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                                        boxShadow: m.role === 'user'
                                            ? '0 4px 12px rgba(168, 85, 247, 0.3)'
                                            : '0 2px 8px rgba(0, 0, 0, 0.2)',
                                    }}>
                                        {m.role === 'user' ? (
                                            <div style={{ fontWeight: '500' }}>{m.content}</div>
                                        ) : (
                                            <div style={{ lineHeight: '1.7' }}>{renderText(m.content)}</div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div style={{ display: 'flex', gap: '6px', padding: '14px', animation: 'slideUp 0.2s ease-out' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#a855f7', animation: 'bounce 1s infinite' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#a855f7', animation: 'bounce 1s infinite 0.2s' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#a855f7', animation: 'bounce 1s infinite 0.4s' }} />
                                </div>
                            )}

                            {error && (
                                <div style={{
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    color: '#fca5a5',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    fontSize: '13px',
                                    textAlign: 'center',
                                }}>
                                    {error}. Please try again.
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} style={{
                            position: 'relative',
                            padding: '20px',
                            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                            background: 'rgba(17, 24, 39, 0.6)',
                        }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about Ahmad's projects..."
                                    style={{
                                        flex: 1,
                                        padding: '14px 20px',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        background: 'rgba(31, 41, 55, 0.8)',
                                        color: 'white',
                                        fontSize: '14px',
                                        outline: 'none',
                                        transition: 'all 0.2s',
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.border = '1px solid rgba(168, 85, 247, 0.5)';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(168, 85, 247, 0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isLoading}
                                    style={{
                                        padding: '14px 24px',
                                        borderRadius: '16px',
                                        border: 'none',
                                        background: inputValue.trim() && !isLoading
                                            ? 'linear-gradient(135deg, #a855f7, #22d3ee)'
                                            : 'rgba(107, 114, 128, 0.3)',
                                        color: 'white',
                                        cursor: inputValue.trim() && !isLoading ? 'pointer' : 'not-allowed',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        transition: 'all 0.2s',
                                        boxShadow: inputValue.trim() && !isLoading ? '0 4px 12px rgba(168, 85, 247, 0.3)' : 'none',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (inputValue.trim() && !isLoading) {
                                            e.currentTarget.style.transform = 'translateY(-1px)';
                                            e.currentTarget.style.boxShadow = '0 6px 16px rgba(168, 85, 247, 0.4)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = inputValue.trim() && !isLoading ? '0 4px 12px rgba(168, 85, 247, 0.3)' : 'none';
                                    }}
                                >
                                    Send
                                </button>
                            </div>
                            <div style={{ marginTop: '10px', textAlign: 'center', fontSize: '11px', color: '#6b7280', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                ✨ Powered by Gemini 1.5 Flash
                            </div>
                        </form>
                    </div>
                )}

                {/* Floating Orb */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="orb-button"
                    style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        border: 'none',
                        background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #22d3ee 100%)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '32px',
                        position: 'relative',
                        padding: 0,
                    }}
                >
                    {isOpen ? (
                        <span style={{ color: 'white', fontSize: '28px', fontWeight: '300' }}>×</span>
                    ) : (
                        <span style={{ color: 'white' }}>💬</span>
                    )}

                    {!isOpen && (
                        <span style={{
                            position: 'absolute',
                            top: '-6px',
                            right: '-6px',
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                            color: 'black',
                            fontSize: '13px',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 8px rgba(34, 211, 238, 0.5)',
                            border: '3px solid #111827',
                        }}>1</span>
                    )}
                </button>
            </div>
        </>
    );
}
