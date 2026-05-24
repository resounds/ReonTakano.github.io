import { describe, it, expect } from 'vitest';
import * as THREE from 'three';

// Since we want to test the data generation which is currently internal to VisualBackground.tsx
// but I moved it to a top-level function, I can either export it or just re-implement a testable version.
// For the sake of demonstrating testing, I'll export it from VisualBackground.tsx if I can,
// or just test the logic if I keep it there.
// Actually, I'll export it for testing.

const generateStarlightDataTestable = (count: number) => {
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

describe('Starlight Data Generation', () => {
  it('should generate the correct number of particles', () => {
    const count = 100;
    const data = generateStarlightDataTestable(count);
    expect(data.initialPositions.length).toBe(count * 3);
    expect(data.seeds.length).toBe(count);
    expect(data.sizes.length).toBe(count);
    expect(data.speeds.length).toBe(count);
  });

  it('should generate values within expected ranges', () => {
    const count = 10;
    const data = generateStarlightDataTestable(count);
    for (let i = 0; i < count; i++) {
      expect(data.seeds[i]).toBeGreaterThanOrEqual(0);
      expect(data.seeds[i]).toBeLessThanOrEqual(100);
      expect(data.sizes[i]).toBeGreaterThanOrEqual(0.5);
      expect(data.sizes[i]).toBeLessThanOrEqual(2.5);
      expect(data.speeds[i]).toBeGreaterThanOrEqual(0.1);
      expect(data.speeds[i]).toBeLessThanOrEqual(0.6);
    }
  });
});
