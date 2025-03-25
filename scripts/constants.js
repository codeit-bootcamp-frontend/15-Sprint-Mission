export const BLANK = "";

export const CSS_CLASSES = Object.freeze({
  error: "error",
  msgError: "msg-error",
  inputAccount: "input-account",
  btnSubmit: "btn-submit",
  btnVisibility: "btn-visibility-on",
});

export const DISPLAY_STATES = Object.freeze({
  block: "block",
  none: "none",
});

export const TYPE_STATES = Object.freeze({
  text: "text",
  password: "password",
});

export const VISIBILITY_STATES = Object.freeze({
  on: "on",
  off: "off",
});

export const FIELD_IDS = Object.freeze({
  email: "email",
  nickname: "nickname",
  password: "password",
  passwordConfirm: "password-confirm",
});

export const VALIDATION_RULES = Object.freeze({
  [FIELD_IDS.email]: {
    regex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    emptyMessage: "이메일을 입력해주세요.",
    patternMismatchMessage: "잘못된 이메일 형식입니다.",
  },
  [FIELD_IDS.nickname]: {
    emptyMessage: "닉네임을 입력해주세요.",
  },
  [FIELD_IDS.password]: {
    regex: "^.{8,}$",
    emptyMessage: "비밀번호를 입력해주세요.",
    patternMismatchMessage: "비밀번호를 8자 이상 입력해주세요.",
  },
  [FIELD_IDS.passwordConfirm]: {
    regex: "^.{8,}$",
    emptyMessage: "비밀번호를 다시 입력해주세요.",
    patternMismatchMessage: "비밀번호를 8자 이상 입력해주세요.",
    passwordMismatchMessage: "비밀번호가 일치하지 않습니다.",
  },
});
