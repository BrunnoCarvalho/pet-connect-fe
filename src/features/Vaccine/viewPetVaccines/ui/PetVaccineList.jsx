import VaccineCard from "../../../../entities/vaccine/ui/VaccineCard/VaccineCard"
import { usePetVaccines } from "../model/usePetVaccines"
import styles from './PetVaccineList.module.css'
import SortIcon from '../../../../app/flexas.svg';


export function PetVaccineList({ petId, onEditVaccine, onDeleteVaccine, onAddVaccine }){
    const { vaccines, loading, error } = usePetVaccines(petId);

    if(loading){
        return <p>Carregando...</p>;
    }
    if(error){
        return <p className={styles.error}>Erro ao carregar vacinas.</p>;
    }

    return (
      <div className={styles.listComponent}>
      
        <div className={styles.listHeader}>
          <div className={styles.headerTitle}>

            <div className={styles.headerItem} style={{ flex: 2.5 }}>Nome da vacina </div>
            <div className={styles.headerItem}>Data <img src={SortIcon } alt="" /> </div>
            <div className={styles.headerItem}>Próxima dose <img src={SortIcon } alt="" /> </div>
            <div className={styles.headerItem}>Lote</div>
          </div>
        </div>

        <div className={styles.listContainer}>
          {vaccines.length === 0 ? (
            <p className={styles.emptyMessage}>Nenhuma vacina registrada para este pet.</p>
          ) : (
            vaccines.map(vaccine => (
              <VaccineCard 
                key={vaccine.id} 
                vaccine={vaccine} 
                onEdit={onEditVaccine}
                onDelete={onDeleteVaccine} 
              />
            ))
          )}
        </div>
      </div>
    );
        


}