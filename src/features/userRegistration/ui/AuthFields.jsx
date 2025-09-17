import cn from 'classnames';
import styles from '../../../pages/RegisterPage/RegisterPage.module.css';

export function AuthFields({ userData, confirmFields, handleChange, handleConfirmChange, validationErrors }) {
  return (
    <>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>E-mail</label>
        <input className={cn(styles.formInput, { [styles.inputError]: validationErrors.email })} type="email" name="email" value={userData.email} onChange={handleChange} placeholder='seuemail@exemplo.com' />
         {validationErrors.email && <p className={styles.errorMessage}>{validationErrors.email}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Confirmação de E-mail</label>
        <input className={cn(styles.formInput, { [styles.inputError]: validationErrors.email })} type="email" name="confirmEmail" value={confirmFields.confirmEmail} onChange={handleConfirmChange} placeholder='Repita seu email' />
        {validationErrors.email && <p className={styles.errorMessage}>{validationErrors.email}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Senha</label>
        <input className={cn(styles.formInput, { [styles.inputError]: validationErrors.password })} type="password" name="password" value={userData.password} onChange={handleChange}  />
        {validationErrors.password && <p className={styles.errorMessage}>{validationErrors.password}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Confirmação de Senha</label>
        <input className={cn(styles.formInput, { [styles.inputError]: validationErrors.confirmPassword })} type="password" name="confirmPassword" value={confirmFields.confirmPassword} onChange={handleConfirmChange} />
        {validationErrors.confirmPassword && <p className={styles.errorMessage}>{validationErrors.confirmPassword}</p>}
      </div>
    </>
  );
}