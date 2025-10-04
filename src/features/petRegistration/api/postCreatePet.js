import { axiosPrivate } from "../../../shared/api/axiosPrivate"

export async function postCreatePet (formData) {
    try {
        console.log('chegou no postCreatePet', formData);
        const response = await axiosPrivate.post('http://localhost:3000/pets', formData);
        return response.data;   
    } catch (error) {
        console.error("Error creating pet:", error);
        throw error;
    }
}