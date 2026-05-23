// src/components/ContentLayer/ContentLayer.tsx
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
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight } = e.currentTarget;
    const index = Math.round(scrollTop / clientHeight);
    onSceneChange(index);
  };

  return (
    <main className={styles.container} onScroll={handleScroll}>
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
