import cn from 'classnames';
import styles from '../../../pages/RegisterPage/RegisterPage.module.css';

export function UserSpecificFields({ userType, userData, handleChange, validationErrors }) {
  const isTutor = userType === 'tutor';

  return (
    <>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>{isTutor ? "Nome" : (userType === "clinic" ?  "Nome da Clinica" : "Nome da ONG")}</label>
        <input className={cn(styles.formInput, { [styles.inputError]: validationErrors.name })} name="name" value={userData.name} onChange={handleChange} />
        {validationErrors.name && <p className={styles.errorMessage}>{validationErrors.name}</p>}
      </div>

      {isTutor && (
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Sobrenome</label>
          <input className={styles.formInput} name="lastname" value={userData.lastname} onChange={handleChange} />
        </div>
      )}

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>{isTutor ? "CPF" : "CNPJ"}</label>
        <input className={cn(styles.formInput, { [styles.inputError]: validationErrors.cpfOrCnpj })} name="cpfOrCnpj" value={userData.cpfOrCnpj} onChange={handleChange} maxLength="14" />
        {validationErrors.cpfOrCnpj && <p className={styles.errorMessage}>{validationErrors.cpfOrCnpj}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>{isTutor ? "Data de Nascimento" : "Data de Fundação"}</label>
        <input className={cn(styles.formInput, { [styles.inputError]: validationErrors.birthOrFoundationDate })} type="date" name="birthOrFoundationDate" value={userData.birthOrFoundationDate} onChange={handleChange} />
        {validationErrors.birthOrFoundationDate && <p className={styles.errorMessage}>{validationErrors.birthOrFoundationDate}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Telefone</label>
        <input className={cn(styles.formInput, { [styles.inputError]: validationErrors.phone })} type="tel" name="phone" placeholder="(XX) XXXXX-XXXX" value={userData.phone} onChange={handleChange} />
        {validationErrors.phone && <p className={styles.errorMessage}>{validationErrors.phone}</p>}
      </div>
    </>
  );
}