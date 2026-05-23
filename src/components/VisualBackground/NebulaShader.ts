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
    uniform vec2 uMouse;
    varying vec2 vUv;
    
    // Simple noise and color blending for nebula effect
    void main() {
      // Background distance
      float strength = distance(vUv, vec2(0.5));
      
      // Calculate mouse interaction
      // Map uMouse from [-1, 1] to [0, 1] for screen space
      vec2 mousePos = uMouse * 0.5 + 0.5;
      float mouseDist = distance(vUv, mousePos);
      
      // Dynamic offset parting effect
      vec2 uvOffset = vec2(0.0);
      if (mouseDist < 0.2) {
        float repel = (0.2 - mouseDist) * 1.5;
        uvOffset = normalize(vUv - mousePos) * repel;
      }

      vec3 color = mix(uColor1, uColor2, vUv.x + uvOffset.x + sin(uTime * 0.5) * 0.1);
      
      // Add subtle glow near the mouse
      float glow = exp(-mouseDist * 8.0) * 0.4;
      color += vec3(glow);

      gl_FragColor = vec4(color, (1.0 - strength) * 0.5 + glow);
    }
  `
};
