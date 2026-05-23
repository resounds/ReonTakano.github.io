// src/components/Scenes/SceneArchive.tsx
import { motion } from 'framer-motion';
import styles from './Scenes.module.css';
import { publications } from '../../data/publications';
import { awards } from '../../data/awards';

export const SceneArchive = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Archive</h2>
        
        <div style={{ marginTop: '2rem' }}>
          <h3>Publications</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {publications.map((item, index) => (
              <li key={index} style={{ marginBottom: '1rem', borderLeft: '2px solid white', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{item.year}</div>
                <div>{item.title}</div>
                <div style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>{item.venue}</div>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>Awards</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {awards.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                🏆 {item.year}: {item.title}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
