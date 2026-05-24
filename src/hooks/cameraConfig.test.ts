import { describe, it, expect } from 'vitest';
import { getCameraConfig } from './cameraConfig';
import * as THREE from 'three';

describe('getCameraConfig', () => {
  it('returns initial position for scene 0', () => {
    const config = getCameraConfig(0);
    expect(config.position).toBeInstanceOf(THREE.Vector3);
    expect(config.lookAt).toBeInstanceOf(THREE.Vector3);
    expect(config.position.z).toBeGreaterThan(0);
  });

  it('returns different positions for different scenes', () => {
    const config0 = getCameraConfig(0);
    const config1 = getCameraConfig(1);
    expect(config0.position.equals(config1.position)).toBe(false);
  });
});
