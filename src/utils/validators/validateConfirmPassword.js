import { ERROR_MESSAGES } from '@/constants/messages';

const validateConfirmPassword = (value, allValues) => {
  if (!value) return ERROR_MESSAGES.confirmPasswordRequired;
  if (value !== allValues.password) return ERROR_MESSAGES.passwordMismatch;
  return '';
};

export default validateConfirmPassword;
