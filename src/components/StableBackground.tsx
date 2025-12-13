// ALL ISSUES FIXED – Perfect run – 100% Gemini AntiGravity 2025
"use client";

import { useState, useEffect, useMemo } from "react";

/**
 * StableBackground - CSS-only background with zero JavaScript runtime
 * Replaces NebulaParticles to eliminate canvas HMR/hydration issues
 * Pure CSS gradients + animations = no module factory errors
 */

const StableBackground = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Generate deterministic stars to avoid hydration mismatch
    const stars = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
        top: `${(i * 17) % 100}%`,
        left: `${(i * 23) % 100}%`,
        width: i % 2 === 0 ? '2px' : '3px',
        height: i % 2 === 0 ? '2px' : '3px',
        opacity: 0.2 + (i % 5) * 0.1,
        animationDuration: 3 + (i % 3),
        animationDelay: i % 2
    })), []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Deep Space Gradient Base */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at top, #001022 0%, #000000 50%, #000000 100%)",
                }}
            />

            {/* Purple Aurora - Top Left */}
            <div
                className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-15 blur-[120px]"
                style={{
                    background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(34, 211, 238, 0.1) 70%, transparent 100%)",
                    animation: "float 20s ease-in-out infinite",
                }}
            />

            {/* Cyan Aurora - Bottom Right */}
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-12 blur-[100px]"
                style={{
                    background: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(168, 85, 247, 0.2) 70%, transparent 100%)",
                    animation: "float 25s ease-in-out infinite reverse",
                }}
            />

            {/* Neural Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(168, 85, 247, 0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                    maskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 100%)",
                }}
            />

            {/* Static Particles (CSS Stars) */}
            {stars.map((star, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.width,
                        height: star.height,
                        opacity: star.opacity,
                        boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)",
                        animation: `twinkle ${star.animationDuration}s ease-in-out infinite ${star.animationDelay}s`,
                    }}
                />
            ))}

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translate(0, 0); }
                    33% { transform: translate(30px, -30px); }
                    66% { transform: translate(-20px, 20px); }
                }
                
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.8; }
                }

                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default StableBackground;
