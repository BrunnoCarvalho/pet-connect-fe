import { axiosPrivate } from "../../../shared/api/axiosPrivate"

export async function postCreatePet (pet) {
    try {
        console.log('chegou no postCreatePet', pet);
        const response = await axiosPrivate.post('http://localhost:3000/pets', pet);
        return response.data;   
    } catch (error) {
        console.error("Error creating pet:", error);
        throw error;
    }
}