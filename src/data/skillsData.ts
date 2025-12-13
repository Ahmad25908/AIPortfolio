// 100% autonomously built by Gemini AntiGravity – 100/100 Lighthouse

export interface Skill {
    id: number;
    name: string;
    percentage: number;
    description: string;
    color: string;
    icon: string;
}

export const skillsData: Skill[] = [
    {
        id: 1,
        name: "Next.js 15",
        percentage: 98,
        description: "Server components, streaming SSR, and App Router mastery",
        color: "#A855F7",
        icon: "nextjs"
    },
    {
        id: 2,
        name: "TypeScript",
        percentage: 96,
        description: "Type-safe architectures with advanced generics and utility types",
        color: "#22D3EE",
        icon: "typescript"
    },
    {
        id: 3,
        name: "Tailwind",
        percentage: 99,
        description: "Custom design systems with Tailwind v4 and CSS variables",
        color: "#A855F7",
        icon: "tailwind"
    },
    {
        id: 4,
        name: "Supabase",
        percentage: 95,
        description: "Real-time databases, auth, and type-safe ORM patterns",
        color: "#22D3EE",
        icon: "database"
    },
    {
        id: 5,
        name: "Gemini AI",
        percentage: 97,
        description: "AI-powered autonomous coding agents for rapid development",
        color: "#A855F7",
        icon: "ai"
    },
    {
        id: 6,
        name: "FastAPI",
        percentage: 88,
        description: "High-performance async APIs with Pydantic validation",
        color: "#22D3EE",
        icon: "python"
    },
    {
        id: 7,
        name: "OpenAI",
        percentage: 94,
        description: "GPT-4, embeddings, function calling, and streaming responses",
        color: "#A855F7",
        icon: "openai"
    },
    {
        id: 8,
        name: "Prompts",
        percentage: 97,
        description: "Chain-of-thought, few-shot learning, and system prompt optimization",
        color: "#22D3EE",
        icon: "prompt"
    },
    {
        id: 9,
        name: "AI Agents",
        percentage: 75,
        description: "Multi-agent systems, tool use, and autonomous task execution",
        color: "rainbow",
        icon: "agents"
    }
];
