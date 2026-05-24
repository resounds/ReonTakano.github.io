# Spec: 360-degree Spherical Star Cluster Background

## Goal
Transform the current flat background into an immersive 360-degree environment that feels like the center of a star cluster. The background should respond naturally to camera rotations and provide deep parallax.

## Architecture: Multi-layered Spherical Shell
We will use three distinct layers centered around the camera to create depth and immersion.

### 1. Cosmic Nebula Layer (Large Sphere)
- **Geometry**: A large `SphereGeometry` (radius: 40).
- **Shader**: Updated `NebulaShader`.
  - Instead of using 2D UVs (which cause seams at the poles of a sphere), it will use the **3D position** of the vertices to calculate procedural noise.
  - This ensures a seamless "fog" that wraps entirely around the scene.
  - Uniforms: `uColor1`, `uColor2`, `uTime`.

### 2. Immersive Starfield (Spherical Volume Particles)
- **Geometry**: `InstancedMesh` with particles distributed in a spherical shell.
- **Distribution Logic**: 
  - Update `generateStarlightData` to use spherical coordinates.
  - Stars will be placed at random radii between 15 and 35.
- **Interactivity**: Maintain the "mouse parting" effect, but adapted for 3D space.

### 3. Static Distant Stars (Distant Shell)
- **Geometry**: A very large `SphereGeometry` (radius: 100) or a second instanced mesh.
- **Visuals**: Tiny, sharp points of light that move very little relative to the camera, creating an anchor for the "infinite" distance of space.

## Interactive Celestial Effects

### 4. Magic Circle Invocation (On Click)
- **Trigger**: Click events on the background (via Three.js raycasting).
- **Visual**: A geometric "Magic Circle" plane appears at the intersection point or at a fixed distance in front of the camera.
- **Animation**: 
  - Scales up from 0 to 1 with a "glow" fade-in.
  - Slowly rotates and then fades out after ~2 seconds.
  - Color matches the current `sceneIndex`.

### 5. Dynamic Constellation System (Cursor Hover)
- **Logic**: Identify the 5-10 stars closest to the cursor in 3D space.
- **Visual**: Draw faint, glowing lines (using `THREE.LineSegments`) connecting these stars to form temporary "constellations".
- **Feedback**: As the cursor moves, lines fade out and new ones form, creating a reactive "connecting the stars" feel.

## Technical Changes

### Shader Updates
- **Nebula**: Switch from `vUv` to `vPosition` (world space) for noise calculation.
- **Starlight**: The vertex shader will now handle positions in a 3D volume, ensuring they surround the camera.

### Interaction
- The background will no longer be a fixed plane at `z=0`.
- All background elements will be rendered with `depthWrite: false` or in a specific order to prevent clipping issues while ensuring the `Planet` and UI remain in front.

## Success Criteria
- [ ] No visible seams or "edges" when the camera rotates 360 degrees.
- [ ] Clear parallax between the "near" stars and the "distant" nebula.
- [ ] Maintain the smooth color transitions based on `sceneIndex`.
