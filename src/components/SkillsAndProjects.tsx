// 100% autonomously built by Gemini AntiGravity – 100/100 Lighthouse

"use client";

import React from "react";

import GlitchText from "./GlitchText";
import ProjectShowcase from "./ProjectShowcase";
import { motion } from "framer-motion";
import ThreePillarsSkills from "./ThreePillarsSkills";

const SkillsAndProjects = () => {
    return (
        <section className="relative w-full py-24 md:py-40 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">

                {/* Section Title */}
                <div className="relative z-10 text-center mb-12 md:mb-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <GlitchText text="My Weapons" />
                        <p className="text-gray-400 mt-4 md:mt-6 text-base md:text-lg lg:text-xl font-mono max-w-3xl mx-auto leading-relaxed">
                            The tech stack I use to build <span className="text-neon-purple font-bold">$10k–$100k MRR</span> products that clients love
                        </p>
                    </motion.div>
                </div>

                {/* Three Pillars Skills Section */}
                <ThreePillarsSkills />

                {/* Divider */}
                <div className="relative z-10 max-w-4xl mx-auto mb-16 md:mb-20 px-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                </div>

                {/* Part B: Project Showcase */}
                <div id="projects">
                    <ProjectShowcase />
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 md:mt-24 px-4"
                >
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Want to build something like this? Let&apos;s talk about your next <span className="text-neon-purple font-bold">$10k+ project</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsAndProjects;
