import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

interface ConstellationsProps {
  starPositions: Float32Array;
}

export const Constellations = ({ starPositions }: ConstellationsProps) => {
  const lineRef = useRef<THREE.LineSegments>(null);
  const { mouse, camera } = useThree();
  
  // Buffers for line segments
  const MAX_CONNECTIONS = 50; // Max lines to draw
  const linePositions = useMemo(() => new Float32Array(MAX_CONNECTIONS * 2 * 3), []);
  
  const mouseWorldPos = new THREE.Vector3();
  const neighbors = useMemo(() => new Array(12).fill(0).map(() => ({ index: -1, distSq: Infinity })), []);

  useFrame(() => {
    if (!lineRef.current) return;

    // Project mouse to world space at a fixed depth (e.g., 25, which is the middle of star field)
    mouseWorldPos.set(mouse.x, mouse.y, 0.5).unproject(camera).normalize().multiplyScalar(25);

    // Reset neighbors
    for (let i = 0; i < neighbors.length; i++) {
      neighbors[i].index = -1;
      neighbors[i].distSq = Infinity;
    }

    // Brute force find closest 12 stars
    const count = starPositions.length / 3;
    for (let i = 0; i < count; i++) {
      const sx = starPositions[i * 3 + 0];
      const sy = starPositions[i * 3 + 1];
      const sz = starPositions[i * 3 + 2];
      
      const dx = sx - mouseWorldPos.x;
      const dy = sy - mouseWorldPos.y;
      const dz = sz - mouseWorldPos.z;
      const d2 = dx * dx + dy * dy + dz * dz;

      // Insertion sort into neighbors
      if (d2 < neighbors[neighbors.length - 1].distSq) {
        let j = neighbors.length - 1;
        while (j > 0 && d2 < neighbors[j - 1].distSq) {
          neighbors[j].index = neighbors[j - 1].index;
          neighbors[j].distSq = neighbors[j - 1].distSq;
          j--;
        }
        neighbors[j].index = i;
        neighbors[j].distSq = d2;
      }
    }

    // Connect top neighbors
    let lineIdx = 0;
    const activeNeighbors = neighbors.filter(n => n.index !== -1);
    
    // Simple constellation logic: connect each star to its 2 nearest neighbors in the set
    for (let i = 0; i < activeNeighbors.length && lineIdx < MAX_CONNECTIONS; i++) {
      const starA = activeNeighbors[i];
      const ax = starPositions[starA.index * 3 + 0];
      const ay = starPositions[starA.index * 3 + 1];
      const az = starPositions[starA.index * 3 + 2];

      // Find 2 closest stars in activeNeighbors (excluding itself)
      const localNeighbors = activeNeighbors
        .map((n, idx) => {
          if (idx === i) return { idx, d2: Infinity };
          const bx = starPositions[n.index * 3 + 0];
          const by = starPositions[n.index * 3 + 1];
          const bz = starPositions[n.index * 3 + 2];
          const d2 = (ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2;
          return { idx, d2 };
        })
        .sort((a, b) => a.d2 - b.d2);

      for (let k = 0; k < 2 && k < localNeighbors.length && lineIdx < MAX_CONNECTIONS; k++) {
        const starB = activeNeighbors[localNeighbors[k].idx];
        const bx = starPositions[starB.index * 3 + 0];
        const by = starPositions[starB.index * 3 + 1];
        const bz = starPositions[starB.index * 3 + 2];

        linePositions[lineIdx * 6 + 0] = ax;
        linePositions[lineIdx * 6 + 1] = ay;
        linePositions[lineIdx * 6 + 2] = az;
        linePositions[lineIdx * 6 + 3] = bx;
        linePositions[lineIdx * 6 + 4] = by;
        linePositions[lineIdx * 6 + 5] = bz;
        lineIdx++;
      }
    }

    // Fill the rest with zeros or move off-screen
    for (let i = lineIdx; i < MAX_CONNECTIONS; i++) {
      linePositions[i * 6 + 0] = 0;
      linePositions[i * 6 + 1] = 0;
      linePositions[i * 6 + 2] = 0;
      linePositions[i * 6 + 3] = 0;
      linePositions[i * 6 + 4] = 0;
      linePositions[i * 6 + 5] = 0;
    }

    lineRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Fade based on average distance to mouse
    const avgDist = activeNeighbors.reduce((sum, n) => sum + Math.sqrt(n.distSq), 0) / (activeNeighbors.length || 1);
    const opacity = Math.max(0, 1 - (avgDist / 10)); // Fade out if mouse is far from the "group"
    (lineRef.current.material as THREE.LineBasicMaterial).opacity = opacity * 0.4;
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={MAX_CONNECTIONS * 2}
          array={linePositions}
          itemSize={3}
          args={[linePositions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial transparent opacity={0.3} color="#ffffff" blending={THREE.AdditiveBlending} depthWrite={false} />
    </lineSegments>
  );
};
