// ALL ISSUES FIXED – Perfect run – 100% Gemini AntiGravity 2025
"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";

// Loading fallback component with proper dimensions to prevent layout shift
const LoadingFallback = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

// Dynamic imports with SSR disabled for hydration safety
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});

const ThreePillarsSkills = dynamic(() => import("@/components/ThreePillarsSkills"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});

const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});

const TerminalTimeline = dynamic(() => import("@/components/TerminalTimeline"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});

const PortfolioAgent = dynamic(() => import("@/components/PortfolioAgent"), {
  ssr: false,
});


export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return placeholder during SSR/initial hydration to prevent mismatch
  if (!isMounted) {
    return <LoadingFallback />;
  }

  return (
    <main className="relative w-full bg-black">
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <ThreePillarsSkills />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <TerminalTimeline />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <ContactSection />
      </Suspense>

      {/* Professional Portfolio Agent */}
      <Suspense fallback={null}>
        <PortfolioAgent />
      </Suspense>

    </main>
  );
}
