"use client";

import { motion } from "framer-motion";

const milestones = [
    {
        year: "2025",
        title: "Mastered Gemini AntiGravity",
        desc: "Commanding fleets of AI agents to build 7-figure pipelines.",
        active: true,
    },
    {
        year: "2024",
        title: "Built IELTS AI Coach + Proposal Bot",
        desc: "Launched complex AI SaaS products with real-time voice capabilities.",
        active: false,
    },
    {
        year: "2023",
        title: "First Freelance Client",
        desc: "Landed first paid gig. Delivered 100% satisfaction.",
        active: false,
    },
    {
        year: "2022",
        title: "Learned HTML/CSS",
        desc: "Started the journey from YouTube. Self-taught & obsessed.",
        active: false,
    },
];

const AboutTimeline = () => {
    return (
        <div className="relative pl-8 border-l border-white/10 space-y-12 my-12">
            {milestones.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                >
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 ${item.active ? 'bg-neon-purple border-neon-purple shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'bg-black border-white/20'}`} />

                    <span className={`text-sm font-mono mb-1 block ${item.active ? 'text-neon-purple' : 'text-gray-500'}`}>
                        {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed max-w-lg">
                        {item.desc}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default AboutTimeline;
