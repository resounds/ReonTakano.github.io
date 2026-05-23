// src/components/Scenes/SceneResearch.tsx
import { motion } from 'framer-motion';
import styles from './Scenes.module.css';
import { research } from '../../data/research';

export const SceneResearch = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Research
      </motion.h2>
      {research.map((item, index) => (
        <motion.div 
          key={index} 
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            {item.tags.map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.2)', padding: '0.2rem 0.5rem', borderRadius: '0.5rem', fontSize: '0.8rem' }}>
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
