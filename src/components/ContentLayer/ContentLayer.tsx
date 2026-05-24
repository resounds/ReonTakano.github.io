// src/components/ContentLayer/ContentLayer.tsx
import { useEffect } from 'react';
import styles from './ContentLayer.module.css';
import { SceneEntrance } from '../Scenes/SceneEntrance';
import { ScenePersona } from '../Scenes/ScenePersona';
import { SceneResearch } from '../Scenes/SceneResearch';
import { SceneArchive } from '../Scenes/SceneArchive';
import { SceneContact } from '../Scenes/SceneContact';

interface ContentLayerProps {
  onSceneChange: (index: number) => void;
}

export const ContentLayer = ({ onSceneChange }: ContentLayerProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = document.documentElement;
      const clientHeight = window.innerHeight;
      const index = Math.round(scrollTop / clientHeight);
      onSceneChange(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <SceneResearch />
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
