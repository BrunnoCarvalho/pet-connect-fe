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

export function validateUser(userData, confirmFields,context='submit') {
    const errors = {}; // Sempre começa com um objeto vazio
     const cpfOrCnpj = String(userData.cpfOrCnpj).replace(/\D/g, '');
      const phone = String(userData.phone).replace(/\D/g, '')
      
  if(context==='realtime'|| context === 'submit'){
     if (userData.type === 'tutor' ) {
        if (cpfOrCnpj.length > 0) {
            if (cpfOrCnpj.length !== 11) {
                errors.cpfOrCnpj = "CPF deve ter 11 dígitos.";
                
            } else {
                const cpfError = validateCPF(cpfOrCnpj);
                if (cpfError) errors.cpfOrCnpj = cpfError;
            }
        }
    } else {
      console.log("o type e ",userData.type) // Para 'ong' e 'clinic'
        if (cpfOrCnpj.length > 0) {
            if (cpfOrCnpj.length !== 14) {
                errors.cpfOrCnpj = "CNPJ deve ter 14 dígitos.";
                console.log('CPF inválido')
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
            errors.password = "A senha deve ter 8 caracteres, uma letra maiúscula, uma letra minúscula e um número."
        }
    }
    if(userData.password !== confirmFields.confirmPassword){
        errors.confirmPassword = "As senhas não combinam"
    }
    if (userData.email.length > 5 && userData.email !== confirmFields.confirmEmail) {
        errors.email = "Os e-mails não coincidem.";
    }
  } 
   if (context === 'submit') {
        if (!userData.name.trim()) errors.name = "O nome é obrigatório.";
        if (!userData.email.trim()) errors.email = "O e-mail é obrigatório.";
        if (!cpfOrCnpj.trim()) errors.cpfOrCnpj = "O CPF/CNPJ é obrigatório.";
        if (!phone.trim()) errors.phone = "O telefone é obrigatório.";
         if (!userData.password.trim()) errors.password= "A senha é obrigatoria";
   }
  

    return errors;
}