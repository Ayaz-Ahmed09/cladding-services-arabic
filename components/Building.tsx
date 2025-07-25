import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { claddingMaterials } from "../lib/data/claddingMaterials";

type Props = {
  material: keyof typeof claddingMaterials;
  isRotating?: boolean;
};

export function Building({ material, isRotating = true }: Props) {
  const matProps = claddingMaterials[material];
  const group = useRef<THREE.Group>(null);

  const materialInstance = new THREE.MeshPhysicalMaterial({
    color: matProps.color,
    metalness: matProps.metalness,
    roughness: matProps.roughness,
    transmission: matProps.transmission,
    transparent: matProps.opacity < 1,
    opacity: matProps.opacity,
    ior: 1.5,
    side: THREE.DoubleSide,
  });

  useFrame((_, delta) => {
    if (isRotating && group.current) {
      group.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={group}>
      {/* Front wall */}
      <mesh position={[0, 1, -1]} material={materialInstance}>
        <boxGeometry args={[2, 2, 0.1]} />
      </mesh>

      {/* Side wall */}
      <mesh
        position={[-1, 1, 0]}
        rotation={[0, Math.PI / 2, 0]}
        material={materialInstance}
      >
        <boxGeometry args={[2, 2, 0.1]} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 2.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[2, 2, 0.1]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Floor */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[10, 10, 0.1]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    </group>
  );
}
