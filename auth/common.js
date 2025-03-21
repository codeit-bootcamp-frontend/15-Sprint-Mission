// 필요한 태그 변수로 선언
const button = document.querySelector(".button-submit");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputNickName = document.querySelector("#nickname");
const inputPasswordConfirm = document.querySelector("#password-confirm");

// 초기 버튼 비활성화
button.disabled = true;
button.style.cursor = "not-allowed";

// input 타입별 error메세지 변수
// const errorMessage = document.querySelector(".error-message");
const emailError = document.querySelector(".email-error");
const pwError = document.querySelector(".pw-error");
const nicknameError = document.querySelector(".nickname-error");
const pwConfirmError = document.querySelector(".pwconfirm-error");

// 공통된 에러 메시지 표시 함수
const showError = (input, errorElement, message) => {
  errorElement.textContent = message;
  errorElement.style.display = "block";
  input.classList.add("error");
};

// 공통된 에러 메시지 숨기기 함수
const hiddenError = (input, errorElement) => {
  errorElement.textContent = "";
  errorElement.style.display = "none";
  input.classList.remove("error");
};

export {button, inputEmail, inputPassword, inputNickName, inputPasswordConfirm ,emailError, pwError, nicknameError, pwConfirmError, showError, hiddenError};