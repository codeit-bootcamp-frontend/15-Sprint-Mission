// 공통 입력 요소 ( 이메일, 비밀번호)
export const emailInput = document.querySelector("#form-email");
export const passwordInput = document.querySelector("#form-password");

// 회원가입 전용 입력 요소 (닉네임, 비밀번호 확인)
export const nameInput = document.querySelector("#form-name");
export const passwordCheckInput = document.querySelector("#form-password-check");

// 에러 메시지 요소 (이메일, 패스워드, 패스워드 확인)
export const emailError = document.querySelector("#email-error");
export const passwordError = document.querySelector("#password-error");
export const passwordCheckError = document.querySelector("#password-check-error");

// 로그인 및 회원가입 버튼
export const loginBtn = document.querySelector("#btn-login");
export const signupBtn = document.querySelector("#btn-signup");

// 유효성 검사 패턴
export const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 유효성 검사 상태 변수
// 원시타입으로 내보내면 에러가 났음.. 객체로 관리
export let isEmailValid = { value: false };
export let isPasswordValid = { value: false };
export let isPasswordCheckValid = { value: false };
