// src/features/userRegistration/ui/AddressFields.jsx

import cn from 'classnames';
import styles from '../../../pages/RegisterPage/RegisterPage.module.css';

export function AddressFields({ userData, handleAddressChange, validationErrors }) {
  return (
    <>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>CEP</label>
        {/* Adicionando a classe de erro condicional e a mensagem de erro */}
        <input 
          className={cn(styles.formInput, { [styles.inputError]: validationErrors.cep })} 
          name="address.cep" 
          value={userData.address.cep} 
          onChange={(e) => handleAddressChange("cep", e.target.value)} 
        />
        {validationErrors.cep && <p className={styles.errorMessage}>{validationErrors.cep}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Logradouro</label>
        <input 
          className={cn(styles.formInput, { [styles.inputError]: validationErrors.street })} 
          name="address.street" 
          value={userData.address.street} 
          onChange={(e) => handleAddressChange("street", e.target.value)} 
        />
        {validationErrors.street && <p className={styles.errorMessage}>{validationErrors.street}</p>}
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Bairro</label>
        <input 
          className={cn(styles.formInput, { [styles.inputError]: validationErrors.neighborhood })} 
          name="address.neighborhood" 
          value={userData.address.neighborhood} 
          onChange={(e) => handleAddressChange("neighborhood", e.target.value)} 
        />
        {validationErrors.neighborhood && <p className={styles.errorMessage}>{validationErrors.neighborhood}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Cidade</label>
        <input 
          className={cn(styles.formInput, { [styles.inputError]: validationErrors.city })} 
          name="address.city" 
          value={userData.address.city} 
          onChange={(e) => handleAddressChange("city", e.target.value)} 
        />
        {validationErrors.city && <p className={styles.errorMessage}>{validationErrors.city}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>UF</label>
        <input 
          className={cn(styles.formInput, { [styles.inputError]: validationErrors.uf })} 
          name="address.uf" 
          value={userData.address.uf} 
          onChange={(e) => handleAddressChange("uf", e.target.value)} 
          placeholder='Ex: RS'
        />
        {validationErrors.uf && <p className={styles.errorMessage}>{validationErrors.uf}</p>}
      </div>
    </>
  );
}