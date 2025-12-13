"use client";

import { motion } from "framer-motion";

const stats = [
    {
        label: "Age / Location",
        value: "17 · Pakistan",
        color: "from-neon-purple to-blue-500",
    },
    {
        label: "Project Rate",
        value: "$5k – $25k",
        color: "from-neon-cyan to-emerald-400",
    },
    {
        label: "Availability",
        value: "3 Spots Left",
        sub: "Response < 6hrs",
        color: "from-pink-500 to-rose-500",
    },
];

const AboutStats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color}`} />

                    <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">{stat.label}</h3>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    {stat.sub && <p className="text-xs text-neon-cyan mt-2 font-semibold">{stat.sub}</p>}
                </motion.div>
            ))}
        </div>
    );
};

export default AboutStats;
