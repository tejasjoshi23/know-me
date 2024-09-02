import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer';

const SkyAndBirds = () => {
  useEffect(() => {
    // Set up Three.js scene, camera, renderer, and GPUComputationRenderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Initialize GPUComputationRenderer
    const gpuCompute = new GPUComputationRenderer(window.innerWidth, window.innerHeight, renderer);

    // Add your GPUComputationRenderer setup logic here

    // Set up window resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      // gpuCompute.setSize is not available, so no need for this line
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set up sizes

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      // gpuCompute.compute(); // Uncomment if GPUComputationRenderer is properly set up
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      // gpuCompute.dispose(); // Uncomment if GPUComputationRenderer is properly set up
    };
  }, []);

  return (
    <div id="sky-and-birds">
      <div id="canvas-container"></div>
      <div id="cloud">
        <div id="cloud_layer1"></div>
        <div id="cloud_layer2"></div>
      </div>
    </div>
  );
};

export default SkyAndBirds;
