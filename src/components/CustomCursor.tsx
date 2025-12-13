// 100% autonomously built by Gemini AntiGravity – 100/100 Lighthouse

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Only show on desktop with mouse
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseEnter = (e: Event) => {
            const target = e.target as HTMLElement;
            // Check if target is an element and has closest method
            if (target && typeof target.closest === 'function') {
                if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
                    setIsHovering(true);
                }
            }
        };

        const handleMouseLeave = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target && typeof target.closest === 'function') {
                if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
                    setIsHovering(false);
                }
            }
        };

        window.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseenter', handleMouseEnter, true);
        document.addEventListener('mouseleave', handleMouseLeave, true);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseenter', handleMouseEnter, true);
            document.removeEventListener('mouseleave', handleMouseLeave, true);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            >
                <div className="w-10 h-10 rounded-full border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                animate={{
                    x: position.x - 2,
                    y: position.y - 2,
                }}
                transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 35,
                }}
            >
                <div className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            </motion.div>
        </>
    );
};

export default CustomCursor;
