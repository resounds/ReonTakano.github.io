import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Scenes.module.css';
import { research } from '../../data/research';
import { PixieCard } from '../Common/PixieCard';

export const SceneResearch = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <div className={styles.sceneContent} ref={ref}>
      <motion.h2
        className={styles.textShadowStrong}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Research
      </motion.h2>
      {research.map((item, index) => (
        <PixieCard key={index} isVisible={isInView} className={styles.textShadowStrong}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            {item.tags.map(tag => (
              <span 
                key={tag} 
                style={{ 
                  background: 'rgba(0,0,0,0.3)', 
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '0.2rem 0.6rem', 
                  borderRadius: '1rem', 
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </PixieCard>
      ))}
    </div>
  );
};