import { motion } from 'framer-motion';
import { research } from '../../data/research';
import styles from './Scenes.module.css';

export const SceneResearch = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0 }}
      >
        Research
      </motion.h2>
      <div className={styles.researchList}>
        {research.map((item, index) => (
          <motion.div
            key={index}
            className={styles.researchItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
            <div className={styles.keywords}>
              {item.keywords.map((kw, i) => (
                <span key={i} className={styles.keyword}>{kw}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
