// src/components/Scenes/ScenePersona.tsx
import { motion } from 'framer-motion';
import styles from './Scenes.module.css';
import { profile } from '../../data/profile';
import { career } from '../../data/career';

export const ScenePersona = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.div 
        className={styles.card}
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

      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Career</h2>
        {career.map((item, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <div style={{ fontWeight: 'bold' }}>{item.period}</div>
            <div>{item.title} @ {item.organization}</div>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{item.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
