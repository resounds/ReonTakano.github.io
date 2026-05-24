// src/components/Scenes/SceneContact.tsx
import { motion } from 'framer-motion';
import styles from './Scenes.module.css';

export const SceneContact = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.div 
        className={`${styles.card} ${styles.textShadowStrong}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={`${styles.title} ${styles.textGlow}`}>Contact</h2>
        <p className={`${styles.intro} ${styles.softText}`}>
          新しいプロジェクトや共同研究、その他のお問い合わせはこちらまで。
        </p>
        <div className={styles.contactLinksContainer}>
          <motion.a 
            href="mailto:23amj15@ms.dendai.ac.jp"
            whileHover={{ scale: 1.05 }}
            className={styles.contactLink}
          >
            Email
          </motion.a>
          <motion.a 
            href="https://github.com/ReonTakano"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={styles.contactLink}
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
