// FINAL VERSION – Professional photo, real phone + email added – Ready for clients

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles: Array<{
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
        }> = [];

        for (let i = 0; i < 40; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 5 + 2,
                speedX: (Math.random() - 0.5) * 0.4,
                speedY: (Math.random() - 0.5) * 0.4,
                opacity: Math.random() * 0.4 + 0.2
            });
        }

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, width, height);

            particles.forEach(particle => {
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 5
                );
                gradient.addColorStop(0, `rgba(168, 85, 247, ${particle.opacity})`);
                gradient.addColorStop(0.5, `rgba(236, 72, 153, ${particle.opacity * 0.5})`);
                gradient.addColorStop(1, "rgba(168, 85, 247, 0)");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 5, 0, Math.PI * 2);
                ctx.fill();

                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < 0) particle.x = width;
                if (particle.x > width) particle.x = 0;
                if (particle.y < 0) particle.y = height;
                if (particle.y > height) particle.y = 0;
            });
        };

        let animationId: number;
        const animate = () => {
            draw();
            animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section id="book-call" className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center py-24 md:py-40 overflow-hidden">
            {/* Nebula Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 opacity-50"
            />

            {/* Gradient Overlays */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block mb-8"
                >
                    <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-full">
                        <span className="text-purple-300 font-semibold text-sm md:text-base tracking-wider">
                            🚀 LIMITED AVAILABILITY
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 inline-block"
                        style={{
                            textShadow: "0 0 100px rgba(168, 85, 247, 0.4)"
                        }}
                    >
                        Let&apos;s build your
                        <br />
                        $10k+ MRR product
                    </span>
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed font-light"
                >
                    Let&apos;s build your <span className="text-purple-400 font-semibold">$10k–$100k MRR SaaS</span> with AI agents doing <span className="text-cyan-400 font-semibold">90% of the work</span>
                </motion.p>

                {/* Main CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                >
                    <button
                        onClick={() => {
                            document.getElementById('calendly-embed')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative px-12 py-7 md:px-16 md:py-9 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl font-bold text-white text-xl md:text-3xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_0_80px_rgba(168,85,247,0.5)] hover:shadow-[0_0_120px_rgba(168,85,247,0.8)] bg-[length:200%_100%] hover:bg-right"
                        style={{
                            backgroundPosition: 'left'
                        }}
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <span className="relative z-10 flex items-center justify-center gap-4">
                            <span className="text-3xl">📅</span>
                            <span>Book Free 15-Min SaaS Audit</span>
                        </span>
                    </button>
                </motion.div>

                {/* Urgency Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mb-20"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg md:text-xl">
                        <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span>Only 3 spots left this month</span>
                        </div>
                        <div className="hidden md:block text-gray-600">•</div>
                        <div className="text-purple-400 font-semibold">
                            Response in &lt;6 hours
                        </div>
                    </div>
                </motion.div>

                {/* Contact Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                    {/* Email Card */}
                    <a
                        href="mailto:ahmadhassan41093@gmail.com"
                        className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(168,85,247,0.1)]"
                    >
                        <div className="text-5xl mb-4">📧</div>
                        <div className="text-gray-400 text-sm mb-2">Email</div>
                        <div className="text-white font-semibold text-sm md:text-base break-all group-hover:text-purple-400 transition-colors">
                            ahmadhassan41093@gmail.com
                        </div>
                    </a>

                    {/* Phone/WhatsApp Card */}
                    <a
                        href="tel:+923244109392"
                        className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                    >
                        <div className="text-5xl mb-4">📱</div>
                        <div className="text-gray-400 text-sm mb-2">Phone / WhatsApp</div>
                        <div className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                            +92 324 4109392
                        </div>
                    </a>

                    {/* Response Time Card */}
                    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-pink-500/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(236,72,153,0.1)]">
                        <div className="text-5xl mb-4">⚡</div>
                        <div className="text-gray-400 text-sm mb-2">Response Time</div>
                        <div className="text-white font-semibold text-lg">
                            I reply in under 6 hours
                        </div>
                    </div>
                </motion.div>

                {/* WhatsApp Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="mb-12"
                >
                    <a
                        href="https://wa.me/923244109392?text=Hi%20Ahmad!%20I%27d%20like%20to%20discuss%20a%20SaaS%20project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20BA5A] rounded-2xl text-white font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)]"
                    >
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Message on WhatsApp
                    </a>
                </motion.div>

                {/* Calendly Embed */}
                <motion.div
                    id="calendly-embed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-purple-500/20 rounded-3xl p-10 md:p-16 shadow-[0_0_60px_rgba(168,85,247,0.1)]"
                >
                    <div className="text-gray-400 text-center">
                        <div className="text-7xl md:text-8xl mb-6 opacity-50">📆</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Book Free 15-Min Audit Call
                        </h3>
                        <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                            Let&apos;s discuss your SaaS project and how AI agents can build it 10x faster
                        </p>
                        <a
                            href="https://calendly.com/ahmadhassan41093/15min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-2xl text-white font-bold text-xl transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] animate-pulse"
                        >
                            📅 Book Free 15-Min Audit Call
                        </a>
                        <p className="text-xs text-gray-500 mt-6">
                            Available worldwide • Timezone flexible • Usually responds in under 6 hours
                        </p>
                    </div>
                </motion.div>

                {/* Trust Signals & Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                    className="mt-16 space-y-8"
                >
                    {/* Professional Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full">
                            <span className="text-green-400 font-semibold text-sm flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Verified Pakistani Freelancer
                            </span>
                        </div>
                        <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-full">
                            <span className="text-purple-400 font-semibold text-sm flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                100% Job Success • Top Rated on Upwork
                            </span>
                        </div>
                    </div>

                    {/* Trust Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl mb-3">⚡</div>
                            <div className="text-gray-400 text-sm">Fast turnaround with AI agents</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">💰</div>
                            <div className="text-gray-400 text-sm">$5k–$25k project range</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">🎯</div>
                            <div className="text-gray-400 text-sm">100/100 Lighthouse scores</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="relative z-10 mt-24 text-center space-y-3"
            >
                <div className="text-gray-600 text-sm md:text-base font-semibold">
                    © 2025 Ahmad Hassan
                </div>
                <div className="text-gray-500 text-xs md:text-sm space-y-1">
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                        <a href="tel:+923244109392" className="hover:text-purple-400 transition-colors">
                            +92 324 4109392
                        </a>
                        <span className="text-gray-700">•</span>
                        <a href="mailto:ahmadhassan41093@gmail.com" className="hover:text-purple-400 transition-colors">
                            ahmadhassan41093@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                        <span>Available worldwide</span>
                        <span className="text-gray-700">•</span>
                        <span>Built 100% by Gemini AntiGravity agents</span>
                    </div>
                </div>
            </motion.footer>
        </section>
    );
};

export default FinalCTA;
