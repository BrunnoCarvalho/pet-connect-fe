
import styles from './UserTypeCarousel.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import { userTypes } from '../../../entities/userType';
export function UserTypeCarousel({ onSlideSelect,activeIndex }) {
  const [emblaRef] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    loop: true,
  })

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        {userTypes.map((userType, index) => (
          <div 
            className={`${styles.emblaSlide} ${index === activeIndex ? styles.emblaSlideIsActive : ''}`} 
            key={userType.type}
          >
            <div className={styles.slideCard}>
              <img src={userType.image} alt={userType.title} className={styles.slideImage} />
              <h2 className={styles.slideTitle}>{userType.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

