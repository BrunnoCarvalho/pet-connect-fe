import { postCreatePet } from "../api/postCreatePet";

export async function handlePetRegistration (formData) {
    try {
    const pet = await postCreatePet(formData);
    console.log('handlePetRegistration - pet retornado:', pet);
    return pet; 
    } catch (error) {
        console.error("Error in handlePetRegistration:", error);
        throw error;
    }
}
