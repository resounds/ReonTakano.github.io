import { motion } from 'framer-motion';
import styles from './Scenes.module.css';

export const SceneContact = () => {
  return (
    <section className={styles.scene}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.description}>
          お読みいただきありがとうございました。<br />
          物語の続きを一緒に作りましょう。
        </p>
        <div className={styles.contactLinks}>
          <a href="https://github.com/ReonTakano" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
            X (Twitter)
          </a>
          <a href="mailto:contact@example.com" className={styles.link}>
            Email
          </a>
        </div>
      </motion.div>
    </section>
  );
};
