import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
      <Sphere visible args={[1, 600, 600]} scale={2.5}>
        <MeshDistortMaterial
          color="#8352FD"
          attach="material"
          distort={0.35}
          speed={0.8}
          roughness={0}
        />
      </Sphere>
  );
}

