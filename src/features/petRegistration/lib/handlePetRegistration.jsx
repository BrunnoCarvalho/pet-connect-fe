import { postCreatePet } from "../api/postCreatePet";

export async function handlePetRegistration (petData) {
    try {
        console.log('handlePetRegistration chamado com:', petData);
        const pet = await postCreatePet(petData);
        return pet; 
    } catch (error) {
        console.error("Error in handlePetRegistration:", error);
        throw error;
    }
}
