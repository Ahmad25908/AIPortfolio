// Individual Skill Pillar component – 100% autonomously built by Gemini AntiGravity

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface SkillPillarProps {
    id: number;
    title: string;
    icon: string;
    level: number;
    subtitle: string;
    metric: string;
    color: "purple" | "cyan" | "pink";
    index: number;
}

const SkillPillar = ({ title, icon, level, subtitle, metric, color, index }: SkillPillarProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const colorClasses = {
        purple: {
            border: "border-purple-500/30",
            glow: "shadow-[0_0_40px_rgba(168,85,247,0.3)]",
            progress: "from-purple-600 to-purple-400",
            badge: "bg-purple-500/20 text-purple-300 border-purple-500/30"
        },
        cyan: {
            border: "border-cyan-500/30",
            glow: "shadow-[0_0_40px_rgba(34,211,238,0.3)]",
            progress: "from-cyan-600 to-cyan-400",
            badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
        },
        pink: {
            border: "border-pink-500/30",
            glow: "shadow-[0_0_40px_rgba(236,72,153,0.3)]",
            progress: "from-pink-600 to-pink-400",
            badge: "bg-pink-500/20 text-pink-300 border-pink-500/30"
        }
    };

    const colors = colorClasses[color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.01 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group cursor-pointer"
        >
            {/* Glassmorphism Card */}
            <div className={`
                relative overflow-hidden rounded-2xl p-8
                bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02]
                backdrop-blur-3xl border-2 ${colors.border}
                ${colors.glow}
                transition-all duration-300
                group-hover:border-opacity-60
            `}>
                {/* Icon */}
                <div className="text-7xl mb-6 text-center filter drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                    {icon}
                </div>

                {/* Title */}
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 text-center leading-tight bg-gradient-to-r ${color === 'purple' ? 'from-purple-200 to-purple-400' :
                        color === 'cyan' ? 'from-cyan-200 to-cyan-400' :
                            'from-pink-200 to-pink-400'
                    } bg-clip-text text-transparent`}>
                    {title}
                </h3>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-400 text-sm font-mono font-semibold">Mastery Level</span>
                        <span className="text-white font-bold text-xl">{level}%</span>
                    </div>
                    <div className="relative h-4 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.5, duration: 1.5, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${colors.progress} rounded-full relative overflow-hidden`}
                        >
                            {/* Animated Shine Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{
                                    x: ['-100%', '200%']
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatDelay: 1
                                }}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Subtitle - Tech Stack */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 min-h-[60px] group-hover:text-gray-200 transition-colors duration-300">
                    {subtitle}
                </p>

                {/* Proven Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 ${colors.badge} text-xs font-bold mb-4`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Proven in production</span>
                </div>

                {/* Client Metric - Shows on Hover */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        height: isHovered ? "auto" : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className={`mt-4 pt-4 border-t-2 ${colors.border}`}>
                        <div className="flex items-center gap-2 text-sm">
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-white font-semibold">{metric}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </div>
        </motion.div>
    );
};

export default SkillPillar;
