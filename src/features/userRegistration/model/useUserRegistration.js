import { useState } from "react";
import { User } from "../../../entities/user/model/User";
import { userApi } from "../../../entities/user/model/userApi";
import { validateUser } from "../../../shared/validation/registerValidation";

/**
 * Hook personalizado para gerenciamento do formulário de cadastro dos usuários.
 * Fornece estados, handlers e lógica de submissão.
 * 
 * @returns {Object} Objetos e funções do hook:
 * @property {Object} userData - Dados do usuário preenchidos no formulário.
 * @property {Object} confirmFields - Campos de confirmação (senha e e-mail).
 * @property {Function} handleChange - Atualiza os campos do usuário.
 * @property {Function} handleConfirmChange - Atualiza os campos de confirmação.
 * @property {Function} handleAddressChange - Atualiza os campos do endereço.
 * @property {Function} submitForm - Função para enviar os dados ao backend. Recebe `event` e `userType` como argumentos.
 * @property {boolean} loading - Indica se a submissão está em andamento.
 * @property {string|null} error - Mensagem de erro, se houver.
 */

const initialConfirmatinFields = {
    confirmEmail: "",
    confirmPassword: ""
}

export function useUserRegistration() {

    const [userData, setUserData] = useState(User)
    const [confirmFields, setConfirmFields] = useState(initialConfirmatinFields)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = (event) => {

        const { name, value } = event.target

        //if (name === "cpfOrCnpj") value = formatCpfCnpj(value);

        setUserData(prev => ({ ...prev, [name]: value }))  //Função passada como callback. Prev = estado atual do objeto. O corpo da função cria um novo objeto, sobrescrevendo apenas o que mudou. Esse novo objeto, vira o novo estado do form.

    }

    const handleConfirmChange = (event) => {
        const { name, value } = event.target
        setConfirmFields(prev => ({ ...prev, [name]: value }))
    };

    const handleAddressChange = (field, value) => {
        setUserData(prev => ({
            ...prev,
            address: { ...prev.address, [field]: value }
        }))
    }

    const submitForm = async (event, userType) => {

        event.preventDefault()

         const userToSend = { ...userData, type: userType }
        /*const validation = validateUser(userToSend, confirmFields);
        if(validationError){
            setError(validation)
            return
        }*/

        console.log("Objeto que seria enviado para o backend:", userToSend)

        try {
            setLoading(true)
            setError(null)
            //await userApi.register(userToSend)
            setUserData(User)
            setConfirmFields(initialConfirmatinFields)
        } catch (err) {
            setError("Erro no cadastro do usuário")
        } finally {
            setLoading(false)
        }

    }

    return { userData, confirmFields, handleChange, handleConfirmChange, handleAddressChange, submitForm, loading, error }
}