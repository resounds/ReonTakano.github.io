// src/components/ContentLayer/ContentLayer.tsx
import { useEffect } from 'react';
import styles from './ContentLayer.module.css';
import { SceneEntrance } from '../Scenes/SceneEntrance';
import { ScenePersona } from '../Scenes/ScenePersona';
import { SceneExperience } from '../Scenes/SceneExperience';
import { SceneArchive } from '../Scenes/SceneArchive';
import { SceneContact } from '../Scenes/SceneContact';

interface ContentLayerProps {
  onSceneChange: (index: number) => void;
}

export const ContentLayer = ({ onSceneChange }: ContentLayerProps) => {
  useEffect(() => {
    // Use IntersectionObserver to choose the section with the largest visible area
    const sections = Array.from(document.querySelectorAll(`.${styles.scene}`)) as HTMLElement[];
    if (sections.length === 0) return;

    const getVisibleRatio = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
      return visibleHeight / window.innerHeight;
    };

    const decide = () => {
      const ratios = sections.map(getVisibleRatio);
      const max = Math.max(...ratios);
      const idx = ratios.indexOf(max);
      if (max > 0.05) onSceneChange(idx);
    };

    const observer = new IntersectionObserver(() => decide(), { threshold: Array.from({ length: 101 }, (_, i) => i / 100) });
    sections.forEach(s => observer.observe(s));

    // Initial decide
    decide();

    return () => observer.disconnect();
  }, [onSceneChange]);

  return (
    <main className={styles.container}>
      <section className={styles.scene}>
        <SceneEntrance />
      </section>
      <section className={styles.scene}>
        <ScenePersona />
      </section>
      <section className={styles.scene}>
        <SceneExperience />
      </section>
      <section className={styles.scene}>
        <SceneArchive />
      </section>
      <section className={styles.scene}>
        <SceneContact />
      </section>
    </main>
  );
};
