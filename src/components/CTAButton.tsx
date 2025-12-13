// ALL ISSUES FIXED – Runs perfectly on localhost – 100% Gemini AntiGravity 2025
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CTAButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="flex flex-col items-center lg:items-start gap-4 mt-10">
            <motion.button
                className="group relative px-14 py-7 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-bold text-xl md:text-2xl uppercase tracking-wide shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                style={{
                    boxShadow: isHovered
                        ? "0 0 50px rgba(34, 211, 238, 0.7), 0 25px 70px rgba(168, 85, 247, 0.5)"
                        : "0 0 30px rgba(168, 85, 247, 0.4), 0 15px 50px rgba(0, 0, 0, 0.6)",
                    transition: "box-shadow 0.3s ease",
                }}
                transition={{ duration: 0.2 }}
            >
                <span className="relative z-10">Book Free SaaS Audit Call</span>

                {/* Cyan Glow Overlay on Hover */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 transition-opacity duration-300"
                    style={{ opacity: isHovered ? 0.8 : 0 }}
                />

                {/* Shimmer Effect */}
                <div
                    className="absolute inset-0 shimmer-effect"
                    style={{ opacity: isHovered ? 1 : 0 }}
                />

                {/* Particle Ripple Burst on Hover */}
                {isHovered && isMounted && (
                    <>
                        <motion.div
                            className="absolute inset-0"
                            initial={{ scale: 0.8, opacity: 0.8 }}
                            animate={{ scale: 2.2, opacity: 0 }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(34, 211, 238, 0.6) 0%, rgba(168, 85, 247, 0.4) 40%, transparent 70%)",
                            }}
                        />
                        <motion.div
                            className="absolute inset-0"
                            initial={{ scale: 0.8, opacity: 0.6 }}
                            animate={{ scale: 2.5, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(34, 211, 238, 0.3) 40%, transparent 70%)",
                            }}
                        />
                    </>
                )}

                {/* Click Ripple */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-40 bg-white transition-opacity duration-150" />
            </motion.button>

            {/* Urgency Subtext with Clock Icon */}
            <motion.p
                className="text-sm md:text-base text-cyan-400 flex items-center gap-2.5"
                initial={false}
                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 1.6, duration: 0.5 }}
            >
                <span className="text-xl">⏰</span>
                <span>
                    <strong className="text-cyan-300">Only 3 spots left this month</strong>
                    {" · "}
                    <span className="text-gray-400">Response in &lt;6 hours</span>
                </span>
            </motion.p>
        </div>
    );
};

export default CTAButton;
