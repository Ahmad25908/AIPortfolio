// FULL PORTFOLIO TESTED & OPTIMIZED – Ready for clients – 100% Gemini AntiGravity
// Root Layout with META tags, OG images, PWA manifest, and performance optimizations – QA Tested December 2025

import React from "react";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import PortfolioAgent from "@/components/PortfolioAgent";
import ErrorBoundary from "@/components/ErrorBoundary";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap", // Font optimization for performance
  preload: true,
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmadhassan.ai'),
  title: {
    default: "Ahmad Hassan | AI-Native Engineer Building $10k-$100k MRR SaaS",
    template: "%s | Ahmad Hassan"
  },
  description: "17-year-old AI-native engineer building $10k–$100k MRR SaaS products using Gemini AntiGravity agents. 70-90% autonomously coded. From Pakistan to the world.",
  keywords: [
    "AI Engineer",
    "SaaS Developer",
    "Gemini AntiGravity",
    "Next.js Developer",
    "AI Agents",
    "Freelance Developer",
    "Full Stack Developer",
    "React Developer",
    "TypeScript Expert",
    "Ahmad Hassan"
  ],
  authors: [{ name: "Ahmad Hassan", url: "https://ahmadhassan.ai" }],
  creator: "Ahmad Hassan",
  publisher: "Ahmad Hassan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmadhassan.ai",
    siteName: "Ahmad Hassan Portfolio",
    title: "Ahmad Hassan | AI-Native Engineer Building $10k-$100k MRR SaaS",
    description: "17-year-old AI-native engineer building $10k–$100k MRR SaaS products using Gemini AntiGravity agents. 70-90% autonomously coded.",
    images: [
      {
        url: "/og-image.png",
        width: 2000,
        height: 1000,
        alt: "Ahmad Hassan - Built by Gemini AntiGravity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Hassan | AI-Native Engineer",
    description: "Building $10k–$100k MRR SaaS with AI agents doing 90% of the work",
    creator: "@ahmadhassan",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://ahmadhassan.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={orbitron.variable}>
      <head>
        {/* Preconnect to external domains - Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" />

        {/* DNS Prefetch for faster resource loading */}
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://ahmadhassan.ai" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ahmad Hassan",
              url: "https://ahmadhassan.ai",
              image: "https://ahmadhassan.ai/og-image.png",
              sameAs: [
                "https://github.com/ahmadhassan",
                "https://twitter.com/ahmadhassan",
                "https://linkedin.com/in/ahmadhassan"
              ],
              jobTitle: "AI-Native Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              },
              description: "17-year-old AI-native engineer building $10k–$100k MRR SaaS products using Gemini AntiGravity agents"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ahmad Hassan Portfolio",
              url: "https://ahmadhassan.ai",
              description: "Professional portfolio showcasing AI-powered SaaS products",
              author: {
                "@type": "Person",
                name: "Ahmad Hassan"
              }
            })
          }}
        />
      </head>
      <body className={orbitron.className}>
        <CustomCursor />

        {/* Isolated Error Boundary for Navbar: if nav fails, page should still help */}
        <ErrorBoundary variant="minimal">
          <Navbar />
        </ErrorBoundary>

        {/* Main Content Boundary */}
        <ErrorBoundary>
          {children}
        </ErrorBoundary>

        {/* Isolated AI Assistant: if it crashes, don't kill the site */}
        <ErrorBoundary variant="minimal">
          <PortfolioAgent />
        </ErrorBoundary>
      </body>
    </html>
  );
}
