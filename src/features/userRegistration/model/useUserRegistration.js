// src/features/userRegistration/model/useUserRegistration.js

import { useEffect, useState, useCallback } from "react";
import { User } from "../../../entities/user/model/User";
import { userApi } from "../../../entities/user/model/userApi";
import { validateUser } from "../../../shared/validation/registerValidation";

const initialConfirmatinFields = {
    confirmEmail: "",
    confirmPassword: ""
}

export function useUserRegistration() {
    const [userData, setUserData] = useState(User);
    const [confirmFields, setConfirmFields] = useState(initialConfirmatinFields);
    const [loading, setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [submissionError, setSubmissionError] = useState(null);

    useEffect(() => {
        const newErrors = validateUser(userData, confirmFields,userData.type);
        setValidationErrors(currentErrors => {
            if (JSON.stringify(newErrors) !== JSON.stringify(currentErrors)) {
                return newErrors;
            }
            return currentErrors;
        });
    }, [userData, confirmFields]);

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        let finalValue = value;
        if (name === "cpfOrCnpj") {
            finalValue = value.replace(/\D/g, '').slice(0, 14);
        }
        setUserData(prev => ({ ...prev, [name]: finalValue }));
    }, []);

    const handleConfirmChange = useCallback((event) => {
        const { name, value } = event.target;
        setConfirmFields(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleAddressChange = useCallback((field, value) => {
        setUserData(prev => ({
            ...prev,
            address: { ...prev.address, [field]: value }
        }));
    }, []);

    const handleFullAddressUpdate = useCallback((addressData) => {
        setUserData(prev => ({
            ...prev,
            address: {
                ...prev.address,
                street: addressData.logradouro || prev.address.street,
                neighborhood: addressData.bairro || prev.address.neighborhood,
                city: addressData.localidade || prev.address.city,
                uf: addressData.uf || prev.address.uf,
            }
        }));
    }, []);

    const submitForm = async (event, userType) => {
        event.preventDefault();
        setSubmissionError(null);
        const userToSend = { ...userData, type: userType };
        const finalErrors = validateUser(userToSend, confirmFields);
        
        if (Object.keys(finalErrors).length > 0) {
            setValidationErrors(finalErrors);
            return;
        }
        console.log("Objeto que seria enviado para o backend:", userToSend);
        try {
            setLoading(true);
            setValidationErrors({});
            //await userApi.register(userToSend)
            setUserData(User);
            setConfirmFields(initialConfirmatinFields);
        } catch (err) {
            setSubmissionError("Erro no cadastro do usuário. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return { userData, confirmFields, handleChange, handleConfirmChange, handleAddressChange, submitForm, loading, validationErrors, submissionError, handleFullAddressUpdate };
}