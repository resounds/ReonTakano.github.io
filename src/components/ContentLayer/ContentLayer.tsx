import { useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 5 scenes total: map progress [0, 1] to indices [0, 1, 2, 3, 4]
    const sceneIndex = Math.min(Math.floor(latest * 5), 4);
    onSceneChange(sceneIndex);
  });

  return (
    <main ref={containerRef} className={styles.container}>
      <section className={styles.scene}><SceneEntrance /></section>
      <section className={styles.scene}><ScenePersona /></section>
      <section className={styles.scene}><SceneResearch /></section>
      <section className={styles.scene}><SceneArchive /></section>
      <section className={styles.scene}><SceneContact /></section>
    </main>
  );
};
