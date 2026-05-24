import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Scenes.module.css';
import { publications } from '../../data/publications';
import { awards } from '../../data/awards';
import { PixieCard } from '../Common/PixieCard';

const PublicationList = ({ items }: { items: typeof publications }) => (
  <ul className={styles.archiveList}>
    {items.map((item, index) => (
      <li key={index} className={styles.archiveItem}>
        <div className={styles.archiveYear}>{item.year}</div>
        <div className={styles.archiveTitle}>{item.title}</div>
        <div className={styles.archiveVenue}>{item.venue}</div>
      </li>
    ))}
  </ul>
);

export const SceneArchive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const internationalPubs = publications.filter(p => p.type === 'international');
  const domesticPubs = publications.filter(p => p.type === 'domestic');

  return (
    <div className={styles.sceneContent} ref={ref}>
      <div className={styles.multiCardContainer}>
        <PixieCard isVisible={isInView} className={styles.textShadow}>
          <h3>Publications</h3>
          <div className={styles.scrollContainer}>
            {internationalPubs.length > 0 && (
              <>
                <h4 className={styles.subCategoryHeader}>International Conferences</h4>
                <PublicationList items={internationalPubs} />
              </>
            )}
            {domesticPubs.length > 0 && (
              <>
                <h4 className={styles.subCategoryHeader}>Domestic Conferences</h4>
                <PublicationList items={domesticPubs} />
              </>
            )}
          </div>
        </PixieCard>

        <PixieCard isVisible={isInView} className={styles.textShadow}>
          <h3>Awards</h3>
          <div className={styles.scrollContainer}>
            <ul className={styles.archiveList}>
              {awards.map((item, index) => (
                <li key={index} className={`${styles.archiveItem} ${styles.awardItem}`}>
                  <div className={styles.archiveYear}>{item.year}</div>
                  <div className={styles.archiveTitle}>{item.title}</div>
                </li>
              ))}
            </ul>
          </div>
        </PixieCard>
      </div>
    </div>
  );
};