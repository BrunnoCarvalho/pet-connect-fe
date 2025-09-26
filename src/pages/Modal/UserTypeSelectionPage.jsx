import { useUserTypeSelection } from '../../features/Modal/useUserTypeSelection';
import { UserTypeCarousel } from '../../widgets/Model/ui/UserTypeCarousel';
import styles from '../../widgets/Model/ui/UserTypeCarousel.module.css'; // Reutilizando o mesmo CSS

export function UserTypeSelectionPage() {
  const { 
    emblaRef, 
    activeIndex, 
    scrollPrev, 
    scrollNext, 
    handleConfirmSelection,
    handleSlideClick // NOVO: Pega a função do hook
  } = useUserTypeSelection();

  return (
    <div className={styles.pageContainer}>
      <h1>Defina seu tipo de usuario</h1>
      <div className={styles.carouselWrapper}>
        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={scrollPrev}>
          &lt;
        </button>
        
        {/* NOVO: Passamos a função onSlideClick para o widget */}
        <UserTypeCarousel emblaRef={emblaRef} activeIndex={activeIndex} onSlideClick={handleSlideClick} />

        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={scrollNext}>
          &gt;
        </button>
      </div>

      <button className={styles.selectButton} onClick={handleConfirmSelection}>
        Selecionar
      </button>
    </div>
  );
}