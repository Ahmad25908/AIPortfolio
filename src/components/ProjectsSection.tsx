// PROJECTS REBUILT – Triple-threat showcase (SaaS + AI Agents + Web Dev) – 100% Gemini AntiGravity

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


type ProjectCategory = "all" | "saas" | "agents" | "web";

interface Project {
    id: number;
    title: string;
    category: ProjectCategory;
    description: string;
    liveLink?: string;
    image: string;
    techStack: string[];
    metric: string;
    aiBuilt: string;
    featured?: boolean;
}

const projects: Project[] = [
    // AI-Native SaaS Products (2 projects)
    {
        id: 1,
        title: "IELTS AI Coach",
        category: "saas",
        description: "Live AI-powered IELTS speaking coach with real-time feedback, band score prediction, and multilingual support",
        liveLink: "https://ielts.ahmadhassan.ai",
        image: "/projects/ielts-coach.png",
        techStack: ["Next.js 15", "Gemini API", "Web Speech API", "Supabase", "Tailwind"],
        metric: "$2.4k MRR potential",
        aiBuilt: "90% built by Gemini AntiGravity",
        featured: true
    },
    {
        id: 2,
        title: "Freelance Proposal Autopilot",
        category: "saas",
        description: "AI agent that writes winning Upwork proposals automatically. Analyzes job posts and generates personalized pitches",
        image: "/projects/proposal-autopilot.png",
        techStack: ["Next.js", "OpenAI GPT-4", "n8n", "Supabase"],
        metric: "85% time saved",
        aiBuilt: "85% built by Gemini AntiGravity"
    },

    // AI Agent & Autonomous Systems (2 projects)
    {
        id: 3,
        title: "CloseBot - Real Estate Agent",
        category: "agents",
        description: "Autonomous AI agent that handles entire house sale process: scheduling, paperwork, negotiations, and closing",
        image: "/projects/closebot.png",
        techStack: ["OpenAI Agents SDK", "n8n", "Supabase", "Twilio"],
        metric: "Full automation",
        aiBuilt: "75% built by Gemini AntiGravity",
        featured: true
    },
    {
        id: 4,
        title: "Multi-Agent RAG System",
        category: "agents",
        description: "Panaversity-style intelligent system. Generates mock tests, analyzes past papers, and provides personalized learning paths",
        image: "/projects/rag-system.png",
        techStack: ["Gemini API", "LangChain", "Pinecone", "Next.js"],
        metric: "5000+ students",
        aiBuilt: "85% built by Gemini AntiGravity"
    },

    // Premium Web Development (2 projects)
    {
        id: 5,
        title: "Dubai Corporate Website",
        category: "web",
        description: "Premium corporate website for Dubai client. Next.js 15 with Sanity CMS, Framer Motion animations, and Arabic support",
        image: "/projects/dubai-corporate.png",
        techStack: ["Next.js 15", "Sanity CMS", "Framer Motion", "Tailwind"],
        metric: "$9k client project",
        aiBuilt: "75% built by Gemini AntiGravity",
        featured: true
    },
    {
        id: 6,
        title: "Freelancer Portfolio Sites",
        category: "web",
        description: "Premium portfolio websites for other freelancers. Custom designs, fast loading, and conversion-optimized",
        image: "/projects/portfolio-service.png",
        techStack: ["Next.js 15", "Tailwind", "Framer Motion", "Vercel"],
        metric: "100/100 Lighthouse",
        aiBuilt: "85% built by Gemini AntiGravity"
    }
];

const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const categories = [
        { id: "all" as ProjectCategory, label: "All Projects", count: projects.length },
        { id: "saas" as ProjectCategory, label: "AI-Native SaaS", count: projects.filter(p => p.category === "saas").length },
        { id: "agents" as ProjectCategory, label: "AI Agents", count: projects.filter(p => p.category === "agents").length },
        { id: "web" as ProjectCategory, label: "Web Development", count: projects.filter(p => p.category === "web").length }
    ];

    return (
        <section id="projects" className="relative w-full py-16 md:py-24 bg-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                        I Build Three Types of Million-Dollar Systems
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
                        SaaS that makes money · Agents that replace humans · Websites that convert
                    </p>
                </motion.div>

                {/* Category Filter Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat.id
                                ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            {cat.label} <span className="text-xs opacity-70">({cat.count})</span>
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                onClick={() => setSelectedProject(project)}
                                className="relative group cursor-pointer"
                            >
                                {/* Card */}
                                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-3xl border border-purple-500/20 hover:border-cyan-500/40 transition-all duration-300 p-5 h-full">
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-3 right-3 px-2 py-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-[10px] font-bold text-black uppercase tracking-wide">
                                            Featured
                                        </div>
                                    )}

                                    {/* Project Image Placeholder */}
                                    <div className="w-full h-40 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg mb-4 flex items-center justify-center text-5xl">
                                        {project.category === "saas" ? "💰" : project.category === "agents" ? "🤖" : "🌐"}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="px-2 py-1 bg-white/5 text-gray-400 rounded text-xs">
                                                +{project.techStack.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Metric */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-white font-semibold text-sm">{project.metric}</span>
                                    </div>

                                    {/* AI Built Badge */}
                                    <div className="text-xs text-purple-400 font-semibold">
                                        ⚡ {project.aiBuilt}
                                    </div>

                                    {/* Live Link */}
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="mt-4 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
                                        >
                                            View Live
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-cyan-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300 pointer-events-none" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Project Lightbox Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/50 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Project Details */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>

                                    {/* Large Image Placeholder */}
                                    <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center text-9xl">
                                        {selectedProject.category === "saas" ? "💰" : selectedProject.category === "agents" ? "🤖" : "🌐"}
                                    </div>

                                    <p className="text-gray-300 text-lg">{selectedProject.description}</p>

                                    {/* Full Tech Stack */}
                                    <div>
                                        <h3 className="text-white font-semibold mb-3">Tech Stack:</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techStack.map((tech, i) => (
                                                <span key={i} className="px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Metrics */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-white font-semibold">{selectedProject.metric}</span>
                                        </div>
                                        <div className="text-purple-400 font-semibold">
                                            ⚡ {selectedProject.aiBuilt}
                                        </div>
                                    </div>

                                    {/* Live Link */}
                                    {selectedProject.liveLink && (
                                        <a
                                            href={selectedProject.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all"
                                        >
                                            Visit Live Project
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ProjectsSection;
