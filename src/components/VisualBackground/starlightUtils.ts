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
    pos[i * 3 + 0] = (Math.random() - 0.5) * 40;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
    
    seed[i] = Math.random() * 100;
    size[i] = Math.random() * 2.0 + 0.5;
    speed[i] = Math.random() * 0.5 + 0.1;
  }
  return { initialPositions: pos, seeds: seed, sizes: size, speeds: speed };
};
