// src/shared/validation/registerValidation.js

import { cpf, cnpj } from 'cpf-cnpj-validator';
import validator from 'password-validator';
import { isValidPhoneNumber } from 'libphonenumber-js';
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

export function validateUser(userData, confirmFields, userType) {
    const errors = {}; // Sempre começa com um objeto vazio
      const cpfOrCnpj = String(userData.cpfOrCnpj).replace(/\D/g, '');
      const phone = String(userData.phone).replace(/\D/g, '')
    // Validação de CPF/CNPJ
    // Verifica apenas se o campo foi preenchido o suficiente
     if (userType === 'tutor') {
        if (cpfOrCnpj.length > 0) {
            if (cpfOrCnpj.length !== 11) {
                errors.cpfOrCnpj = "CPF deve ter 11 dígitos.";
            } else {
                const cpfError = validateCPF(cpfOrCnpj);
                if (cpfError) errors.cpfOrCnpj = cpfError;
            }
        }
    } else { // Para 'ong' e 'clinic'
        if (cpfOrCnpj.length > 0) {
            if (cpfOrCnpj.length !== 14) {
                errors.cpfOrCnpj = "CNPJ deve ter 14 dígitos.";
            } else {
                const cnpjError = validateCNPJ(cpfOrCnpj);
                if (cnpjError) errors.cpfOrCnpj = cnpjError;
            }
        }
    }
    if(phone.length>0){
      if(!isValidPhoneNumber(phone, 'BR')){
        errors.phone= "O número de telefone é inválido."
      }
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

    if(!userData.name.trim())errors.name="Nome é obrigatório"

    return errors;
}