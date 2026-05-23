import { motion } from 'framer-motion';
import { publications } from '../../data/publications';
import { awards, education } from '../../data/awards';
import styles from './Scenes.module.css';

export const SceneArchive = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Archive
      </motion.h2>
      
      <div className={styles.archiveGrid}>
        <motion.div 
          className={styles.archiveSection}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Publications</h3>
          {publications.map((pub, i) => (
            <div key={i} className={styles.archiveItem}>
              <span className={styles.year}>{pub.year}</span>
              <h4>{pub.title}</h4>
              <p className={styles.venue}>{pub.venue}</p>
            </div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.archiveSection}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Awards & Education</h3>
          {awards.map((award, i) => (
            <div key={i} className={styles.archiveItem}>
              <span className={styles.year}>{award.date}</span>
              <h4>{award.title}</h4>
              <p className={styles.org}>{award.organization}</p>
            </div>
          ))}
          {education.map((edu, i) => (
            <div key={`edu-${i}`} className={styles.archiveItem}>
              <span className={styles.year}>{edu.period}</span>
              <h4>{edu.degree}</h4>
              <p className={styles.org}>{edu.institution}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
