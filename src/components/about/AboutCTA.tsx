"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const AboutCTA = () => {
    return (
        <section className="mt-20 pt-10 border-t border-white/10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Ready to scale your vision?
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                    Let&apos;s build something extraordinary together
                </p>

                <motion.a
                    href="https://calendly.com/ahmadhassan41093/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block w-full md:w-auto px-10 py-5 bg-gradient-to-r from-neon-purple via-pink-500 to-neon-cyan text-white font-bold text-xl rounded-full shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 animate-gradient"
                >
                    Book Free 15-Min Audit Call →
                </motion.a>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                    <Link href="https://wa.me/923244109392" className="hover:text-neon-cyan transition-colors">
                        WhatsApp
                    </Link>
                    <span>•</span>
                    <Link href="mailto:ahmadhassan41093@gmail.com" className="hover:text-neon-cyan transition-colors">
                        Email
                    </Link>
                    <span>•</span>
                    <Link href="https://linkedin.com" className="hover:text-neon-cyan transition-colors">
                        LinkedIn
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutCTA;
