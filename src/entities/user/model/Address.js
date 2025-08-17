/**
 * Estrutura padrão de um endereço de usuário no sistema.
 * Usado como parte do objeto User.
 *
 * @typedef {Object} Address
 * @property {string} cep - Cep do usuário.
 * @property {string} street - Endereço do usuário.
 * @property {string} neighborhood - Bairro do usuário.
 * @property {string} city - Cidade do usuário.
 * @property {string} uf - UF do usuário.
 */


export const Address = {
  cep: "",
  street: "",
  neighborhood: "",
  city: "",
  uf: ""
}