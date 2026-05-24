import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Scenes.module.css';
import { experience, education } from '../../data/career';
import { PixieCard } from '../Common/PixieCard';

const ItemList = ({ items }: { items: { period: string; title: string; organization: string; description?: string }[] }) => (
  <ul className={styles.archiveList}>
    {items.map((item, index) => (
      <li key={index} className={styles.archiveItem}>
        <div className={styles.archiveYear}>{item.period}</div>
        <div className={styles.archiveTitle}>{item.title} @ {item.organization}</div>
        {item.description && <div className={styles.archiveVenue}>{item.description}</div>}
      </li>
    ))}
  </ul>
);

export const SceneExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <div className={styles.sceneContent} ref={ref}>
      <div className={styles.multiCardContainer}>
        <PixieCard isVisible={isInView} className={styles.textShadow}>
          <h3>Experience</h3>
          <div className={styles.scrollContainer}>
            <ItemList items={experience} />
          </div>
        </PixieCard>

        <PixieCard isVisible={isInView} className={styles.textShadow}>
          <h3>Education</h3>
          <div className={styles.scrollContainer}>
            <ItemList items={education} />
          </div>
        </PixieCard>
      </div>
    </div>
  );
};
