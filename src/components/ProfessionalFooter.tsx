// Professional Footer – Built by Gemini AntiGravity

"use client";

import { motion } from "framer-motion";

const ProfessionalFooter = () => {
    return (
        <footer className="relative w-full py-12 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 text-sm">
                            © 2025 <span className="text-white font-semibold">Ahmad Hassan</span>
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            All rights reserved
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center space-y-2">
                        <a
                            href="tel:+923244109392"
                            className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                        >
                            +92 324 4109392
                        </a>
                        <span className="text-gray-600">•</span>
                        <a
                            href="mailto:ahmadhassan41093@gmail.com"
                            className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
                        >
                            ahmadhassan41093@gmail.com
                        </a>
                    </div>

                    {/* Location & Credit */}
                    <div className="text-center md:text-right space-y-1">
                        <p className="text-gray-400 text-sm">
                            Pakistan • <span className="text-cyan-400">Available Worldwide</span>
                        </p>
                        <p className="text-gray-500 text-xs">
                            Built 100% by{" "}
                            <span className="text-purple-400 font-semibold">Gemini AntiGravity</span> agents
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-xs"
                    >
                        Turning ideas into profitable products since 2020 • Full-Stack • AI Agents • Prompt Engineering
                    </motion.p>
                </div>
            </div>
        </footer>
    );
};

export default ProfessionalFooter;
