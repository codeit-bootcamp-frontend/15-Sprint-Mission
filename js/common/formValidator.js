// 정규표현식 기반의 입력 유효성 검사 함수들
export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isPasswordValid(password) {
  return password.length >= 8;
}

export function isMatchValid(input1, input2) {
  return input1 === input2;
}

export function isEmpty(value) {
  return !value || value.trim() === '';
}