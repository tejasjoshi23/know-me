import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three";
import "../styles/SkyMoon.css";

const OBJModel = () => {
  const obj = useLoader(OBJLoader, "/moon.obj");
  const texture = useLoader(TextureLoader, "/moon.jpg");

  obj.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture;
      child.material.needsUpdate = true;
    }
  });

  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return <primitive ref={meshRef} object={obj} scale={2.7} />;
};

const SkyMoon = () => {
  return (
    <div className="background-container">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="moon">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OBJModel />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default SkyMoon;
