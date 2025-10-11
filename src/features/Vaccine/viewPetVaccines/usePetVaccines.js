import { useCallback, useEffect, useState } from "react";
import { vaccineApi } from "../../../entities/vaccine/model/vaccineApi";
 

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
        setVaccines(data)
    }catch(error){
        error('Erro ao buscar vacinas')
        setError(error)
    }finally{
        setLoading(false)
    }
    return {
        loading,
        erro,
        vaccines
    
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