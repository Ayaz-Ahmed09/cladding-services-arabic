"use client";

import { Sky } from "@react-three/drei";
import { useMemo } from "react";

export default function CustomEnvironment() {
  const sunPosition = useMemo<[number, number, number]>(
    () => [100, 20, 100],
    []
  );

  return (
    <>
      <Sky
        sunPosition={sunPosition}
        distance={450000}
        turbidity={10}
        rayleigh={6}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        inclination={0.49}
        azimuth={0.25}
      />

      <ambientLight intensity={0.4} />

      <directionalLight
        position={sunPosition}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
}
