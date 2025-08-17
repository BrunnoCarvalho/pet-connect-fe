import { useState } from "react";
import { cepApi } from "../../../shared/api/cepAPI";

/**
 * Hook para buscar informações de endereço a partir de um CEP.
 * Atualiza os campos de endereço através da função `handleAddressChange` fornecida.
 *
 * @param {Function} handleAddressChange - Função que atualiza os campos do endereço (endereço, bairro, cidade, UF).
 * @returns {Object} Objetos e funções do hook:
 * @property {Function} fetchAddress - Função que recebe um CEP e atualiza os campos do endereço.
 * @property {boolean} loading - Indica se a busca do CEP está em andamento.
 * @property {string|null} error - Mensagem de erro, se houver.
 */

export function useCep(handleAddressChange){

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchAddress = async (cep) => {

        try{
            setLoading(true)
            setError(null)
            const data = await cepApi.fetchAddress(cep)
            handleAddressChange("street", data.logradouro)
            handleAddressChange("neighborhood", data.bairro)
            handleAddressChange("city", data.localidade)
            handleAddressChange("uf", data.uf)
        }catch{
            setError("Erro ao buscar CEP")
        }finally{
            setLoading(false)
        }
    }

    return {fetchAddress, loading, error}
}