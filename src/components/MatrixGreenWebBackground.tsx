// MATRIX-GREEN SPIDER WEB GRID – The original "makri ka jala" background is back – Ultra clean, fast, zero errors
"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Spider Web Grid Component
const SpiderWebGrid = () => {
    const linesRef = useRef<THREE.LineSegments>(null);
    const particlesRef = useRef<THREE.Points>(null);
    const timeRef = useRef(0);

    useFrame((state) => {
        timeRef.current = state.clock.elapsedTime;

        if (linesRef.current) {
            // Gentle rotation for 3D depth effect
            linesRef.current.rotation.x = Math.sin(timeRef.current * 0.05) * 0.1;
            linesRef.current.rotation.y += 0.0005;

            // Breathing pulse effect (opacity variation)
            const breathingIntensity = 0.25 + Math.sin(timeRef.current * 0.5) * 0.1;
            if (linesRef.current.material instanceof THREE.LineBasicMaterial) {
                linesRef.current.material.opacity = breathingIntensity;
            }
        }

        if (particlesRef.current) {
            // Gentle particle glow pulse
            particlesRef.current.rotation.y += 0.0003;
            if (particlesRef.current.material instanceof THREE.PointsMaterial) {
                particlesRef.current.material.opacity = 0.6 + Math.sin(timeRef.current * 0.8) * 0.2;
            }
        }
    });

    // Create 3D spider web grid with lines
    const [geometry, setGeometry] = useState<{ gridLines: THREE.BufferGeometry; gridParticles: THREE.BufferGeometry } | null>(null);

    useEffect(() => {
        const positions: number[] = [];
        const particlePositions: number[] = [];

        const size = 40; // Grid size
        const divisions = 25; // Grid divisions (creates web density)
        const step = size / divisions;

        // Create horizontal and vertical lines (XY plane)
        for (let i = 0; i <= divisions; i++) {
            const pos = -size / 2 + i * step;

            // Horizontal lines
            positions.push(-size / 2, pos, 0);
            positions.push(size / 2, pos, 0);

            // Vertical lines
            positions.push(pos, -size / 2, 0);
            positions.push(pos, size / 2, 0);
        }

        // Create depth lines (Z-axis connections for 3D spider web effect)
        for (let i = 0; i <= divisions; i += 3) {
            for (let j = 0; j <= divisions; j += 3) {
                const x = -size / 2 + i * step;
                const y = -size / 2 + j * step;

                positions.push(x, y, -10);
                positions.push(x, y, 10);
            }
        }

        // Create diagonal web connections for spider web effect
        for (let i = 0; i < divisions; i += 4) {
            for (let j = 0; j < divisions; j += 4) {
                const x1 = -size / 2 + i * step;
                const y1 = -size / 2 + j * step;
                const x2 = -size / 2 + (i + 4) * step;
                const y2 = -size / 2 + (j + 4) * step;

                positions.push(x1, y1, 0);
                positions.push(x2, y2, 0);

                positions.push(x1, y2, 0);
                positions.push(x2, y1, 0);
            }
        }

        // Create glowing nodes at intersections
        for (let i = 0; i <= divisions; i += 2) {
            for (let j = 0; j <= divisions; j += 2) {
                const x = -size / 2 + i * step;
                const y = -size / 2 + j * step;
                const z = (Math.random() - 0.5) * 5; // Random z-depth for nodes

                particlePositions.push(x, y, z);
            }
        }

        const newGridLines = new THREE.BufferGeometry();
        newGridLines.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        const newGridParticles = new THREE.BufferGeometry();
        newGridParticles.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setGeometry({ gridLines: newGridLines, gridParticles: newGridParticles });
    }, []);

    if (!geometry) return null;
    const { gridLines, gridParticles } = geometry;

    return (
        <>
            {/* Spider web grid lines */}
            <lineSegments ref={linesRef} geometry={gridLines}>
                <lineBasicMaterial
                    color="#00ff41"  // Matrix neon green
                    transparent
                    opacity={0.25}
                    linewidth={1}
                />
            </lineSegments>

            {/* Glowing nodes */}
            <points ref={particlesRef} geometry={gridParticles}>
                <pointsMaterial
                    color="#39ff14"  // Brighter neon green for nodes
                    size={0.15}
                    transparent
                    opacity={0.7}
                    sizeAttenuation={true}
                />
            </points>
        </>
    );
};

// Main Matrix Green Web Background Component
const MatrixGreenWebBackground = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);

        // Check for reduced motion preference
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            setPrefersReducedMotion(mediaQuery.matches);
        }
    }, []);

    // Fallback for reduced motion users
    if (prefersReducedMotion) {
        return (
            <div className="absolute inset-0 w-full h-full bg-black" />
        );
    }

    if (!isMounted) {
        return <div className="absolute inset-0 w-full h-full bg-black" />;
    }

    return (
        <div className="absolute inset-0 w-full h-full bg-black pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 25], fov: 60 }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                performance={{ min: 0.5 }}
            >
                <SpiderWebGrid />
            </Canvas>
        </div>
    );
};

export default MatrixGreenWebBackground;
