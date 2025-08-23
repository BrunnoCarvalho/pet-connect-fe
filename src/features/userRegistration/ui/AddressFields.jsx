// src/features/userRegistration/ui/AddressFields.jsx

export function AddressFields({ userData, handleAddressChange }) {

  return (
    <>
      <label>
        CEP
        <input name="address.cep" value={userData.address.cep} onChange={(e) => handleAddressChange("cep", e.target.value)} />
      </label>

      <label>
        Endereço
        <input name="address.street" value={userData.address.street} onChange={(e) => handleAddressChange("street", e.target.value)} />
      </label>

      <label>
        Bairro
        <input name="address.neighborhood" value={userData.address.neighborhood} onChange={(e) => handleAddressChange("neighborhood", e.target.value)} />
      </label>

      <label>
        Cidade
        <input name="address.city" value={userData.address.city} onChange={(e) => handleAddressChange("city", e.target.value)} />
      </label>

      <label>
        UF
        <input name="address.uf" value={userData.address.uf} onChange={(e) => handleAddressChange("uf", e.target.value)} />
      </label>
    </>
  );
}