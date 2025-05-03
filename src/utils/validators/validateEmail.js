import { ERROR_MESSAGES } from '@/constants/messages';
import { EMAIL_REGEX } from '@/constants/regex.js';

const validateEmailFormat = (email) => EMAIL_REGEX.test(email);

const validateEmail = (value) => {
  if (!value) return ERROR_MESSAGES.emailRequired;
  if (!validateEmailFormat(value)) return ERROR_MESSAGES.invalidEmail;
  return '';
};

export default validateEmail;
