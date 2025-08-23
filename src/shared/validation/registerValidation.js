// src/shared/validation/registerValidation.js

import { cpf, cnpj } from 'cpf-cnpj-validator';
import validator from 'password-validator';
const passwordSchema = new validator()
passwordSchema
  .is().min(8)                                    // Mínimo de 8 caracteres
  .has().uppercase()                              // Deve ter letras maiúsculas
  .has().lowercase()                              // Deve ter letras minúsculas
  .has().digits(1)                                // Deve ter pelo menos 1 dígito
  .has().not().spaces();                          // Não deve ter espaços


// Função auxiliar para validar CPF
function validateCPF(cpfValue) {
  if (!cpf.isValid(cpfValue)) {
    return "CPF inválido.";
  }
  return null;
}

// Função auxiliar para validar CNPJ
function validateCNPJ(cnpjValue) {
  if (!cnpj.isValid(cnpjValue)) {
    return "CNPJ inválido.";
  }
  return null;
}

export function validateUser(userData, confirmFields) {
    const errors = {}; // Sempre começa com um objeto vazio
    const cpfOrCnpj = String(userData.cpfOrCnpj).replace(/\D/g, '');

    // Validação de CPF/CNPJ
    // Verifica apenas se o campo foi preenchido o suficiente
    if (cpfOrCnpj.length >= 11) {
        if (cpfOrCnpj.length === 11) {
            const cpfError = validateCPF(cpfOrCnpj);
            if (cpfError) errors.cpfOrCnpj = cpfError;
        } else if (cpfOrCnpj.length === 14) {
            const cnpjError = validateCNPJ(cpfOrCnpj);
            if (cnpjError) errors.cpfOrCnpj = cnpjError;
        } else {
            // Caso para comprimentos entre 11 e 14
            errors.cpfOrCnpj = "CPF ou CNPJ com tamanho incorreto.";
        }
    } else if (cpfOrCnpj.length > 0) {
        errors.cpfOrCnpj = "CPF ou CNPJ incompleto.";
    }
    if(userData.password){
        const passwordError = passwordSchema.validate(userData.password, {details:true})
        if(passwordError.length>0){
            errors.password = "A senha precisa ter: min. 8 caracteres, uma maiúscula, uma minúscula e um número."
        }
    }
    if(userData.password !== confirmFields.confirmPassword){
        errors.confirmPassword = "As senhas nao coincidem"
    }
    if (userData.email.length > 5 && userData.email !== confirmFields.confirmEmail) {
        errors.email = "Os e-mails não coincidem.";
    }

    return errors;
}