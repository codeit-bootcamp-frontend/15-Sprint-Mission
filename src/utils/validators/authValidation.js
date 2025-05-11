import { AUTH_ERROR_MESSAGES } from '@/constants/messages';
import { EMAIL_REGEX } from '@/constants/regex.js';

const validateEmailFormat = (email) => EMAIL_REGEX.test(email);

const validateEmail = (value) => {
  if (!value) return AUTH_ERROR_MESSAGES.emailRequired;
  if (!validateEmailFormat(value)) return AUTH_ERROR_MESSAGES.invalidEmail;
  return '';
};

const validateNickname = (value) => {
  if (!value) return AUTH_ERROR_MESSAGES.nicknameRequired;
  return '';
};

const validatePassword = (value) => {
  if (!value) return AUTH_ERROR_MESSAGES.passwordRequired;
  if (value.length < 8) return AUTH_ERROR_MESSAGES.passwordLength;
  return '';
};

const validateConfirmPassword = (value, allFormValues) => {
  if (!value) return AUTH_ERROR_MESSAGES.confirmPasswordRequired;
  if (value !== allFormValues.password)
    return AUTH_ERROR_MESSAGES.passwordMismatch;
  return '';
};

export const signUpValidation = {
  email: validateEmail,
  nickname: validateNickname,
  password: validatePassword,
  confirmPassword: validateConfirmPassword,
};

export const signInValidation = {
  email: validateEmail,
  password: validatePassword,
};
