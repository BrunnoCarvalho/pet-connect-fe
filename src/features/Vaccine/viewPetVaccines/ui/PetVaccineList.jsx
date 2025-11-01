import VaccineCard from "../../../../entities/vaccine/ui/VaccineCard/VaccineCard"
import { usePetVaccines } from "../model/usePetVaccines"
import styles from './PetVaccineList.module.css'
export function PetVaccineList({ petId, onEditVaccine, onDeleteVaccine}){

    const {vaccines, loading, error} = usePetVaccines(petId)

    if(loading){
        return <p>Carregando...</p>
    }
    if(error){
        return <p>Erro ao carregar vacinas: {error}</p>
    }

    return(<>
    <dir className={styles.list}>
       {vaccines.length===0?(
        <p>Nenhuma vacina registrada para este pet.</p>
       ):(
        vaccines.map(vaccine=>(
           <VaccineCard 
  key={vaccine.id} 
  vaccine={vaccine} 
  onEdit={onEditVaccine}
  onDelete={() => onDeleteVaccine(vaccine.id)} 
/>
        ))
       )
       }
     </dir>
        
        </>)

}