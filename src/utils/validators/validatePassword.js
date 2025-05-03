import { ERROR_MESSAGES } from '@/constants/messages';

const validatePassword = (value) => {
  if (!value) return ERROR_MESSAGES.passwordRequired;
  if (value.length < 8) return ERROR_MESSAGES.passwordLength;
  return '';
};

export default validatePassword;
