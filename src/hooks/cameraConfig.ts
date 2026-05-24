import * as THREE from 'three';

export interface CameraConfig {
  position: THREE.Vector3;
  lookAt: THREE.Vector3;
}

export const getCameraConfig = (sceneIndex: number): CameraConfig => {
  const configs: Record<number, CameraConfig> = {
    0: { position: new THREE.Vector3(0, 0, 10), lookAt: new THREE.Vector3(0, 0, 0) },
    1: { position: new THREE.Vector3(8, 2, 8), lookAt: new THREE.Vector3(0, 0, 0) },
    2: { position: new THREE.Vector3(-8, -2, 8), lookAt: new THREE.Vector3(0, 0, 0) },
    3: { position: new THREE.Vector3(0, 8, 8), lookAt: new THREE.Vector3(0, 0, 0) },
    4: { position: new THREE.Vector3(0, 0, 5), lookAt: new THREE.Vector3(0, 0, 0) },
  };
  return configs[sceneIndex] || configs[0];
};
