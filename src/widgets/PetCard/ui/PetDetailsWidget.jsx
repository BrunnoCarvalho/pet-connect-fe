import styles from './PetDetailsWidget.module.css'
import { PetVaccineList } from '../../../features/Vaccine/viewPetVaccines/ui/PetVaccineList'
import { ManageVaccineForm } from '../../../features/Vaccine/ui/ManageVaccineForm'
import { usePetVaccines } from '../../../features/Vaccine/viewPetVaccines/model/usePetVaccines'
import { vaccineApi } from '../../../entities/vaccine/model/vaccineApi'
import { useCallback, useState } from 'react'

export function PetDetailsWidget({petId}){
    const{fetchVaccines} = usePetVaccines()
const [showForm,setShowForm] = useState(false)
const [currentVaccineId, setCurrentVaccineId] = useState(null)

const handleAddRequest = useCallback(()=>{
    setShowForm(true)
    setCurrentVaccineId(null)
}, [])

const handleEditRequest = useCallback((vaccineId)=>{
    setShowForm(true)
    setCurrentVaccineId(vaccineId)
}, [])

const handleCancel = useCallback(()=>{
    setShowForm(false)
    setCurrentVaccineId(null)
}, [])
const handleSuccess = useCallback(()=>{
    setShowForm(false)
    setCurrentVaccineId(null)
    fetchVaccines()
},[fetchVaccines])

const handleDeleteResquest = useCallback(async(vaccineId)=>{
    try{
        await vaccineApi.deleteVaccine(vaccineId)
        fetchVaccines()
    }catch(error){
        console.error('Erro ao excluir vacina:', error)
    }
}, [])



  return (
    <div className={styles.widget}>
      <h2>Carteira de Vacinação</h2>
      <button onClick={handleAddRequest}>Adicionar Vacina</button>

      {showForm && (
        <ManageVaccineForm 
          petId={petId}
          vaccineId={currentVaccineId}
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      )}

      <PetVaccineList 
        petId={petId} 
        onEditVaccine={handleEditRequest}
        onDeleteVaccine={handleDeleteResquest}
      />
    </div>
  );
}