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
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Research
      </motion.h2>
      {research.map((item, index) => (
        <PixieCard key={index} isVisible={isInView}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            {item.tags.map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.2)', padding: '0.2rem 0.5rem', borderRadius: '0.5rem', fontSize: '0.8rem' }}>
                #{tag}
              </span>
            ))}
          </div>
        </PixieCard>
      ))}
    </div>
  );
};