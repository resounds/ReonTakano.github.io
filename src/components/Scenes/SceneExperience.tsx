import { motion } from 'framer-motion';
import styles from './Scenes.module.css';
import { experience, education } from '../../data/career';

export const SceneExperience = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.div
        className={`${styles.card} ${styles.textShadow}`}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Experience</h2>
        {experience.map((item, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <div style={{ fontWeight: 'bold' }}>{item.period}</div>
            <div>{item.title} @ {item.organization}</div>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{item.description}</p>
          </div>
        ))}

        <h2 style={{ marginTop: '2rem' }}>Education</h2>
        {education.map((item, index) => (
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
