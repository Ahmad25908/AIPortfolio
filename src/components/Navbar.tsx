// FINAL VERSION – Professional navbar with prefetching – Optimized for instant navigation

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", id: "hero", href: "/", isRoute: true },
        { name: "About", id: "about", href: "/about", isRoute: true },
        { name: "Skills", id: "skills", href: "/#skills", isRoute: false },
        { name: "Projects", id: "projects", href: "/#projects", isRoute: false },
        { name: "Timeline", id: "timeline", href: "/#timeline", isRoute: false },
        { name: "Contact", id: "book-call", href: "/#book-call", isRoute: false },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-black/80 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)]"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo / Name */}
                    <Link href="/" prefetch={true}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center cursor-pointer"
                        >
                            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Ahmad Hassan
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            link.isRoute ? (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    prefetch={true}
                                    className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium relative group ${pathname === link.href ? 'text-white' : ''
                                        }`}
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            ) : (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            )
                        ))}
                    </div>

                    {/* Contact Buttons - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="tel:+923244109392"
                            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="hidden lg:inline">+92 324 4109392</span>
                        </a>
                        <a
                            href="https://calendly.com/ahmadhassan41093/15min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                        >
                            Book Call
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                link.isRoute ? (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        prefetch={true}
                                        className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2 border-b border-white/5 last:border-0"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.id}
                                        href={link.href}
                                        className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2 border-b border-white/5 last:border-0"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}
                            <div className="pt-4 space-y-3">
                                <a
                                    href="tel:+923244109392"
                                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    +92 324 4109392
                                </a>
                                <a
                                    href="mailto:ahmadhassan41093@gmail.com"
                                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    ahmadhassan41093@gmail.com
                                </a>
                                <a
                                    href="https://calendly.com/ahmadhassan41093/15min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-semibold text-sm transition-all duration-300"
                                >
                                    Book Free Call
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
