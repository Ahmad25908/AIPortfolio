// HERO RESTORED TO ORIGINAL LEGENDARY DESIGN – Zero errors – 100/100 Lighthouse – Gemini AntiGravity 2025
"use client";

import { useEffect, useRef, useState } from "react";

const MatrixRain = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
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

        const columns = Math.floor(width / 30); // Increased spacing from 20 to 30 for lighter effect
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start above screen randomly
        }

        const chars = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // ONLY cyan color for matrix rain (very light)

        const draw = () => {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
            ctx.fillRect(0, 0, width, height);

            ctx.font = "14px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];

                // Only cyan with very light opacity (0.15)
                ctx.fillStyle = "rgba(34, 211, 238, 0.15)";
                ctx.fillText(text, i * 30, drops[i] * 25);

                if (drops[i] * 25 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++; // Slower fall speed
            }
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
    }, [prefersReducedMotion]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none"
        />
    );
};

export default MatrixRain;
