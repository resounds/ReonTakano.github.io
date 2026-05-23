import { motion } from 'framer-motion';
import { career } from '../../data/career';
import styles from './Scenes.module.css';

export const ScenePersona = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Career
      </motion.h2>
      <div className={styles.careerList}>
        {career.map((item, index) => (
          <motion.div
            key={index}
            className={styles.careerItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className={styles.period}>{item.period}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.org}>{item.organization}</p>
            <p className={styles.desc}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
