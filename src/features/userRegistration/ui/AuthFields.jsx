// src/features/userRegistration/ui/AuthFields.jsx

export function AuthFields({ userData, confirmFields, handleChange, handleConfirmChange, validationErrors }) {
  return (
    <>
      <label>
        E-mail
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
      </label>
      {/* Exibe o erro de validação para o campo de e-mail */}
      {validationErrors.email && <p style={{ color: "red" }}>{validationErrors.email}</p>}

      <label>
        Confirmação de E-mail
        <input type="email" name="confirmEmail" value={confirmFields.confirmEmail} onChange={handleConfirmChange} />
      </label>
       

      <label>
        Senha
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
      </label>
       {validationErrors.password && <p style={{ color: "red" }}>{validationErrors.password}</p>}
         
  
      <label>
        Confirmação de Senha
        <input type="password" name="confirmPassword" value={confirmFields.confirmPassword} onChange={handleConfirmChange} />
      </label>
     {validationErrors.confirmPassword && <p style={{ color: "red" }}>{validationErrors.confirmPassword}</p>}
    </>
  );
}