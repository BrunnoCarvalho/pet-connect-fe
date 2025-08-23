// src/features/userRegistration/ui/UserSpecificFields.jsx

export function UserSpecificFields({ userType, userData, handleChange, validationErrors }) {
  const isTutor = userType === 'tutor';

  return (
    <>
      <label>
        {isTutor ? "Nome" : (userType === "ong" ? "Nome da ONG" : "Nome da Clínica")}
        <input name="name" value={userData.name} onChange={handleChange} />
      </label>

      {isTutor && (
        <label>
          Sobrenome
          <input name="lastname" value={userData.lastname} onChange={handleChange} />
        </label>
      )}

      <label>
        {isTutor ? "CPF" : "CNPJ"}
        <input name="cpfOrCnpj" value={userData.cpfOrCnpj} onChange={handleChange} maxLength="14" />
      </label>
      {/* Exibe o erro de validação para o campo CPF/CNPJ */}
      {validationErrors.cpfOrCnpj && <p style={{ color: "red" }}>{validationErrors.cpfOrCnpj}</p>}

      <label>
        {isTutor ? "Data de Nascimento" : "Data de Fundação"}
        <input type="date" name="birthOrFoundationDate" value={userData.birthOrFoundationDate} onChange={handleChange} />
      </label>

      <label>
        Telefone
        <input type="tel" name="phone" placeholder="(51) 9999-9999" value={userData.phone} onChange={handleChange} />
      </label>
    </>
  );
}