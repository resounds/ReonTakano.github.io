import styles from './ContentLayer.module.css';

export const ContentLayer = () => (
  <main className={styles.container}>
    <section className={styles.scene}>Scene 0</section>
    <section className={styles.scene}>Scene 1</section>
    <section className={styles.scene}>Scene 2</section>
    <section className={styles.scene}>Scene 3</section>
  </main>
);
