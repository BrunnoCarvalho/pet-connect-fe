import { api } from "../../../shared/api/axiosInstance"

export const userApi = {
   /**
   * Registra um novo usuário no sistema.
   * @param {Object} userData - Dados do usuário.
   * @returns {Promise<Object>} Dados do usuário registrado.
   */
    register: async (userData) => {
        const response = await api.post("/users", userData)
        const data = response.data
        return data
    }
}