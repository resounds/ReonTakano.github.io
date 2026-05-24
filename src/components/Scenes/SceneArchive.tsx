import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Scenes.module.css';
import { publications } from '../../data/publications';
import { awards } from '../../data/awards';
import { PixieCard } from '../Common/PixieCard';

const PublicationList = ({ items }: { items: typeof publications }) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {items.map((item, index) => (
      <li key={index} style={{ marginBottom: '1.5rem', borderLeft: '2px solid rgba(255,255,255,0.3)', paddingLeft: '1rem' }}>
        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{item.year}</div>
        <div style={{ fontWeight: 'bold', margin: '0.2rem 0' }}>{item.title}</div>
        <div style={{ fontStyle: 'italic', fontSize: '0.9rem', opacity: 0.9 }}>{item.venue}</div>
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
        <PixieCard isVisible={isInView}>
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

        <PixieCard isVisible={isInView}>
          <h3>Awards</h3>
          <div className={styles.scrollContainer}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {awards.map((item, index) => (
                <li key={index} style={{ marginBottom: '1rem', borderLeft: '2px solid rgba(255,215,0,0.3)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{item.year}</div>
                  <div style={{ fontWeight: 'bold', margin: '0.2rem 0' }}>{item.title}</div>
                </li>
              ))}
            </ul>
          </div>
        </PixieCard>
      </div>
    </div>
  );
};