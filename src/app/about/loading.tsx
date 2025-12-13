"use client";

import { motion } from "framer-motion";

export default function AboutLoading() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
                    {/* Left Column Skeleton */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Title Skeleton */}
                        <div className="space-y-4">
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="h-16 bg-white/5 rounded-lg w-3/4"
                            />
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                                className="h-6 bg-white/5 rounded w-full"
                            />
                        </div>

                        {/* Content Skeleton */}
                        <div className="space-y-3">
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                    className="h-4 bg-white/5 rounded w-full"
                                />
                            ))}
                        </div>

                        {/* Stats Skeleton */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                    className="h-24 bg-white/5 rounded-xl"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column Skeleton */}
                    <div className="lg:col-span-2">
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-full aspect-[4/5] bg-white/5 rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
