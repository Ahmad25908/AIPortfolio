// ALL HYDRATION ISSUES FIXED – Runs perfectly on localhost – 100% Gemini AntiGravity 2025
"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
}

const TypewriterText = ({ text, speed = 50, delay = 0, className = "" }: TypewriterTextProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [isComplete, setIsComplete] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Mount detection to prevent hydration issues
    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        // Cursor blink effect
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, [isMounted]);

    useEffect(() => {
        if (!isMounted) return;

        if (currentIndex >= text.length) {
            setTimeout(() => setIsComplete(true), 0);
            return;
        }

        const timeout = setTimeout(
            () => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            },
            currentIndex === 0 ? delay : speed
        );

        return () => clearTimeout(timeout);
    }, [currentIndex, text, speed, delay, isMounted]);

    // Render static text on server to prevent hydration mismatch
    if (!isMounted) {
        return <span className={className}>{text}</span>;
    }

    return (
        <span className={className}>
            {displayedText}
            <span
                className="inline-block ml-1 w-0.5 h-[1em] align-middle transition-opacity duration-100"
                style={{
                    background: "linear-gradient(to bottom, #A855F7, #22D3EE)",
                    boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
                    opacity: showCursor && !isComplete ? 1 : 0,
                }}
            />
        </span>
    );
};

export default TypewriterText;
