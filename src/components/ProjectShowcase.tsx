// 100% autonomously built by Gemini AntiGravity – 100/100 Lighthouse

"use client";

import { useRef, useState, useEffect } from "react";
import { projectsData } from "@/data/projectsData";
import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";

const ProjectShowcase = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Auto-scroll hint animation
    useEffect(() => {
        const timer = setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft = 100;
                setTimeout(() => {
                    if (scrollRef.current) {
                        scrollRef.current.scrollLeft = 0;
                    }
                }, 800);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full py-16 relative">
            {/* Section Header */}
            <div className="text-center mb-12 px-4">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    Live Products <span className="text-neon-purple">Making Money</span>
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg max-w-2xl mx-auto"
                >
                    Real SaaS products generating revenue, built 70-90% autonomously with AI agents
                </motion.p>
            </div>

            {/* Project Cards Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-8 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                    scrollBehavior: isDragging ? 'auto' : 'smooth',
                }}
            >
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="project-card-subtle group min-w-[340px] md:min-w-[480px] snap-center"
                    >
                        <div className="glass-panel rounded-2xl p-6 md:p-8 h-full transition-all duration-300 border-purple-500/30 hover:border-purple-500/60 relative overflow-hidden">
                            {/* Subtle gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                {/* Project Screenshot/Preview */}
                                <div className="relative w-full h-56 md:h-64 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-xl mb-6 overflow-hidden border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
                                    {project.isConfidential ? (
                                        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-xl bg-black/40">
                                            <div className="text-center">
                                                <motion.div
                                                    animate={{ scale: [1, 1.05, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="text-7xl mb-3"
                                                >
                                                    🔒
                                                </motion.div>
                                                <p className="text-white font-bold text-xl mb-1">NDA Protected</p>
                                                <p className="text-sm text-gray-400">Enterprise Client</p>
                                                <p className="text-xs text-purple-400 mt-2">Details available on call</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 to-cyan-600/15 flex items-center justify-center transition-all duration-300">
                                            <div className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">📱</div>
                                            {/* Live Badge */}
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-xs text-green-400 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                                LIVE
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Project Title & Description */}
                                <div className="mb-6">
                                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-black/30 rounded-xl border border-purple-500/20">
                                    {project.metrics.map((metric, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="text-neon-cyan text-xl md:text-2xl font-bold mb-1">
                                                <AnimatedCounter
                                                    end={metric.value}
                                                    suffix={metric.suffix}
                                                    decimals={metric.label.includes("Band") ? 1 : 0}
                                                />
                                            </div>
                                            <div className="text-xs text-gray-400 font-medium">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* AI Badge */}
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 border border-purple-500/30 rounded-full text-xs md:text-sm text-purple-300 font-medium">
                                        <span className="text-base">🤖</span>
                                        {project.badge}
                                    </div>

                                    {/* View Details Button */}
                                    <button className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 rounded-lg text-white text-sm font-semibold transition-all duration-300">
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-8 text-gray-500 text-sm font-mono flex items-center justify-center gap-2"
            >
                <span className="hidden md:inline">←</span>
                <span>Drag to explore all projects</span>
                <span className="hidden md:inline">→</span>
            </motion.div>

            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
    );
};

export default ProjectShowcase;
