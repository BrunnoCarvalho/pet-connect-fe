// src/pages/RegisterPage/register.jsx

import { useEffect } from "react";
import { useUserRegistration } from "../../features/userRegistration/model/useUserRegistration";
import { useCep } from "../../features/userRegistration/model/useCep";

// Importando os componentes de UI
import { UserSpecificFields } from "../../features/userRegistration/ui/UserSpecificFields";
import { AddressFields } from "../../features/userRegistration/ui/AddressFields";
import { AuthFields } from "../../features/userRegistration/ui/AuthFields";

export function RegisterPage() {
  const registration = useUserRegistration();
  const { fetchAddress, loading: cepLoading, error: cepError } = useCep(registration.handleAddressChange);
  
  const simulatedType = "ong"; // Esta variável controlará qual formulário é exibido

  useEffect(() => {
    // A busca de CEP só é relevante para organizações neste modelo
    if ((simulatedType === 'ong' || simulatedType === 'clinic') && registration.userData.address.cep.length === 8) {
      fetchAddress(registration.userData.address.cep);
    }
  }, [registration.userData.address.cep, fetchAddress, simulatedType]);

  return (
    <form onSubmit={(e) => registration.submitForm(e, simulatedType)}>
      {registration.submissionError && <p style={{ color: "red" }}>{registration.submissionError}</p>}

      {/* Usamos um layout simples de duas colunas para organizar os campos */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        
        {/* Coluna da Esquerda: Campos de identificação */}
        <div>
          <UserSpecificFields 
            userType={simulatedType}
            userData={registration.userData}
            handleChange={registration.handleChange}
            validationErrors={registration.validationErrors}
          />
        </div>

        {/* Coluna da Direita: Endereço e Autenticação */}
        <div>
          <AddressFields 
            userType={simulatedType}
            userData={registration.userData}
            handleAddressChange={registration.handleAddressChange}
          />
          <AuthFields 
            userData={registration.userData}
            confirmFields={registration.confirmFields}
            handleChange={registration.handleChange}
            handleConfirmChange={registration.handleConfirmChange}
            validationErrors={registration.validationErrors}
          />
        </div>
      </div>

      <button type="submit" disabled={registration.loading || cepLoading}>
        {registration.loading ? "Enviando..." : "Cadastrar"}
      </button>

      {cepError && <p style={{ color: "red" }}>{cepError}</p>}
    </form>
  );
}