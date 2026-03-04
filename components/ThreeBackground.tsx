"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Stars radius={100} depth={50} count={4000} factor={4} fade />
      </Canvas>
    </div>
  );
}
