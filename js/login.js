import {
  wrongInput,
  togglePasswordVisibility,
  activateButton,
  redirectToPage,
} from "./common.js";

const emailInput = document.querySelector("#input-email");
const passwordInput = document.querySelector("#input-password");
const loginButton = document.querySelector(".login-page .submit-button");
const loginForm = document.querySelector(".login-page .form-container");

const wrongEmail = document.createElement("span");
const wrongPassword = document.createElement("span");

const inputArray = [emailInput, passwordInput];

wrongEmail.classList.add("error-message");
wrongPassword.classList.add("error-message");

loginButton.disabled = true;

function validateEmail(input) {
  if (input.value === "") {
    return "이메일을 입력해주세요.";
  } else if (!input.checkValidity()) {
    return "잘못된 이메일 형식입니다.";
  }
}

function validatePassword(input) {
  if (input.value === "") {
    return "비밀번호를 입력해주세요.";
  } else if (input.value.length < 8) {
    return "비밀번호를 8자 이상 입력해주세요.";
  }
}

/* email 에러 메시지 처리 */
emailInput.addEventListener("focusout", () =>
  wrongInput(emailInput, wrongEmail, validateEmail)
);
emailInput.addEventListener("input", () =>
  wrongInput(emailInput, wrongEmail, validateEmail)
);

/* password 에러 메시지 처리 */
passwordInput.addEventListener("focusout", () =>
  wrongInput(passwordInput, wrongPassword, validatePassword)
);
passwordInput.addEventListener("input", () =>
  wrongInput(passwordInput, wrongPassword, validatePassword)
);

/* email, password에 유효한 값이 입력되면 로그인 페이지 버튼 활성화 */
inputArray.forEach((input) => {
  input.addEventListener("input", () =>
    activateButton(loginButton, inputArray)
  );
});

inputArray.forEach((input) => {
  input.addEventListener("focusout", () =>
    activateButton(loginButton, inputArray)
  );
});

/* 로그인 버튼 클릭시 items 페이지로 이동 */
loginForm.addEventListener("submit", (event) =>
  redirectToPage(event, "/items.html")
);

/* 눈모양 버튼 클릭시 */
document.querySelectorAll(".visibility").forEach((button) => {
  button.addEventListener("click", () => togglePasswordVisibility(button));
});
