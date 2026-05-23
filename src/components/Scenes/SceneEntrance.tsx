// src/components/Scenes/SceneEntrance.tsx
import { motion } from 'framer-motion';
import styles from './Scenes.module.css';
import { profile } from '../../data/profile';

export const SceneEntrance = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.h1 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {profile.name}
      </motion.h1>
      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {profile.englishName}
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        style={{ width: '100px', height: '2px', background: 'white', margin: '2rem 0', transformOrigin: 'left' }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        Scroll to Begin
      </motion.p>
    </div>
  );
};
