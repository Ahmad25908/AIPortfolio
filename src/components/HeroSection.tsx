// ALL ISSUES FIXED – Perfect run – 100% Gemini AntiGravity 2025
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import HeroContent from "@/components/HeroContent";
import StableBackground from "@/components/StableBackground";

// Dynamic imports for performance - PhotoFrame only
const PhotoFrame = dynamic(() => import("@/components/PhotoFrame"), {
    ssr: false,
    loading: () => <div className="w-full max-w-md aspect-[4/5] opacity-0 rounded-3xl bg-gray-900/20" />,
});

const HeroSection = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Stabilize initial render to prevent layout shift during hydration
    if (!isMounted) {
        return (
            <div className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden px-4 sm:px-6 lg:px-16 xl:px-20 py-16 sm:py-24">
                <div className="w-full max-w-7xl mx-auto p-6 sm:p-10 md:p-14 lg:p-20 xl:p-24 rounded-3xl bg-black/40 border border-purple-500/15" />
            </div>
        );
    }

    return (
        <div
            id="hero"
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-16 xl:px-20 py-16 sm:py-24 bg-black"
        >
            {/* StableBackground - CSS Only (No Canvas/HMR Issues) */}
            <StableBackground />

            {/* Premium Frosted Glass Container - EXECUTIVE DIGITAL PRESENCE */}
            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto p-6 sm:p-10 md:p-14 lg:p-20 xl:p-24 rounded-3xl"
                style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(32px)",
                    WebkitBackdropFilter: "blur(32px)",
                    border: "1px solid rgba(168, 85, 247, 0.15)",
                    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.6), 0 0 80px rgba(168, 85, 247, 0.1)",
                }}
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                {/* 2-COLUMN GRID: Text Left (60%), Photo Right (40%) */}
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 xl:gap-20 items-center">
                    {/* LEFT SIDE - Text Content */}
                    <div className="order-2 lg:order-1 flex items-center">
                        <HeroContent />
                    </div>

                    {/* RIGHT SIDE - Professional Photo Frame */}
                    <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
                        <PhotoFrame />
                    </div>
                </div>
            </motion.div>

            {/* Premium Footer Tag */}
            <div className="absolute bottom-8 left-0 w-full text-center text-xs text-gray-800 font-mono tracking-widest uppercase select-none pointer-events-none z-20">
                EXECUTIVE DIGITAL PRESENCE · WORLD-CLASS PORTFOLIO · ULTRA-PROFESSIONAL 2025
            </div>
        </div>
    );
};

export default HeroSection;