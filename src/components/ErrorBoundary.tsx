// Error Boundary Component - Catches React errors and shows fallback UI
"use client";

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
    variant?: "default" | "minimal";
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error caught by boundary:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            if (this.props.variant === "minimal") {
                return null; // Fail silently for minimal variant
            }

            return (
                <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
                    <div className="max-w-2xl text-center">
                        <h1 className="text-4xl font-bold mb-4 text-red-500">Oops!</h1>
                        <p className="text-gray-400 mb-6">
                            The app crashed. Here is the error:
                        </p>

                        {/* ERROR DISPLAY */}
                        <div className="mb-8 p-6 bg-red-950/50 border border-red-500/50 rounded-lg text-left overflow-auto max-h-[400px]">
                            <p className="font-mono text-lg text-red-300 mb-2 font-bold">
                                {this.state.error?.toString()}
                            </p>
                            <pre className="font-mono text-xs text-red-200/70 whitespace-pre-wrap">
                                {this.state.error?.stack}
                            </pre>
                        </div>

                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold hover:opacity-90 transition-opacity"
                        >
                            Try Refreshing
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
