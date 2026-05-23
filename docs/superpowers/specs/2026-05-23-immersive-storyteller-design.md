# Takano Reon Homepage: Immersive Storyteller (Starlight Edition)

## 1. Vision & Goals
A highly immersive, interactive portfolio for Takano Reon that blends the organic, generative aesthetic of **teamLab** with the narrative precision and "magic" of **Disney**.

- **Metaphor**: A cosmic journey through a reactive nebula, where each section of the user's life is a discovered planet.
- **Key Experience**: "Environment and Content are One." Particles from the background nebula cluster together to form UI elements (pixie dust effect).

## 2. Visual Design
- **Aesthetic**: "Vivid Cosmic Garden". Deep dark backgrounds with vibrant, glowing nebulae (pinks, blues, purples). High-quality textured planets with atmospheric scattering.
- **Interactivity**: 
    - **Reactive Nebula**: GPU-accelerated particle system that reacts to mouse movement and scroll speed.
    - **Starlight Paths**: Stars part or follow the cursor, guiding the user's focus.

## 3. Narrative Architecture (The "Disney" Layer)
- **Staging**: Intentional camera movements. When reaching a "planet" (section), the camera performs a cinematic orbital sweep before presenting content.
- **Anticipation**: UI elements "breathe" or gather energy before transitions.
- **Magical Transitions**: The "Pixie Dust" effect where background particles congregate to form the borders and backgrounds of UI cards, dissolving back into the void when dismissed.

## 4. Technical Stack
- **Framework**: React (Vite) + TypeScript.
- **3D Engine**: Three.js via React Three Fiber & Drei.
- **Physics/Shaders**: Custom GLSL shaders for the reactive nebula.
- **Animation**: Framer Motion for UI transitions and camera interpolation.
- **Styles**: CSS Modules (Glassmorphism for UI cards).

## 5. Scene Mapping
- **Scene 0: Entrance**: Floating in the void, stars slowly gathering.
- **Scene 1: Persona**: Reaching the first planet (Warm, inviting).
- **Scene 2: Research**: Diving into a complex, glowing cluster of data-planets.
- **Scene 3: Archive**: A constellation map of achievements and publications.
- **Scene 4: Contact**: A calm, distant view of the entire galaxy traveled.

## 6. Success Criteria
- Performance: Maintains 60fps on modern browsers despite high particle counts.
- Emotional Impact: User feels a sense of wonder and "magic" during navigation.
- Clarity: Immersive visuals do not sacrifice the readability of the professional content.
