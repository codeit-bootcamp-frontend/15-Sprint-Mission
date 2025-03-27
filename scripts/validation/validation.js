import {
  EMAIL_VALIDATION,
  NICKNAME_VALIDATION,
  PASSWORD_VALIDATION,
  CONFIRM_PASSWORD_VALIDATION,
} from '../../constants/message.js';

import { SYMBOL } from '../../constants/symbol.js';

/**
 * 이메일 유효성 검사
 * @param {string} email - 입력된 이메일
 * @returns {string} - 에러 메시지 또는 빈 문자열
 */
export const validateEmail = email => {
  if (!email) {
    return EMAIL_VALIDATION.required_email;
  }
  return !SYMBOL.email_validate_regex.test(email) ? EMAIL_VALIDATION.invalid_email : SYMBOL.empty_message;
};

/**
 * 닉네임 유효성 검사
 * @param {string} nickname - 입력된 닉네임
 * @returns {string} - 에러 메시지 또는 빈 문자열
 */
export const validateNickname = nickname => {
  return !nickname ? NICKNAME_VALIDATION.required_nickname : SYMBOL.empty_message;
};

/**
 * 비밀번호 유효성 검사
 * @param {string} password - 입력된 비밀번호
 * @returns {string} - 에러 메시지 또는 빈 문자열
 */
export const validatePassword = password => {
  if (!password) {
    return PASSWORD_VALIDATION.required_password;
  }
  return password.length < SYMBOL.password_min_length ? PASSWORD_VALIDATION.invalid_password : SYMBOL.empty_message;
};

/**
 * 비밀번호 확인 유효성 검사
 * @param {string} password - 비밀번호
 * @param {string} confirmPassword - 비밀번호 확인 값
 * @returns {string} - 에러 메시지 또는 빈 문자열
 */
export const validatePasswordConfirm = (password, confirmPassword) => {
  if (!confirmPassword) {
    return CONFIRM_PASSWORD_VALIDATION.required_confirm_password;
  }

  // 비밀번호와 같더라도 비밀번호 조건이 통과되어야 함
  if (password.length < SYMBOL.password_min_length) {
    return PASSWORD_VALIDATION.invalid_password;
  }

  return password !== confirmPassword ? CONFIRM_PASSWORD_VALIDATION.not_matched_password : SYMBOL.empty_message;
};
