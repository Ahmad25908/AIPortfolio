// ULTIMATE PROFESSIONAL HOME PAGE – Responsive like About page – 100% Gemini AntiGravity
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PhotoFrame = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 0);

        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            setTimeout(() => setPrefersReducedMotion(mediaQuery.matches), 0);

            const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
            mediaQuery.addEventListener("change", handleChange);

            return () => {
                clearTimeout(timer);
                mediaQuery.removeEventListener("change", handleChange);
            };
        }

        return () => clearTimeout(timer);
    }, []);

    if (!isMounted) {
        return <div className="w-full max-w-md aspect-[4/5] opacity-0 rounded-3xl bg-gray-900/20" />;
    }

    return (
        <motion.div
            className="flex items-center justify-center w-full h-full"
            initial={false}
            animate={isMounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            <motion.div
                className="relative group w-full max-w-md"
                animate={
                    !prefersReducedMotion && isMounted
                        ? {
                            y: [0, -4, 0],
                        }
                        : {}
                }
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={
                    !prefersReducedMotion
                        ? {
                            scale: 1.02,
                            rotateY: 3,
                            rotateX: -1,
                        }
                        : {}
                }
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                style={{ perspective: 1200 }}
            >
                {/* Photo Frame Container - Responsive with aspect ratio */}
                <div
                    className="relative rounded-[32px] overflow-hidden w-full aspect-[4/5]"
                    style={{
                        background: "linear-gradient(145deg, #0a0a0a, #000000)",
                        boxShadow: isHovered
                            ? `
                                inset 0 0 40px rgba(255, 255, 255, 0.1),
                                0 0 100px rgba(168, 85, 247, 0.6),
                                0 0 150px rgba(34, 211, 238, 0.4),
                                0 30px 80px rgba(168, 85, 247, 0.5)
                            `
                            : `
                                inset 0 0 30px rgba(255, 255, 255, 0.08),
                                0 0 80px rgba(168, 85, 247, 0.5),
                                0 0 120px rgba(34, 211, 238, 0.3),
                                0 25px 60px rgba(168, 85, 247, 0.4)
                            `,
                        transition: "box-shadow 0.4s ease",
                    }}
                >
                    {/* Inner Glow Layer - Rim Light Effect */}
                    <div
                        className="absolute inset-[3px] rounded-[30px] pointer-events-none z-10"
                        style={{
                            background: "linear-gradient(145deg, rgba(168, 85, 247, 0.12), rgba(34, 211, 238, 0.08))",
                            boxShadow: isHovered
                                ? "inset 0 0 40px rgba(168, 85, 247, 0.35), inset 0 0 60px rgba(34, 211, 238, 0.25)"
                                : "inset 0 0 30px rgba(168, 85, 247, 0.25), inset 0 0 50px rgba(34, 211, 238, 0.15)",
                            opacity: isHovered ? 0.85 : 0.65,
                            transition: "all 0.4s ease",
                        }}
                    />

                    {/* Premium Highlight - Top Left */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10"
                        style={{
                            opacity: isHovered ? 0.18 : 0.1,
                            transition: "opacity 0.4s ease",
                        }}
                    />

                    {/* Double Border - Purple Inner */}
                    <div
                        className="absolute inset-0 rounded-[32px] pointer-events-none z-20"
                        style={{
                            border: "2px solid #A855F7",
                            boxShadow: isHovered
                                ? "0 0 50px #A855F7, inset 0 0 50px rgba(168, 85, 247, 0.35)"
                                : "0 0 40px #A855F7, inset 0 0 40px rgba(168, 85, 247, 0.25)",
                            transition: "box-shadow 0.4s ease",
                        }}
                    />

                    {/* Double Border - Cyan Outer */}
                    <div
                        className="absolute inset-[-4px] rounded-[36px] pointer-events-none z-20"
                        style={{
                            border: "1.5px solid #22D3EE",
                            boxShadow: isHovered
                                ? "0 0 60px rgba(34, 211, 238, 0.6)"
                                : "0 0 50px rgba(34, 211, 238, 0.45)",
                            transition: "box-shadow 0.4s ease",
                        }}
                    />

                    {/* Hover Burst Effect */}
                    {isHovered && !prefersReducedMotion && isMounted && (
                        <motion.div
                            className="absolute inset-0 rounded-[32px] pointer-events-none z-15"
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 1.25, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(34, 211, 238, 0.25) 50%, transparent 70%)",
                            }}
                        />
                    )}

                    {/* Photo Content */}
                    <div className="w-full h-full relative">
                        {imageError ? (
                            // Premium Placeholder
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
                                <div className="text-center">
                                    <div className="text-8xl mb-4 opacity-40">👤</div>
                                    <p className="text-white text-lg font-semibold">Professional Portrait</p>
                                    <p className="text-gray-400 text-sm mt-2">/public/hassan.png</p>
                                </div>
                            </div>
                        ) : (
                            <Image
                                src="/aiagent.png"
                                alt="Ahmad Hassan - 17-Year-Old AI-Native Engineer from Pakistan"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                                onError={() => setImageError(true)}
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PhotoFrame;
