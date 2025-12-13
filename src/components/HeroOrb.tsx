"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    // Memoize rotation to prevent recalculation
    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.getElapsedTime();
            meshRef.current.rotation.x = time * 0.2;
            meshRef.current.rotation.y = time * 0.3;
        }
    });

    return (
        <Sphere args={[1, 64, 64]} scale={2.4} ref={meshRef}>
            <MeshDistortMaterial
                color="#6B21A8"
                attach="material"
                distort={0.3}
                speed={1}
                roughness={0.1}
                metalness={0.6}
                emissive="#6B21A8"
                emissiveIntensity={0.3}
            />
        </Sphere>
    );
};

const HeroOrb = () => {
    return (
        <div className="w-full h-full absolute inset-0 md:relative md:inset-auto z-0 md:z-auto opacity-40 md:opacity-100 pointer-events-none md:pointer-events-auto">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{
                    antialias: false,
                    powerPreference: "high-performance",
                    alpha: true,
                }}
                performance={{ min: 0.5 }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#22D3EE" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A855F7" />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
};

export default HeroOrb;
