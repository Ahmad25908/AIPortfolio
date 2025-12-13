// FULL PORTFOLIO TESTED & OPTIMIZED – Ready for clients – 100% Gemini AntiGravity
// Professional PhotoCard with optimized image loading and alt text – QA Tested December 2025

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PhotoCard = () => {
    return (
        <div className="sticky top-24 w-full flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-md aspect-[4/5] perspective-1000"
            >
                <motion.div
                    whileHover={{
                        rotateX: 5,
                        rotateY: -5,
                        scale: 1.02,
                        boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group"
                >
                    {/* Neon Glow Border */}
                    <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-neon-purple/50 transition-colors duration-500 z-20" />

                    {/* Inner Shadow & Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />

                    {/* Image */}
                    <div className="relative w-full h-full">
                        <Image
                            src="/about.png"
                            alt="Ahmad Hassan - AI-Native Engineer and SaaS Developer"
                            fill
                            className="object-cover object-center"
                            priority
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </div>

                    {/* Floating Particles Effect (CSS) */}
                    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-neon-cyan rounded-full animate-ping" />
                        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-purple rounded-full animate-ping delay-300" />
                    </div>

                </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-center space-y-2"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-gray-300">Available Worldwide</span>
                </div>
                <p className="text-xs text-gray-500 font-mono">WhatsApp: +92 324 4109392</p>
            </motion.div>
        </div>
    );
};

export default PhotoCard;
