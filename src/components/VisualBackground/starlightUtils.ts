// src/components/VisualBackground/starlightUtils.ts
export const STARLIGHT_COUNT = 5000;

export interface StarlightData {
  initialPositions: Float32Array;
  seeds: Float32Array;
  sizes: Float32Array;
  speeds: Float32Array;
}

export const generateStarlightData = (count: number): StarlightData => {
  const pos = new Float32Array(count * 3);
  const seed = new Float32Array(count);
  const size = new Float32Array(count);
  const speed = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    // Spherical distribution: r, theta, phi
    const r = 15 + Math.random() * 20; // Radius between 15 and 35
    const theta = Math.acos(2 * Math.random() - 1); // 0 to PI
    const phi = Math.random() * Math.PI * 2; // 0 to 2PI
    
    pos[i * 3 + 0] = r * Math.sin(theta) * Math.cos(phi);
    pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    pos[i * 3 + 2] = r * Math.cos(theta);
    
    seed[i] = Math.random() * 100;
    size[i] = Math.random() * 2.0 + 0.5;
    speed[i] = Math.random() * 0.5 + 0.1;
  }
  return { initialPositions: pos, seeds: seed, sizes: size, speeds: speed };
};
