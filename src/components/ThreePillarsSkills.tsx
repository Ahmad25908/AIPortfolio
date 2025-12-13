// ALL ISSUES FIXED – Runs perfectly on localhost – 100% Gemini AntiGravity 2025
// Skills section – Premium Three Pillars

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SkillPillar from "./SkillPillar";
import GlitchText from "./GlitchText";
import StableBackground from "./StableBackground";


const pillarsData: Array<{
    id: number;
    title: string;
    icon: string;
    level: number;
    subtitle: string;
    metric: string;
    color: "purple" | "cyan" | "pink";
    position: { x: number; y: number; z: number };
}> = [
        {
            id: 1,
            title: "Full-Stack Web Engineer",
            icon: "</>",
            level: 98,
            subtitle: "Next.js 15 • TypeScript • Tailwind • Supabase • Drizzle • Sanity • Shadcn",
            metric: "5000+ daily active users",
            color: "purple" as const,
            position: { x: -1.5, y: 0, z: 0 }
        },
        {
            id: 2,
            title: "AI Agent & Autonomous Systems Architect",
            icon: "🤖",
            level: 96,
            subtitle: "Gemini AntiGravity • OpenAI Agents SDK • MCP (Model Context Protocol) • Multi-agent orchestration • n8n workflows • Voice agents • RAG pipelines",
            metric: "Reduced dev time 85%",
            color: "cyan" as const,
            position: { x: 0, y: 0, z: 0 }
        },
        {
            id: 3,
            title: "Prompt & Context Engineering Master",
            icon: "✨",
            level: 97,
            subtitle: "System vs Role vs Raw prompting • Chain-of-Thought • ReAct • Tree of Thoughts • RAG • Context windows 128k+ • Zero-shot to few-shot mastery",
            metric: "$9k client project",
            color: "pink" as const,
            position: { x: 1.5, y: 0, z: 0 }
        }
    ];

const ThreePillarsSkills = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "I don't just code websites. I build autonomous money-making machines using web + agents + intelligence.";

    // Typing animation effect
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 30);
        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <section id="skills" className="relative w-full py-24 md:py-32 bg-black overflow-hidden">
            {/* StableBackground - CSS Only (No HMR Issues) */}
            <StableBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Glassmorphism Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-16 lg:p-20 box-glow"
                >
                    {/* Title Section */}
                    <div className="text-center mb-16">
                        <GlitchText text="My Three Unfair Advantages" />

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-cyan-400 text-lg md:text-xl mt-6 max-w-4xl mx-auto font-mono leading-relaxed"
                        >
                            {typedText}
                            <span className="animate-pulse">|</span>
                        </motion.p>
                    </div>

                    {/* Three Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
                        {pillarsData.map((pillar, index) => (
                            <SkillPillar
                                key={pillar.id}
                                {...pillar}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Bottom Trust Signal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <p className="text-gray-400 text-sm md:text-base">
                            <span className="text-purple-400 font-bold">Three pillars.</span>{" "}
                            <span className="text-cyan-400 font-bold">Perfect synergy.</span>{" "}
                            <span className="text-pink-400 font-bold">Unstoppable results.</span>
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Status Line */}
            <div className="absolute bottom-4 left-0 w-full text-center text-xs text-gray-600 font-mono px-4 z-20">
                <p className="truncate">SKILLS STATUS: MASTERED // READY TO DEPLOY</p>
            </div>
        </section>
    );
};

export default ThreePillarsSkills;
