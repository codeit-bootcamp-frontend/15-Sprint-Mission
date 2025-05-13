// 정규식 패턴
export const PATTERNS = {
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  USERNAME: /^[가-힣a-zA-Z0-9]{2,10}$/,
};

// 이메일 검증
export const validateEmail = (value) => {
  if (!value) return "이메일을 입력해주세요.";
  if (!PATTERNS.EMAIL.test(value)) return "잘못된 이메일 형식입니다.";
  return "";
};

// 닉네임 검증
export const validateUsername = (value) => {
  if (!value) return "닉네임을 입력해주세요.";
  if (!PATTERNS.USERNAME.test(value))
    return "닉네임은 2~10자의 한글, 영문, 숫자만 사용 가능합니다.";
  return "";
};

// 비밀번호 검증
export const validatePassword = (value) => {
  if (!value) return "비밀번호를 입력해주세요.";
  if (!PATTERNS.PASSWORD.test(value))
    return "비밀번호는 8자 이상의 영문, 숫자 조합이어야 합니다.";
  return "";
};

// 비밀번호 확인 검증
export const validatePasswordConfirm = (value, password) => {
  if (!value) return "비밀번호 확인을 입력해주세요.";
  if (value !== password) return "비밀번호가 일치하지 않습니다.";
  return "";
};
