// src/pages/RegisterPage/register.jsx
import illustrationUrl from '../../assets/illustration.svg';
import { useCep } from "../../features/userRegistration/model/useCep";
import { useUserRegistration } from "../../features/userRegistration/model/useUserRegistration";
import styles from './RegisterPage.module.css';

// Importando os componentes de UI
import { AddressFields } from "../../features/userRegistration/ui/AddressFields";
import { AuthFields } from "../../features/userRegistration/ui/AuthFields";
import { UserSpecificFields } from "../../features/userRegistration/ui/UserSpecificFields";

import { useLocation } from 'react-router-dom';

export function RegisterPage() {
  const registration = useUserRegistration();
  const cepToFetch = registration.userData.address.cep.replace(/\D/g, '');
  const { loading: cepLoading, error: cepError } = useCep(cepToFetch, registration.handleFullAddressUpdate);

  const location = useLocation();
  const simulatedType = location.state?.type;
  console.log(location.state?.type)
  //const simulatedType = "tutor";

  return (
    <div className={styles.pageContainer}>
      <div className={styles.infoPanel}>
        <h1 className={styles.infoTitle}>Bem-vindo ao cadastro.</h1>
      <img 
          src={illustrationUrl} 
          alt="Pessoas com seus animais de estimação" 
          className={styles.illustration} 
        />
      </div>

      <div className={styles.formPanel}>
        <form className={styles.form} onSubmit={(e) => registration.submitForm(e, simulatedType)}>
          {registration.submissionError && <p className={styles.errorMessage}>{registration.submissionError}</p>}
          
          <div className={styles.formGrid}>
            <UserSpecificFields 
              userType={simulatedType}
              userData={registration.userData}
              handleChange={registration.handleChange}
              validationErrors={registration.validationErrors}
            />
            <AddressFields 
              userData={registration.userData}
              handleAddressChange={registration.handleAddressChange}
              validationErrors={registration.validationErrors}
            />
            <AuthFields 
              userData={registration.userData}
              confirmFields={registration.confirmFields}
              handleChange={registration.handleChange}
              handleConfirmChange={registration.handleConfirmChange}
              validationErrors={registration.validationErrors}
            />
          </div>

  

          <button type="submit" className={styles.submitButton} disabled={registration.loading || cepLoading}>
            {registration.loading || cepLoading ? "Carregando..." : "Cadastrar"}
          </button>

          {cepError && <p className={styles.errorMessage}>{cepError}</p>}
        </form>
      </div>
    </div>
  );
}