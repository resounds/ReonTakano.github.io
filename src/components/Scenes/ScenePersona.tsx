// src/components/Scenes/ScenePersona.tsx
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Scenes.module.css';
import { profile } from '../../data/profile';
import { PixieCard } from '../Common/PixieCard';

export const ScenePersona = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <div className={styles.sceneContent} ref={ref}>
      <PixieCard isVisible={isInView} className={styles.textShadow}>
        <h3>Persona</h3>
        <h4>{profile.name} ({profile.englishName})</h4>
        <p className={styles.intro}>{profile.intro}</p>
        <div style={{ marginTop: '1rem' }}>
          <strong>Hobbies:</strong> {profile.hobbies.join(', ')}
        </div>
      </PixieCard>
    </div>
  );
};
