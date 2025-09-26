import styles from './UserTypeCarousel.module.css';
import { userTypes } from '../../../entities/userType';

// O componente agora recebe a ref do hook
export function UserTypeCarousel({ emblaRef, activeIndex, onSlideClick }) {
  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        {userTypes.map((userType, index) => (
          <div 
            className={`${styles.emblaSlide} ${index === activeIndex ? styles.emblaSlideIsActive : ''}`} 
            key={userType.type}
            // NOVO: Adicionamos o onClick aqui
            onClick={() => onSlideClick(index)} 
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