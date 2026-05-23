import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { getCameraConfig } from './cameraConfig';

export const useCinematicCamera = (sceneIndex: number) => {
  const { camera } = useThree();
  const targetConfig = getCameraConfig(sceneIndex);
  
  // Internal state for smooth transition
  // Initialize with current camera values to avoid jump on first frame
  const currentPosition = useRef(new THREE.Vector3().copy(camera.position));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const spherical = useRef(new THREE.Spherical());
  const targetSpherical = useRef(new THREE.Spherical());

  useFrame(() => {
    const step = 0.05;
    
    // Convert current and target to spherical coordinates for arcing motion
    spherical.current.setFromVector3(currentPosition.current);
    targetSpherical.current.setFromVector3(targetConfig.position);

    // Smoothly interpolate spherical components
    spherical.current.radius = THREE.MathUtils.lerp(spherical.current.radius, targetSpherical.current.radius, step);
    spherical.current.phi = THREE.MathUtils.lerp(spherical.current.phi, targetSpherical.current.phi, step);
    spherical.current.theta = THREE.MathUtils.lerp(spherical.current.theta, targetSpherical.current.theta, step);

    // Convert back to Cartesian and apply
    currentPosition.current.setFromSpherical(spherical.current);
    camera.position.copy(currentPosition.current);

    // Lerp lookAt normally
    currentLookAt.current.lerp(targetConfig.lookAt, step);
    camera.lookAt(currentLookAt.current);
  });
};
