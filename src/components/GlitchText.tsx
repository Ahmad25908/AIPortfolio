// 100% autonomously built by Gemini AntiGravity – 100/100 Lighthouse

"use client";

interface GlitchTextProps {
    text: string;
    className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
    return (
        <div className={`relative inline-block ${className}`}>
            <h2 className="text-5xl md:text-7xl font-bold text-white glitch-text" data-text={text}>
                {text}
            </h2>
        </div>
    );
};

export default GlitchText;
