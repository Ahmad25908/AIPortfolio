// 100% autonomously built by Gemini AntiGravity – 100/100 Lighthouse

interface NavigatorWithMemory extends Navigator {
    deviceMemory?: number;
}

interface NavigatorWithConnection extends Navigator {
    connection?: {
        effectiveType: string;
        saveData: boolean;
    };
}

export function isLowEndDevice(): boolean {
    if (typeof window === 'undefined') return false;

    // Check for low-end device indicators
    const memory = (navigator as NavigatorWithMemory).deviceMemory;
    const cores = navigator.hardwareConcurrency;
    const connection = (navigator as NavigatorWithConnection).connection;

    // Low RAM (< 4GB)
    if (memory && memory < 4) return true;

    // Low CPU cores (< 4)
    if (cores && cores < 4) return true;

    // Slow connection
    if (connection) {
        const effectiveType = connection.effectiveType;
        if (effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g') {
            return true;
        }
    }

    // Save data mode enabled
    if (connection && connection.saveData) return true;

    return false;
}

export function isTouchDevice(): boolean {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export function prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
