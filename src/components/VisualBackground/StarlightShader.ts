// src/components/VisualBackground/StarlightShader.ts
export const StarlightShader = {
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    
    attribute vec3 aInitialPosition;
    attribute float aSeed;
    attribute float aSize;
    attribute float aSpeed;

    varying float vTwinkle;
    varying float vDistance;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      
      // Base position for this instance
      vec3 basePos = aInitialPosition;
      
      // Subtle organic drift
      basePos.x += sin(uTime * aSpeed + aSeed) * 0.1;
      basePos.y += cos(uTime * aSpeed + aSeed) * 0.1;

      // Mouse parting effect
      vec2 distVec = basePos.xy - uMouse;
      float dist = length(distVec);
      vDistance = dist;

      if (dist < 4.0) {
        float force = pow(1.0 - (dist / 4.0), 2.0);
        vec2 dir = normalize(distVec);
        basePos.xy += dir * force * 1.5;
      }

      // Scale based on size and proximity to mouse
      float finalScale = aSize;
      if (dist < 4.0) {
        finalScale *= (1.0 + (1.0 - dist / 4.0) * 0.5);
      }
      
      // Apply instance transformation to the vertex position
      // We use the 'position' from the geometry and scale/offset it
      vec3 transformed = position * finalScale * 0.1; // Slightly larger for mesh
      transformed += basePos;

      vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Twinkle effect
      vTwinkle = 0.5 + 0.5 * sin(uTime * (aSpeed * 5.0) + aSeed);
    }
  `,
  fragmentShader: `
    varying float vTwinkle;
    varying float vDistance;
    varying vec2 vUv;

    void main() {
      // Circular glow using UVs
      float r = length(vUv - vec2(0.5));
      if (r > 0.5) discard;

      // Soft radial gradient
      float strength = 1.0 - (r * 2.0);
      strength = pow(strength, 3.0);

      // Color and opacity
      vec3 color = vec3(1.0, 1.0, 1.0);
      
      // Add a subtle magical shimmer (white/blueish)
      color.g += 0.05 * vTwinkle;
      color.b += 0.1 * vTwinkle;
      
      float alpha = strength * 0.7 * (0.3 + 0.7 * vTwinkle);
      
      // Pulse brightness near mouse
      if (vDistance < 4.0) {
        alpha *= (1.0 + (1.0 - vDistance / 4.0) * 0.5);
      }

      gl_FragColor = vec4(color, alpha);
    }
  `
};
