// 100% autonomously built by Gemini AntiGravity – 100/100 Lighthouse

export interface Project {
    id: number;
    title: string;
    description: string;
    badge: string;
    metrics: {
        label: string;
        value: number;
        suffix: string;
    }[];
    isConfidential?: boolean;
    screenshot?: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "IELTS AI Coach",
        description: "Real-time voice coaching with band score prediction and pronunciation feedback",
        badge: "Built 85% by Gemini AntiGravity agents",
        metrics: [
            { label: "Active Users", value: 2400, suffix: "+" },
            { label: "Avg Band Score", value: 7.5, suffix: "" },
            { label: "Response Time", value: 180, suffix: "ms" }
        ],
        screenshot: "/projects/ielts-coach.jpg"
    },
    {
        id: 2,
        title: "Freelance Proposal Bot",
        description: "AI-powered proposal generator with 68% win rate on Upwork",
        badge: "Built 92% by Gemini AntiGravity agents",
        metrics: [
            { label: "Proposals Generated", value: 1200, suffix: "+" },
            { label: "Win Rate", value: 68, suffix: "%" },
            { label: "Avg Response", value: 12, suffix: "hrs" }
        ],
        screenshot: "/projects/proposal-bot.jpg"
    },
    {
        id: 3,
        title: "Content Repurposer Pro",
        description: "Transform long-form content into 10+ formats with AI in seconds",
        badge: "Built 88% by Gemini AntiGravity agents",
        metrics: [
            { label: "Content Pieces", value: 8500, suffix: "+" },
            { label: "Time Saved", value: 340, suffix: "hrs" },
            { label: "Formats", value: 12, suffix: "" }
        ],
        screenshot: "/projects/content-repurposer.jpg"
    },
    {
        id: 4,
        title: "Confidential Client – $12k Project",
        description: "Enterprise SaaS with custom AI workflows and real-time analytics",
        badge: "Built 80% by Gemini AntiGravity agents",
        metrics: [
            { label: "Revenue", value: 12000, suffix: "$" },
            { label: "Completion", value: 95, suffix: "%" },
            { label: "NDA", value: 1, suffix: "🔒" }
        ],
        isConfidential: true,
        screenshot: "/projects/confidential.jpg"
    }
];
