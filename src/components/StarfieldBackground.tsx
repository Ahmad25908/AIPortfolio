// FINAL MOST PROFESSIONAL HERO – Exactly like the screenshot – Client-magnet 2025 – 100% Gemini AntiGravity
"use client";

import { useEffect, useRef, useState } from "react";

const StarfieldBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setPrefersReducedMotion(mediaQuery.matches);
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || prefersReducedMotion) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Starfield particle system - very low density
        interface Star {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            opacity: number;
            twinkle: number;
        }

        const stars: Star[] = [];
        const starCount = 30; // Very low density for professional look
        const colors = ["#A855F7", "#22D3EE"]; // Purple and cyan

        // Initialize stars
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.15, // Very slow drift
                vy: (Math.random() - 0.5) * 0.15,
                size: Math.random() * 2 + 0.5, // Very small stars
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: Math.random() * 0.12, // Max opacity 0.12
                twinkle: Math.random() * Math.PI * 2,
            });
        }

        let animationFrameId: number;

        const animate = () => {
            // Check if canvas context is still valid/attached
            if (!canvas.isConnected) return;

            // Clear with very slight fade
            ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
            ctx.fillRect(0, 0, width, height);

            // Draw ambient orbs for atmospheric depth
            // Large purple orb - top right area
            const gradient1 = ctx.createRadialGradient(width * 0.75, height * 0.2, 0, width * 0.75, height * 0.2, 300);
            gradient1.addColorStop(0, "rgba(168, 85, 247, 0.08)");
            gradient1.addColorStop(1, "transparent");
            ctx.fillStyle = gradient1;
            ctx.fillRect(0, 0, width, height);

            // Large cyan orb - bottom left area
            const gradient2 = ctx.createRadialGradient(width * 0.25, height * 0.8, 0, width * 0.25, height * 0.8, 250);
            gradient2.addColorStop(0, "rgba(34, 211, 238, 0.06)");
            gradient2.addColorStop(1, "transparent");
            ctx.fillStyle = gradient2;
            ctx.fillRect(0, 0, width, height);

            // Update and draw stars
            stars.forEach((star) => {
                // Update position
                star.x += star.vx;
                star.y += star.vy;

                // Wrap around edges
                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;

                // Twinkle effect
                star.twinkle += 0.01;
                const twinkleAlpha = (Math.sin(star.twinkle) + 1) / 2;

                // Draw star with subtle glow
                ctx.save();
                ctx.filter = "blur(6px)";
                ctx.globalAlpha = star.opacity * twinkleAlpha;
                ctx.fillStyle = star.color;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                // Draw star center (sharper point)
                ctx.save();
                ctx.globalAlpha = star.opacity * twinkleAlpha * 1.5;
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * 0.4, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(animate);
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
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [prefersReducedMotion]);

    if (prefersReducedMotion) {
        return null;
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

export default StarfieldBackground;
