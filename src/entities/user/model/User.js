import { Address } from "./Address";

/**
 * Estrutura padrão de um usuário no sistema.
 *
 * @typedef {Object} User
 * @property {string} type - Tipo do usuário (tutor, ong, clinic).
 * @property {string} name - Nome do usuário ou da entidade.
 * @property {string} lastname - Sobrenome do usuário (apenas para pessoas físicas).
 * @property {string} email - Endereço de e-mail do usuário.
 * @property {string} phone - Telefone de contato.
 * @property {string} birthOrFoundationDate - Data de nascimento ou fundação.
 * @property {string} cpfOrCnpj - CPF ou CNPJ, dependendo do tipo do usuário.
 * @property {Object} address - Endereço do usuário (endereço, bairro, cidade, UF, CEP).
 * @property {string} password - Senha do usuário.
 */

export const User = {
    type: "ong",
    name: "",
    lastname: "",
    email: "",
    phone: "",
    birthOrFoundationDate: "",
    cpfOrCnpj: "",
    address: {...Address},
    password: ""
}