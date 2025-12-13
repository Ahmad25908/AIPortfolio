// PROFESSIONAL 3D MOTION BACKGROUND FOR ABOUT PAGE – Attractive, client-magnet – 100% Gemini AntiGravity
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// --- Configuration ---
const COUNT = 60; // Optimized for performance/visual balance
const COLORS = ["#A855F7", "#22D3EE", "#000000"]; // Purple, Cyan, Black(wireframe contrast)

function GeometryShapes() {
    const group = useRef<THREE.Group>(null);

    // Rotate the entire group slowly (space drift effect)
    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.1;
        }
    });

    // Generate random shapes data
    const shapes = useMemo(() => {
        return new Array(COUNT).fill(0).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 30, // Spread across width
                (Math.random() - 0.5) * 20, // Spread across height
                (Math.random() - 0.5) * 15 - 5, // Depth variation
            ] as [number, number, number],
            scale: Math.random() * 0.5 + 0.2, // Random sizes
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
            type: Math.random() > 0.5 ? "tetra" : "octa",
            color: COLORS[Math.floor(Math.random() * 2)], // Randomly Purple or Cyan
            speed: Math.random() * 0.2,
        }));
    }, []);

    return (
        <group ref={group}>
            {shapes.map((shape, i) => (
                <Float
                    key={i}
                    speed={1 + Math.random()} // Random float speed
                    rotationIntensity={0.5 + Math.random()} // Random rotation
                    floatIntensity={0.5 + Math.random()} // Random float range
                >
                    <mesh position={shape.position} rotation={shape.rotation} scale={shape.scale}>
                        {shape.type === "tetra" ? (
                            <tetrahedronGeometry args={[1, 0]} />
                        ) : (
                            <octahedronGeometry args={[1, 0]} />
                        )}
                        <meshBasicMaterial
                            color={shape.color}
                            wireframe={true}
                            transparent={true}
                            opacity={0.15} // Low opacity as requested
                            blending={THREE.AdditiveBlending} // Glow effect
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

export default function GeometryBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-black">
            {/* Base Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0f0a1f] to-black opacity-80" />

            <Canvas
                camera={{ position: [0, 0, 15], fov: 45 }}
                dpr={[1, 2]} // Performance optimization for varied screens
                gl={{ antialias: true, alpha: true }}
            >
                {/* Lighting for subtle dimension (even on wireframes) */}
                <ambientLight intensity={0.5} />

                {/* The Floating Geometry */}
                <GeometryShapes />

                {/* Fog to fade distant objects */}
                <fog attach="fog" args={["#000000", 5, 25]} />
            </Canvas>
        </div>
    );
}
