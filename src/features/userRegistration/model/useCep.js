// src/features/userRegistration/model/useCep.js

import { useState, useEffect,useCallback } from "react";
import { cepApi } from "../../../shared/api/cepApi";

// O hook agora recebe o CEP e a função de callback
export function useCep(cep, handleFullAddressUpdate) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Este useEffect é a nova lógica central.
    // Ele observa o CEP e dispara a busca quando necessário.
   
        const fetchAddress = useCallback(async () => {
        if (cep.length !== 8) {
            return;
        }
        try {
            setLoading(true);
            setError(null);
            const data = await cepApi.fetchAddress(cep);
            if (data.erro) {
                setError("CEP não encontrado.");
                return;
            }
            handleFullAddressUpdate(data);
        } catch {
            setError("Erro ao buscar CEP. Verifique sua conexão.");
        } finally {
            setLoading(false);
        }
    }, [cep, handleFullAddressUpdate]);
     
    useEffect(() => {
        fetchAddress()
    },[fetchAddress])

    // O hook não precisa mais retornar a função fetchAddress
    return { loading, error };
}