// src/components/Scenes/ScenePersona.tsx
import { motion } from 'framer-motion';
import styles from './Scenes.module.css';
import { profile } from '../../data/profile';

export const ScenePersona = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.div 
        className={`${styles.card} ${styles.textShadow}`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Persona</h2>
        <p className={styles.intro}>{profile.intro}</p>
        <div style={{ marginTop: '1rem' }}>
          <strong>Hobbies:</strong> {profile.hobbies.join(', ')}
        </div>
      </motion.div>
    </div>
  );
};
