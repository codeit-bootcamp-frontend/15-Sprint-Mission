import { ERROR_MESSAGES } from '@/constants/messages';

const validateNickname = (value) => {
  if (!value) return ERROR_MESSAGES.nicknameRequired;
  return '';
};

export default validateNickname;
