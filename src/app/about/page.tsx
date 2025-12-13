// Professional About Page – Premium Design – Built 100% by Gemini AntiGravity
"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useEffect, useState, memo } from "react";

// Lazy load heavy 3D Background with no SSR
const GeometryBackground = dynamic(() => import("@/components/GeometryBackground"), {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-black z-0" />
});

// Lazy load other heavy components
const PhotoCard = dynamic(() => import("@/components/about/PhotoCard"), {
    loading: () => <div className="w-full h-96 bg-white/5 rounded-3xl animate-pulse" />,
});

const AboutStats = dynamic(() => import("@/components/about/AboutStats"));
const AboutTimeline = dynamic(() => import("@/components/about/AboutTimeline"));
const AboutCTA = dynamic(() => import("@/components/about/AboutCTA"));
const ProfessionalFooter = dynamic(() => import("@/components/ProfessionalFooter"));


const TypewriterTagline = memo(() => {
    const text = "17-Year-Old AI-Native Engineer · Pakistan · Building Million-Dollar SaaS with Gemini Agents";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 30);

        return () => clearInterval(timer);
    }, []);

    return (
        <p className="text-neon-cyan font-mono text-sm md:text-base mb-6 min-h-[24px]">
            {displayedText}
            <span className="animate-pulse">_</span>
        </p>
    );
});

TypewriterTagline.displayName = 'TypewriterTagline';

export default function AboutPage() {
    return (
        <>
            <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
                {/* Premium 3D Background */}
                <GeometryBackground />

                {/* Hero Section with Glassmorphism */}
                <div className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 pointer-events-none">
                    <div className="relative z-10 w-full max-w-7xl mx-auto pointer-events-auto">
                        {/* Glassmorphism Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="glass-panel rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-16 lg:p-20 box-glow bg-black/40 backdrop-blur-xl border border-white/5"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                                {/* Left Column - Content (60%) */}
                                <div className="lg:col-span-3 order-2 lg:order-1">
                                    {/* Available Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm"
                                    >
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                        <span className="text-sm font-semibold text-white">Available for Work</span>
                                    </motion.div>

                                    {/* Heading with Glitch Effect */}
                                    <motion.h1
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
                                    >
                                        <span className="text-white">Ahmad</span>{" "}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-pink-500 to-neon-cyan animate-gradient">
                                            Hassan
                                        </span>
                                    </motion.h1>

                                    {/* Tagline */}
                                    <TypewriterTagline />

                                    {/* Bio */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="space-y-4 mb-10"
                                    >
                                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                            Self-taught from YouTube. Started at 14. First client at 16. Now I command fleets of <span className="text-neon-purple font-semibold glow-text">Gemini AntiGravity agents</span> to ship production-ready SaaS & AI systems 80–90% autonomously.
                                        </p>
                                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                            I don&apos;t just code — I create <span className="text-white font-bold border-b-2 border-neon-cyan">unfair advantages</span>.
                                        </p>
                                    </motion.div>

                                    {/* Stats */}
                                    <AboutStats />

                                    {/* Timeline */}
                                    <AboutTimeline />

                                    {/* CTA */}
                                    <AboutCTA />
                                </div>

                                {/* Right Column - Photo (40%) */}
                                <div className="lg:col-span-2 order-1 lg:order-2">
                                    <PhotoCard />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Status Line */}
                <div className="absolute bottom-4 left-0 w-full text-center text-xs text-gray-600 font-mono px-4 z-20 pointer-events-none">
                    <p className="truncate">PROFILE STATUS: ACTIVE // READY TO BUILD</p>
                </div>
            </main>
            <ProfessionalFooter />
        </>
    );
}
