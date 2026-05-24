// src/components/Scenes/SceneContact.tsx
import { motion } from 'framer-motion';
import styles from './Scenes.module.css';
import { Mail } from 'lucide-react';
import qiitaIcon from '../../assets/qiita-white-icon.png';

export const SceneContact = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.div 
        className={`${styles.card} ${styles.textShadowStrong} ${styles.cardInteractive}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={`${styles.title} ${styles.textGlow}`}>Contact</h2>
        <p className={`${styles.intro} ${styles.softText}`}>
          プロジェクトのご相談やお仕事のご依頼など、お気軽にお問い合わせください。
        </p>
        <div className={styles.contactLinksContainer}>
          <motion.a
            href="https://github.com/resounds"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={styles.contactLink}
          >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1-.02-2-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.043.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.839 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.43.372.815 1.103.815 2.222 0 1.606-.015 2.898-.015 3.292 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"/>
                </svg>
          </motion.a>

          <motion.a
            href="https://x.com/tube_roxas0601?t=gvy15tE6SsO1hy9YXwoTFw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={styles.contactLink}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.53 3H21.5L14.88 10.39L22.68 21H16.16L11.21 14.41L5.52 21H1.5L8.57 13.09L1.09 3H7.75L12.24 9.02L17.53 3ZM16.41 19H18.29L7.36 4.89H5.36L16.41 19Z" fill="currentColor" />
            </svg>
          </motion.a>

          <motion.a
            href="https://qiita.com/resound"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={styles.contactLink}
          >
            <img src={qiitaIcon} alt="Qiita" width={20} height={20} />
          </motion.a>

          <motion.a
            href="mailto:resound0902@gmail.com"
            whileHover={{ scale: 1.05 }}
            className={styles.contactLink}
          >
            <Mail size={20} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
