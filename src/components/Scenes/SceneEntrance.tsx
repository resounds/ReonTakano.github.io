import { motion } from 'framer-motion';
import styles from './Scenes.module.css';
import { SCENES } from '../../data/scenes';
import { Sparkles, User, Microscope, Library, Mail, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  User,
  Microscope,
  Library,
  Mail,
};

export const SceneEntrance = () => {
  const handleJump = (index: number) => {
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.sceneContent}>
      <motion.div 
        className={styles.heroSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.heroTitle}>鷹野礼音OFFICIAL WEBSITE</h1>
        <p className={styles.heroSubtitle}>Immersive Storyteller</p>
        <div className={styles.divider} />
      </motion.div>

      <motion.div 
        className={styles.storyboardContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className={styles.storyboardTitle}>STORYBOARD</h2>
        <div className={styles.cardGrid}>
          {SCENES.map((scene) => {
            const Icon = iconMap[scene.icon];
            return (
              <motion.div
                key={scene.id}
                className={styles.sceneCard}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleJump(scene.id)}
              >
                <div className={styles.cardImagePlaceholder}>
                  {Icon && <Icon size={32} strokeWidth={1.5} style={{ opacity: 0.8 }} />}
                </div>
                <div className={styles.cardLabel}>{scene.label}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div 
        className={styles.exploreHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
      </motion.div>
    </div>
  );
};
