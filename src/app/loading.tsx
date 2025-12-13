"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-8"
            >
                {/* Animated Logo */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent"
                >
                    AH
                </motion.div>

                {/* Loading Text */}
                <motion.p
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="text-gray-400 font-mono text-sm"
                >
                    Loading...
                </motion.p>

                {/* Loading Bar */}
                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
                    <motion.div
                        animate={{
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="h-full w-1/3 bg-gradient-to-r from-purple-500 to-cyan-500"
                    />
                </div>
            </motion.div>
        </div>
    );
}
