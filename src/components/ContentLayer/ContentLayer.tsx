// src/components/ContentLayer/ContentLayer.tsx
import styles from './ContentLayer.module.css';
import { SceneEntrance } from '../Scenes/SceneEntrance';
import { ScenePersona } from '../Scenes/ScenePersona';

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
        <div className={styles.content}>
          <h1>Scene 2: Research</h1>
        </div>
      </section>
      <section className={styles.scene}>
        <div className={styles.content}>
          <h1>Scene 3: Archive</h1>
        </div>
      </section>
    </main>
  );
};
