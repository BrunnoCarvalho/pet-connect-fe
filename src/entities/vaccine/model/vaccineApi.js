/* import { api} from "../../../shared/api/axiosInstance";
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
        
    } */// Este arquivo simula as chamadas à API para Vacinas
// NÃO CONECTA A NENHUM BACKEND REAL NESTA VERSÃO.

// --- INÍCIO DO NOSSO MOCK (API SIMULADA) ---

// 1. Nosso "banco de dados" falso em memória.
//    Ele persistirá enquanto a aplicação estiver rodando na memória do navegador.
let mockVaccines = [
    { id: 'v1', petId: '123', name: 'Polivalente V10', aplicationDate: '2025-10-15', nextDoseDate: '2025-11-15', lot: '812263333' },
    { id: 'v2', petId: '123', name: 'Polivalente V10', aplicationDate: '2025-09-15', nextDoseDate: '2025-10-15', lot: '589522122' },
    { id: 'v3', petId: '123', name: 'Polivalente V8', aplicationDate: '2025-08-15', nextDoseDate: '2025-09-15', lot: '15245833' },
    { id: 'v4', petId: '456', name: 'Raiva', aplicationDate: '2024-05-01', nextDoseDate: '2025-05-01', lot: '99887766' },
];

// 2. Função para simular o atraso da rede (delay)
//    Isso ajuda a testar estados de carregamento (loading) na UI.
const simulateNetworkDelay = (ms = 800) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// 3. Exportamos as funções que a UI chamaria, mas agora elas manipulam nosso array 'mockVaccines'.
export const vaccineApi = {

    /**
     * Simula a busca de todas as vacinas para um pet específico.
     * @param {string} petId O ID do pet.
     * @returns {Promise<Array>} Uma Promise que resolve com um array de objetos de vacinas.
     */
    async fetchPetVaccines(petId) {
        console.log(`[MOCK API] Buscando vacinas para o pet ${petId}...`);
        await simulateNetworkDelay();
        // Filtra as vacinas pelo petId
        return mockVaccines;
    },

    /**
     * Simula a busca de uma vacina específica pelo ID.
     * @param {string} vaccineId O ID da vacina.
     * @returns {Promise<Object>} Uma Promise que resolve com o objeto da vacina.
     */
    async fetchVaccineById(vaccineId) {
        console.log(`[MOCK API] Buscando vacina com ID ${vaccineId}...`);
        await simulateNetworkDelay();
        const vaccine = mockVaccines.find(v => v.id === vaccineId);
        if (!vaccine) {
            console.error(`[MOCK API] Vacina com ID ${vaccineId} não encontrada.`);
            throw new Error('Vacina não encontrada.');
        }
        return vaccine;
    },

    /**
     * Simula a adição de uma nova vacina.
     * @param {string} petId O ID do pet ao qual a vacina pertence.
     * @param {Object} vaccineData Os dados da nova vacina.
     * @returns {Promise<Object>} Uma Promise que resolve com o objeto da vacina adicionada (com ID).
     */
    async addVaccine(petId, vaccineData) {
        console.log(`[MOCK API] Adicionando vacina para o pet ${petId}:`, vaccineData);
        await simulateNetworkDelay(1000); // Um pouco mais de delay para adição

        const newVaccine = {
            ...vaccineData,
            id: 'v' + Date.now(), // Gera um ID único simples
            petId: petId, // Garante que o petId esteja correto
        };
        mockVaccines.push(newVaccine);
        console.log(`[MOCK API] Vacina adicionada:`, newVaccine);
        return newVaccine;
    },

    /**
     * Simula a atualização de uma vacina existente.
     * @param {string} vaccineId O ID da vacina a ser atualizada.
     * @param {Object} vaccineData Os dados atualizados da vacina.
     * @returns {Promise<Object>} Uma Promise que resolve com o objeto da vacina atualizada.
     */
    async updateVaccine(vaccineId, vaccineData) {
        console.log(`[MOCK API] Atualizando vacina com ID ${vaccineId}:`, vaccineData);
        await simulateNetworkDelay(1000);

        const vaccineIndex = mockVaccines.findIndex(v => v.id === vaccineId);
        if (vaccineIndex === -1) {
            console.error(`[MOCK API] Vacina com ID ${vaccineId} não encontrada para atualizar.`);
            throw new Error('Vacina não encontrada para atualização.');
        }

        mockVaccines[vaccineIndex] = {
            ...mockVaccines[vaccineIndex], // Mantém dados antigos que não foram enviados
            ...vaccineData, // Aplica as atualizações
            id: vaccineId, // Garante que o ID não mude
            petId: mockVaccines[vaccineIndex].petId // Garante que o petId não mude
        };
        console.log(`[MOCK API] Vacina atualizada:`, mockVaccines[vaccineIndex]);
        return mockVaccines[vaccineIndex];
    },

    /**
     * Simula a exclusão de uma vacina.
     * @param {string} vaccineId O ID da vacina a ser excluída.
     * @returns {Promise<Object>} Uma Promise que resolve com um status de sucesso.
     */
    async deleteVaccine(vaccineId) {
        console.log(`[MOCK API] Deletando vacina com ID ${vaccineId}...`);
        await simulateNetworkDelay(500);

        const initialLength = mockVaccines.length;
        mockVaccines = mockVaccines.filter(v => v.id !== vaccineId);

        if (mockVaccines.length === initialLength) {
            console.warn(`[MOCK API] Vacina com ID ${vaccineId} não encontrada para deletar (já inexistente?).`);
            // Poderíamos lançar um erro aqui se quisermos simular um 404
            // throw new Error('Vacina não encontrada para exclusão.');
            return { message: 'Vacina não encontrada, mas a requisição foi processada.', deleted: false };
        }
        console.log(`[MOCK API] Vacina com ID ${vaccineId} deletada.`);
        return { message: 'Vacina deletada com sucesso.', deleted: true };
    }
};
// --- FIM DO MOCK ---
