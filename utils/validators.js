import { EMAIL_REGEX } from '../constants/regex.js';

export const validateEmail = (email) => EMAIL_REGEX.test(email);
