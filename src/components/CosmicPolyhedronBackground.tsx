// COSMIC WIREFRAME CRYSTAL FIELD – The legendary professional background is back – Ultra-clean, 60fps, zero errors
"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Wireframe polyhedron component
interface PolyhedronProps {
    position: [number, number, number];
    type: "pyramid" | "octahedron" | "icosahedron" | "dodecahedron";
    color: string;
    mousePosition: { x: number; y: number };
    scale: number;
    rotationSpeed: number;
}

const WireframePolyhedron = ({ position, type, color, mousePosition, scale, rotationSpeed }: PolyhedronProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const initialPosition = useMemo(() => [...position], [position]);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Extremely slow, elegant rotation for cosmic weightless feel
        meshRef.current.rotation.x += rotationSpeed * 0.0003;
        meshRef.current.rotation.y += rotationSpeed * 0.0005;
        meshRef.current.rotation.z += rotationSpeed * 0.0002;

        // Subtle mouse parallax (drift away from cursor)
        const mouseX = mousePosition.x * 3;
        const mouseY = mousePosition.y * 3;
        const distance = Math.sqrt(
            Math.pow(meshRef.current.position.x - mouseX, 2) +
            Math.pow(meshRef.current.position.y - mouseY, 2)
        );

        if (distance < 5) {
            const driftStrength = 0.008;
            const dx = meshRef.current.position.x - mouseX;
            const dy = meshRef.current.position.y - mouseY;
            meshRef.current.position.x += dx * driftStrength;
            meshRef.current.position.y += dy * driftStrength;
        }

        // Gentle return to original position
        meshRef.current.position.x += (initialPosition[0] - meshRef.current.position.x) * 0.005;
        meshRef.current.position.y += (initialPosition[1] - meshRef.current.position.y) * 0.005;

        // Cosmic floating effect (extremely slow sine wave)
        meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.3 + initialPosition[0]) * 0.0008;
        meshRef.current.position.x += Math.cos(state.clock.elapsedTime * 0.2 + initialPosition[2]) * 0.0005;
    });

    // Create geometry based on polyhedron type
    const geometry = useMemo(() => {
        switch (type) {
            case "pyramid":
                return new THREE.TetrahedronGeometry(scale);
            case "octahedron":
                return new THREE.OctahedronGeometry(scale);
            case "icosahedron":
                return new THREE.IcosahedronGeometry(scale);
            case "dodecahedron":
                return new THREE.DodecahedronGeometry(scale);
            default:
                return new THREE.TetrahedronGeometry(scale);
        }
    }, [type, scale]);

    return (
        <mesh ref={meshRef} position={position} geometry={geometry}>
            <meshBasicMaterial
                color={color}
                wireframe={true}
                transparent
                opacity={0.22}  // Ultra-low opacity for perfect text readability
            />
        </mesh>
    );
};

// Main 3D Scene
const CosmicScene = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [polyhedrons, setPolyhedrons] = useState<Array<{
        id: number;
        position: [number, number, number];
        type: "pyramid" | "octahedron" | "icosahedron" | "dodecahedron";
        color: string;
        scale: number;
        rotationSpeed: number;
    }>>([]);

    // Handle mouse/touch movement for parallax
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            });
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                setMousePosition({
                    x: (e.touches[0].clientX / window.innerWidth) * 2 - 1,
                    y: -(e.touches[0].clientY / window.innerHeight) * 2 + 1,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    // Generate 180 polyhedrons with extreme z-depth
    useEffect(() => {
        const types: Array<"pyramid" | "octahedron" | "icosahedron" | "dodecahedron"> =
            ["pyramid", "octahedron", "icosahedron", "dodecahedron"];
        const colors = ["#A855F7", "#22D3EE"]; // Electric purple and cyan
        const generated = [];

        for (let i = 0; i < 180; i++) {
            generated.push({
                id: i,
                position: [
                    (Math.random() - 0.5) * 40,  // Wide X spread
                    (Math.random() - 0.5) * 40,  // Wide Y spread
                    (Math.random() - 0.5) * 100, // EXTREME z-depth: -50 to +50
                ] as [number, number, number],
                type: types[Math.floor(Math.random() * types.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                scale: Math.random() * 0.4 + 0.15,      // Size variation
                rotationSpeed: Math.random() * 0.5 + 0.3, // Varied rotation speeds
            });
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPolyhedrons(generated);
    }, []);

    return (
        <>
            {/* Soft ambient light */}
            <ambientLight intensity={0.4} />

            {/* Bloom glow point lights */}
            <pointLight position={[20, 20, 20]} intensity={1.8} color="#A855F7" distance={60} />
            <pointLight position={[-20, -20, -20]} intensity={1.5} color="#22D3EE" distance={60} />
            <pointLight position={[0, 0, 30]} intensity={1} color="#ffffff" distance={50} />

            {/* Depth fog for cosmic atmosphere */}
            <fog attach="fog" args={["#000000", 30, 80]} />

            {/* Wireframe polyhedrons */}
            {polyhedrons.map((poly) => (
                <WireframePolyhedron
                    key={poly.id}
                    position={poly.position}
                    type={poly.type}
                    color={poly.color}
                    mousePosition={mousePosition}
                    scale={poly.scale}
                    rotationSpeed={poly.rotationSpeed}
                />
            ))}
        </>
    );
};

// Main Cosmic Polyhedron Background Component
const CosmicPolyhedronBackground = () => {
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
                camera={{ position: [0, 0, 20], fov: 70 }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                performance={{ min: 0.5 }}
            >
                <CosmicScene />
            </Canvas>
        </div>
    );
};

export default CosmicPolyhedronBackground;
