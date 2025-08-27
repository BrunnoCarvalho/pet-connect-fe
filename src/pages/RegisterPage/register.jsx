// src/pages/RegisterPage/register.jsx
import { useUserRegistration } from "../../features/userRegistration/model/useUserRegistration";
import { useCep } from "../../features/userRegistration/model/useCep";

// Importando os componentes de UI
import { UserSpecificFields } from "../../features/userRegistration/ui/UserSpecificFields";
import { AddressFields } from "../../features/userRegistration/ui/AddressFields";
import { AuthFields } from "../../features/userRegistration/ui/AuthFields";

export function RegisterPage() {
  const registration = useUserRegistration();
  const cepToFetch = registration.userData.address.cep.replace(/\D/g, '');
  // 2. Passamos o CEP e o callback para o hook.
  const { loading: cepLoading, error: cepError } = useCep(cepToFetch, registration.handleFullAddressUpdate);
  

  
  const simulatedType = "tutor"; // Esta variável controlará qual formulário é exibido



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
        {registration.loading || cepLoading ? "Carregando..." : "Cadastrar"}
      </button>

      {cepError && <p style={{ color: "red" }}>{cepError}</p>}
    </form>
  );
}