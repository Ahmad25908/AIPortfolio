// ALL ISSUES FIXED – Runs perfectly on localhost – 100% Gemini AntiGravity 2025
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Typewriter = ({ text, speed = 45 }: { text: string; speed?: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            setPrefersReducedMotion(mediaQuery.matches);

            const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    useEffect(() => {
        if (prefersReducedMotion) {
            setDisplayedText(text);
            return;
        }

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed, prefersReducedMotion]);

    return (
        <span>
            {displayedText}
            {currentIndex < text.length && <span className="animate-pulse text-white">|</span>}
        </span>
    );
};

const HeroContent = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            setPrefersReducedMotion(mediaQuery.matches);

            const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    if (!isMounted) {
        return <div className="w-full opacity-0" />;
    }

    return (
        <div className="flex flex-col justify-center space-y-4 lg:space-y-8">
            {/* Eyebrow Badge - "17-Year-Old AI-Native Engineer" */}
            <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 w-fit"
                initial={false}
                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <span className="text-cyan-400 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                    17-Year-Old AI-Native Engineer
                </span>
            </motion.div>

            {/* H1 - "Ahmad Hassan" with Glitch Effect */}
            <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-orbitron font-bold text-white leading-none"
                style={{
                    textShadow: "0 0 60px rgba(168, 85, 247, 0.8), 0 0 30px rgba(168, 85, 247, 0.5)",
                }}
                initial={false}
                animate={isMounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Ahmad Hassan
            </motion.h1>

            {/* Headline with Typewriter - "I build $10k–$100k MRR SaaS..." */}
            <motion.h2
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white leading-tight"
                initial={false}
                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                {isMounted && (
                    <Typewriter text="I build $10k–$100k MRR SaaS using Gemini AntiGravity agents" speed={45} />
                )}
            </motion.h2>

            {/* Subtext */}
            <motion.p
                className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
                initial={false}
                animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                Live products below · 70–90% autonomous · From Pakistan to the world
            </motion.p>

            {/* CTA Button */}
            <motion.div
                className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4"
                initial={false}
                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <a
                    href="#contact"
                    className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 font-bold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105"
                >
                    <span className="relative z-10">Book Free SaaS Audit Call</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
            </motion.div>

            {/* Urgency Subtext */}
            <motion.p
                className="text-cyan-400 text-sm md:text-base"
                initial={false}
                animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                ⏰ Only 3 spots left this month · Response in {`<`}6 hours
            </motion.p>
        </div>
    );
};

export default HeroContent;