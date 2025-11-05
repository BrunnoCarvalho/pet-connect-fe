import { useCallback, useEffect, useState } from "react";
import { vaccineApi } from "../../../../entities/vaccine/model/vaccineApi";
 

export function usePetVaccines(petId){
    const [loading, setLoading] = useState(false)
    const [erro, setError]= useState(null)
    const [vaccines, setVaccines] =useState([])
const fetchPetVaccines = useCallback( async () => {
    if(!petId)return
    setLoading(true)
    setError(null)
    try{
        const data = await vaccineApi.fetchPetVaccines(petId)
        console.log('chamando api')
        setVaccines(data)
    }catch(err){
        setError('Falha ao carregar vacinas.');
    }finally{
        setLoading(false)
    }
},[petId])

 useEffect(()=>{
    fetchPetVaccines()
 },[fetchPetVaccines])
 
 return {
    loading,
    erro,
    vaccines,
   fetchPetVaccines
 }


}