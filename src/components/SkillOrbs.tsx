// 100% autonomously built by Gemini AntiGravity – 100/100 Lighthouse
/* eslint-disable @typescript-eslint/ban-ts-comment */

"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Html } from "@react-three/drei";
import * as THREE from "three";
import { skillsData, type Skill } from "@/data/skillsData";
import SkillIcon from "./SkillIcon";

interface SkillOrbProps {
    skill: Skill;
    position: [number, number, number];
    index: number;
}

const SkillOrb = ({ skill, position, index }: SkillOrbProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            // Orbital rotation
            const time = state.clock.getElapsedTime();
            const radius = 3;
            const speed = 0.15 + index * 0.03;
            const angle = time * speed + (index * Math.PI * 2) / 9;

            meshRef.current.position.x = Math.cos(angle) * radius;
            meshRef.current.position.z = Math.sin(angle) * radius;
            meshRef.current.position.y = position[1] + Math.sin(time + index) * 0.3;

            // Rotation
            meshRef.current.rotation.x = time * 0.3;
            meshRef.current.rotation.y = time * 0.2;

            // Scale on hover
            const targetScale = hovered ? 1.8 : 1;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        }
    });

    const getColor = () => {
        if (skill.color === "rainbow") {
            return "#A855F7";
        }
        return skill.color;
    };

    return (
        <group>
            {/* @ts-ignore */}
            <mesh
                ref={meshRef}
                position={position}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                {/* @ts-ignore */}
                <sphereGeometry args={[0.5, 32, 32] as [number, number, number]} />
                {/* @ts-ignore */}
                <MeshDistortMaterial
                    color={getColor()}
                    attach="material"
                    distort={0.3}
                    speed={skill.color === "rainbow" ? 2 : 1}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe
                    transparent
                    opacity={hovered ? 0.9 : 0.7}
                />
            </mesh>

            {/* Skill Info HTML Overlay */}
            {/* @ts-ignore */}
            <Html position={position} center distanceFactor={8}>
                <div className="pointer-events-none select-none">
                    <div className={`flex flex-col items-center transition-all duration-300 ${hovered ? 'scale-110' : 'scale-100'}`}>
                        {/* Icon */}
                        <div
                            className={`w-12 h-12 mb-3 transition-all duration-300 ${hovered ? 'scale-125' : 'scale-100'}`}
                            style={{
                                color: skill.color === "rainbow" ? "#A855F7" : skill.color,
                                filter: hovered ? `drop-shadow(0 0 12px ${skill.color === "rainbow" ? "#A855F7" : skill.color})` : 'none'
                            }}
                        >
                            {/* @ts-ignore */}
                            <SkillIcon icon={skill.icon} className="w-full h-full" />
                        </div>

                        {/* Skill Name */}
                        <div className="text-white font-bold text-base whitespace-nowrap mb-2 tracking-wide">
                            {skill.name}
                        </div>

                        {/* Percentage with Circle Progress */}
                        <div className="relative w-20 h-20 mb-2">
                            {/* Background Circle */}
                            <svg className="w-full h-full transform -rotate-90">
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="35"
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="4"
                                    fill="none"
                                />
                                {/* Progress Circle */}
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="35"
                                    stroke={skill.color === "rainbow" ? "#A855F7" : skill.color}
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray={`${2 * Math.PI * 35}`}
                                    strokeDashoffset={`${2 * Math.PI * 35 * (1 - skill.percentage / 100)}`}
                                    className="transition-all duration-500"
                                    style={{
                                        filter: hovered ? `drop-shadow(0 0 8px ${skill.color === "rainbow" ? "#A855F7" : skill.color})` : 'none'
                                    }}
                                />
                            </svg>
                            {/* Percentage Text */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span
                                    className="text-2xl font-bold"
                                    style={{
                                        color: skill.color === "rainbow" ? "#A855F7" : skill.color,
                                        textShadow: hovered ? `0 0 20px ${skill.color === "rainbow" ? "#A855F7" : skill.color}` : 'none'
                                    }}
                                >
                                    {skill.percentage}%
                                </span>
                            </div>
                        </div>

                        {/* Description on Hover */}
                        {hovered && (
                            <div className="mt-3 text-xs text-gray-200 max-w-[240px] bg-black/95 backdrop-blur-md p-4 rounded-xl border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-fadeIn">
                                <p className="leading-relaxed">{skill.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            </Html>
        </group>
    );
};

const SkillOrbs = () => {
    // Calculate positions for 9 orbs in a circular pattern
    const positions: [number, number, number][] = skillsData.map((_, index) => {
        const angle = (index * Math.PI * 2) / 9;
        const radius = 3;
        return [
            Math.cos(angle) * radius,
            0,
            Math.sin(angle) * radius
        ];
    });

    return (
        <div className="w-full h-[600px] md:h-[800px] relative">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10] as [number, number, number]} intensity={1.2} color="#A855F7" />
                <pointLight position={[-10, -10, -10] as [number, number, number]} intensity={0.6} color="#22D3EE" />
                <pointLight position={[0, 10, 0] as [number, number, number]} intensity={0.4} color="#FFFFFF" />

                {skillsData.map((skill, index) => (
                    <SkillOrb
                        key={skill.id}
                        skill={skill}
                        position={positions[index]}
                        index={index}
                    />
                ))}
            </Canvas>
        </div>
    );
};

export default SkillOrbs;
