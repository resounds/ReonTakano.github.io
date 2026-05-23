import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import styles from './Scenes.module.css';

export const SceneEntrance = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {profile.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.5 }}
        className={styles.intro}
      >
        {profile.intro}
      </motion.p>
    </div>
  );
};
