// src/components/VisualBackground/StarlightShader.ts
export const StarlightShader = {
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uPartDistance;
    uniform float uPartForce;
    uniform float uDriftAmount;
    uniform float uBaseScale;
    uniform float uTwinkleSpeed;
    
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
      basePos.x += sin(uTime * aSpeed + aSeed) * uDriftAmount;
      basePos.y += cos(uTime * aSpeed + aSeed) * uDriftAmount;

      // Mouse parting effect
      vec2 distVec = basePos.xy - uMouse;
      float dist = length(distVec);
      vDistance = dist;

      if (dist < uPartDistance) {
        float force = pow(1.0 - (dist / uPartDistance), 2.0);
        vec2 dir = normalize(distVec);
        basePos.xy += dir * force * uPartForce;
      }

      // Scale based on size and proximity to mouse
      float finalScale = aSize;
      if (dist < uPartDistance) {
        finalScale *= (1.0 + (1.0 - dist / uPartDistance) * 0.5);
      }
      
      // Apply instance transformation to the vertex position
      // We use the 'position' from the geometry and scale/offset it
      vec3 transformed = position * finalScale * uBaseScale;
      transformed += basePos;

      vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Twinkle effect
      vTwinkle = 0.5 + 0.5 * sin(uTime * (aSpeed * uTwinkleSpeed) + aSeed);
    }
  `,
  fragmentShader: `
    varying float vTwinkle;
    varying float vDistance;
    varying vec2 vUv;

    uniform float uPartDistance;

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
      if (vDistance < uPartDistance) {
        alpha *= (1.0 + (1.0 - vDistance / uPartDistance) * 0.5);
      }

      gl_FragColor = vec4(color, alpha);
    }
  `
};
