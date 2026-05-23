// src/components/VisualBackground/NebulaShader.ts
import * as THREE from 'three';

export const NebulaShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color(0x4e00ff) },
    uColor2: { value: new THREE.Color(0xff0080) },
    uMouse: { value: new THREE.Vector2(0, 0) },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;
    
    // Simple noise and color blending for nebula effect
    void main() {
      float strength = distance(vUv, vec2(0.5));
      vec3 color = mix(uColor1, uColor2, vUv.x + sin(uTime * 0.5) * 0.1);
      gl_FragColor = vec4(color, (1.0 - strength) * 0.5);
    }
  `
};
