import axios from "axios"

export const cepApi = {
   /**
   * Busca os dados de endereço de um CEP.
   * @param {string} cep - CEP no formato numérico, sem traços.
   * @returns {Promise<Object>} Objeto contendo logradouro, bairro, cidade e UF.
   */
    fetchAddress: async(cep) => {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const data = response.data
        return data
    }
}