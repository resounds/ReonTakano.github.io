// src/components/ContentLayer/ContentLayer.tsx
import styles from './ContentLayer.module.css';

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
        <div className={styles.content}>
          <h1>Scene 0: Entrance</h1>
        </div>
      </section>
      <section className={styles.scene}>
        <div className={styles.content}>
          <h1>Scene 1: Persona</h1>
        </div>
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
