// FINAL PROFESSIONAL HOME PAGE HERO – Client-attracting, elegant, photo-focused – 100% Gemini AntiGravity
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PhotoOrb = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setPrefersReducedMotion(mediaQuery.matches);
        }
    }, []);

    return (
        <div className="flex items-center justify-center w-full">
            <div className="relative group">
                {/* Photo Orb Container */}
                <div
                    className={`relative rounded-full overflow-hidden
                        w-[320px] h-[320px] md:w-[420px] md:h-[420px]
                        ${!prefersReducedMotion ? 'photo-orb-rotate' : ''}
                    `}
                    style={{
                        boxShadow: `
                            inset 0 0 30px rgba(0, 0, 0, 0.5),
                            0 0 40px rgba(168, 85, 247, 0.3),
                            0 0 80px rgba(34, 211, 238, 0.2)
                        `
                    }}
                >
                    {/* Double Neon Border */}
                    <div className={`absolute inset-0 rounded-full ${!prefersReducedMotion ? 'neon-pulse' : ''}`}
                        style={{
                            border: '4px solid #A855F7',
                            boxShadow: '0 0 20px #A855F7, inset 0 0 20px #A855F7'
                        }}
                    />
                    <div className={`absolute inset-[-8px] rounded-full ${!prefersReducedMotion ? 'neon-pulse-outer' : ''}`}
                        style={{
                            border: '3px solid #22D3EE',
                            boxShadow: '0 0 30px #22D3EE'
                        }}
                    />

                    {/* Photo */}
                    <div className={`w-full h-full ${!prefersReducedMotion ? 'group-hover:photo-tilt' : ''}`}>
                        <Image
                            src="/ahmad.jpg"
                            alt="Ahmad Hassan - AI-Native Engineer"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 320px, 420px"
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* Very slow professional rotation */
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .photo-orb-rotate {
                    animation: rotate 120s linear infinite;
                }

                /* Gentle pulse every 5 seconds */
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.02); }
                }

                .neon-pulse {
                    animation: pulse 5s ease-in-out infinite;
                }

                .neon-pulse-outer {
                    animation: pulse 5s ease-in-out infinite;
                    animation-delay: 0.3s;
                }

                /* Subtle 3D tilt on hover */
                @keyframes tilt {
                    0%, 100% { transform: rotateY(0deg) rotateX(0deg); }
                    50% { transform: rotateY(3deg) rotateX(-2deg); }
                }

                .group:hover .photo-tilt {
                    animation: tilt 0.6s ease-in-out forwards;
                }
            `}</style>
        </div>
    );
};

export default PhotoOrb;
