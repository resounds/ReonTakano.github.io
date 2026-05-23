// src/components/Scenes/SceneContact.tsx
import { motion } from 'framer-motion';
import styles from './Scenes.module.css';

export const SceneContact = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact</h2>
        <p className={styles.intro}>
          新しいプロジェクトや共同研究、その他のお問い合わせはこちらまで。
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <motion.a 
            href="mailto:reon.takano@example.com"
            whileHover={{ scale: 1.1 }}
            style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid white' }}
          >
            Email
          </motion.a>
          <motion.a 
            href="https://github.com/ReonTakano"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid white' }}
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
