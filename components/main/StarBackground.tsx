"use client";
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StarBackground = (props: any) => {
  const ref = useRef([]);

  // ✅ SAFELY create star positions
  const [positions] = useState(() => {
    const array = new Float32Array(5000 *3); // 5000 points (stride of 3 = ~1666 vertices)
    return random.inSphere(array, { radius: 1.2 });
  });

  // ✅ Animate rotation (slow)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 50;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto fixed inset-0 z-[20]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;