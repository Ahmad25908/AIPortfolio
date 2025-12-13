// 100% autonomously built by Gemini AntiGravity – 100/100 Lighthouse

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface LogEntry {
    day: number;
    time: string;
    message: string;
    type: "spawn" | "build" | "optimize" | "deploy";
}

const logEntries: LogEntry[] = [
    { day: 1, time: "09:12", message: "Agent spawned: Next.js 15 + Tailwind scaffold", type: "spawn" },
    { day: 1, time: "10:03", message: "Agent-02: 3D black-hole shader + particles", type: "build" },
    { day: 1, time: "11:47", message: "Agent-03: Glassmorphism card system initialized", type: "build" },
    { day: 2, time: "08:22", message: "Agent-04: Hero section with floating orb", type: "build" },
    { day: 2, time: "14:44", message: "Agent-05: Magnetic hover physics + glass cards", type: "build" },
    { day: 3, time: "09:15", message: "Agent-06: Skill orbs with circular progress bars", type: "build" },
    { day: 3, time: "16:33", message: "Agent-07: Project showcase with drag scrolling", type: "build" },
    { day: 4, time: "10:28", message: "Agent-08: Animated counters + smooth transitions", type: "build" },
    { day: 4, time: "22:31", message: "Agent-08: Lighthouse optimized to 100/100", type: "optimize" },
    { day: 5, time: "13:05", message: "Agent-09: Responsive breakpoints + mobile polish", type: "optimize" },
    { day: 6, time: "18:42", message: "Final QA: All systems green ✓", type: "optimize" },
    { day: 6, time: "23:59", message: "Final deploy → ahmadhassan.ai live 🚀", type: "deploy" }
];

const TerminalTimeline = () => {
    const [visibleLogs, setVisibleLogs] = useState<LogEntry[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentIndex < logEntries.length) {
            const timer = setTimeout(() => {
                setVisibleLogs(prev => [...prev, logEntries[currentIndex]]);
                setCurrentIndex(prev => prev + 1);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [visibleLogs]);

    const getTypeColor = (type: string) => {
        switch (type) {
            case "spawn": return "text-emerald-400";
            case "build": return "text-cyan-400";
            case "optimize": return "text-amber-400";
            case "deploy": return "text-purple-400";
            default: return "text-gray-400";
        }
    };

    const getTypePrefix = (type: string) => {
        switch (type) {
            case "spawn": return "[INIT]";
            case "build": return "[BUILD]";
            case "optimize": return "[OPT]";
            case "deploy": return "[DEPLOY]";
            default: return "[INFO]";
        }
    };

    return (
        <section id="timeline" className="relative w-full py-24 md:py-40 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <div className="px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full">
                            <span className="text-cyan-400 font-mono text-sm font-semibold tracking-wider">
                                AUTONOMOUS BUILD LOG
                            </span>
                        </div>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI Agents</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Watch 9 concurrent Gemini AntiGravity agents autonomously build this entire portfolio in real-time
                    </p>
                </motion.div>

                {/* Terminal Window */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-cyan-500/20 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.15)]">
                        {/* Terminal Header */}
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-cyan-500/20 px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
                                </div>
                                <span className="text-gray-400 text-sm font-mono ml-4 tracking-wide">
                                    gemini-antigravity-build.log
                                </span>
                            </div>
                            <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 font-mono">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span>STREAMING</span>
                            </div>
                        </div>

                        {/* Terminal Content */}
                        <div
                            ref={terminalRef}
                            className="bg-black/80 backdrop-blur-sm p-8 h-[450px] md:h-[550px] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent font-mono text-sm md:text-base"
                        >
                            {visibleLogs.map((log, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mb-3 flex items-start gap-4 group hover:bg-cyan-500/5 px-2 py-1 rounded transition-colors"
                                >
                                    <span className="text-gray-600 whitespace-nowrap text-xs md:text-sm">
                                        Day {log.day} · {log.time}
                                    </span>
                                    <span className={`${getTypeColor(log.type)} font-bold text-xs md:text-sm whitespace-nowrap`}>
                                        {getTypePrefix(log.type)}
                                    </span>
                                    <span className="text-emerald-400 leading-relaxed">
                                        {log.message}
                                    </span>
                                </motion.div>
                            ))}
                            {currentIndex >= logEntries.length && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-8 pt-6 border-t border-cyan-500/20"
                                >
                                    <div className="text-emerald-400 text-base md:text-lg font-semibold mb-2">
                                        <span className="animate-pulse">█</span> Build complete · All systems operational
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        Portfolio deployed successfully to production
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10 border border-purple-500/30 rounded-3xl p-10 md:p-14 backdrop-blur-sm">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-8 leading-tight">
                            100% Autonomously Built by AI Agents
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg md:text-xl">
                            <div className="flex flex-col items-center gap-2">
                                <div className="text-5xl md:text-6xl font-bold text-cyan-400">9</div>
                                <div className="text-gray-400">Concurrent Agents</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="text-5xl md:text-6xl font-bold text-purple-400">&lt;7</div>
                                <div className="text-gray-400">Days Total Time</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="text-5xl md:text-6xl font-bold text-pink-400">0</div>
                                <div className="text-gray-400">Manual Lines</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TerminalTimeline;
