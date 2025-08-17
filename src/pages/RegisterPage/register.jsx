import { useEffect } from "react";
import { useUserRegistration } from "../../features/userRegistration/model/useUserRegistration";
import { useCep } from "../../features/userRegistration/model/useCep";

/**
 * Página de registro de usuários.
 * Renderiza o formulário de cadastro, utiliza hooks para gerenciar estado, validação e busca de CEP.
 *  O formulário adapta os campos exibidos conforme o tipo de usuário (Tutor, ONG, Clínica).
 * @component
 * @returns {JSX.Element} Formulário de registro de usuário
 */

export function RegisterPage() {

  const { userData, confirmFields, handleChange, handleConfirmChange, handleAddressChange, submitForm, loading, error } = useUserRegistration()

  const { fetchAddress, loading: cepLoading, error: cepError } = useCep(handleAddressChange)

  const simulatedType = "ong"; //Variável temporária simulando valor do modal

  useEffect(() => {
    if (userData.address.cep.length === 8) {
      fetchAddress(userData.address.cep)
    }
  }, [userData.address.cep])


  return (
    <form onSubmit={(e) => submitForm(e, simulatedType)}>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {/* Lado esquerdo */}
        <div>
          {simulatedType === "tutor" && (
            <>
              <label>
                Nome
                <input name="name" value={userData.name} onChange={handleChange} />
              </label>

              <label>
                Telefone
                <input type="tel" name="phone" placeholder="(51) 9999-9999" value={userData.phone} onChange={handleChange}
                />
              </label>

              <label>
                CPF
                <input name="cpfOrCnpj" value={userData.cpfOrCnpj} onChange={handleChange} />
              </label>

              <label>
                Endereço
                <input name="address.street" value={userData.address.street} onChange={(e) => handleAddressChange("street", e.target.value)}
                />
              </label>

              <label>
                Cidade
                <input name="address.city" value={userData.address.city} onChange={(e) => handleAddressChange("city", e.target.value)}
                />
              </label>

              <label>
                E-mail
                <input type="email" name="email" value={userData.email} onChange={handleChange} />
              </label>

              <label>
                Senha
                <input type="password" name="password" value={userData.password} onChange={handleChange} />
              </label>
            </>
          )}

          {(simulatedType === "ong" || simulatedType === "clinic") && (
            <>
              <label>
                {simulatedType === "ong" ? "Nome da ONG" : "Nome da Clínica"}
                <input name="name" value={userData.name} onChange={handleChange} />
              </label>

              <label>
                CNPJ
                <input name="cpfOrCnpj" value={userData.cpfOrCnpj} onChange={handleChange} />
              </label>

              <label>
                Data de Fundação
                <input type="date" name="birthOrFoundationDate" value={userData.birthOrFoundationDate} onChange={handleChange}/>
              </label>

              <label>
                Telefone
                <input type="tel" name="phone" placeholder="(51) 9999-9999" value={userData.phone} onChange={handleChange} />
              </label>

              <label>
                Endereço
                <input name="address.street" value={userData.address.street} onChange={(e) => handleAddressChange("street", e.target.value)}/>
              </label>

              <label>
                Cidade
                <input name="address.city" value={userData.address.city} onChange={(e) => handleAddressChange("city", e.target.value)}/>
              </label>

              <label>
                E-mail
                <input type="email" name="email" value={userData.email} onChange={handleChange} />
              </label>

              <label>
                Senha
                <input type="password" name="password" value={userData.password} onChange={handleChange} />
              </label>
            </>
          )}
        </div>

        {/* Lado direito */}
        <div>
          {simulatedType === "tutor" && (
            <>
              <label>
                Sobrenome
                <input name="lastName" value={userData.lastName} onChange={handleChange} />
              </label>

              <label>
                Data de Nascimento
                <input type="date" name="birthOrFoundationDate" value={userData.birthOrFoundationDate} onChange={handleChange} />
              </label>
            </>
          )}

          {(simulatedType === "ong" || simulatedType === "clinic") && (
            <>
              <label>
                CEP
                <input name="address.cep" value={userData.address.cep} onChange={(e) => handleAddressChange("cep", e.target.value)} />
              </label>
            </>
          )}

          <label>
            Bairro
            <input name="address.neighborhood" value={userData.address.neighborhood} onChange={(e) => handleAddressChange("neighborhood", e.target.value)} />
          </label>

          <label>
            UF
            <input name="address.uf" value={userData.address.uf} onChange={(e) => handleAddressChange("uf", e.target.value)} />
          </label>

          <label>
            Confirmação de E-mail
            <input type="email" name="confirmEmail" value={confirmFields.confirmEmail} onChange={handleConfirmChange} />
          </label>

          <label>
            Confirmação de Senha
            <input type="password" name="confirmPassword" value={confirmFields.confirmPassword} onChange={handleConfirmChange} />
          </label>
        </div>
      </div>

      <button type="submit" disabled={loading || cepLoading}>
        {loading ? "Enviando..." : "Cadastrar"}
      </button>

      {cepError && <p style={{ color: "red" }}>{cepError}</p>}
    </form>
  );
}