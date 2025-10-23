//import { api} from "../../../shared/api/axiosInstance";
export const vaccineApi = {
    async fetchPetVaccines(petId){
        try{
            const reponse = await api.get( `/pets/${petId}/vaccines`)
            return reponse.data
        }catch(error){
            console.log(`Erro ao buscar vacinas para o pet ${petId}/vaccines`)
            throw error
        }
    },
    async fetchVaccineById(vaccineId){
        try{
            const reponse = await api.post(`/vaccine/${vaccineId}`)
            return reponse.data
        }catch(error){
            console.log(`Erro ao buscar vacina ${vaccineId}`)
            throw error
        }
    },
    async addVaccine(petId, vaccineData){
        try{
            const reponse = await api.post( `/pets/${petId}/vaccines`, vaccineData)
            return reponse.data
        }catch(error){
            console.log(`Erro adicionar vacinas para o pet ${petId}/vaccines`)
            throw error
        }
    },
    async updateVaccine(vaccineId,vaccineData){
        try{
            const reponse = await api.put( `/vaccine/${vaccineId}`,vaccineData)
            return reponse.data
        }catch(error){
            console.log(`Erro ao atualizar a vacina ${vaccineId}/vaccines`)
            throw error
        }
    },
    async deleteVaccine(vaccineId){
        try{
           await api.delete( `/vaccine/${vaccineId}`)
            return {sucess:true}
        }catch(error){
            console.log(`Erro ao deletar vacina ${vaccineId}`)
            throw error
        }
    }
        
    }

