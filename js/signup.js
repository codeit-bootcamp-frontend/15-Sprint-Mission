import {
  wrongInput,
  togglePasswordVisibility,
  activateButton,
  redirectToPage,
} from "./common.js";

const emailInput = document.querySelector("#input-email");
const nicknameInput = document.querySelector("#input-nickname");
const passwordInput = document.querySelector("#input-password");
const passwordCheckInput = document.querySelector("#input-password-check");
const signupButton = document.querySelector(".signup-page .submit-button");
const signupForm = document.querySelector(".signup-page .form-container");

const wrongEmail = document.createElement("span");
const wrongNickname = document.createElement("span");
const wrongPassword = document.createElement("span");
const wrongpasswordCheck = document.createElement("span");

const inputArray = [
  emailInput,
  nicknameInput,
  passwordInput,
  passwordCheckInput,
];

wrongEmail.classList.add("error-message");
wrongNickname.classList.add("error-message");
wrongPassword.classList.add("error-message");
wrongpasswordCheck.classList.add("error-message");

signupButton.disabled = true;

function validateEmail(input) {
  if (input.value === "") {
    return "이메일을 입력해주세요.";
  } else if (!input.checkValidity()) {
    return "잘못된 이메일 형식입니다.";
  }
}

function validateNickname(input) {
  if (input.value === "") {
    return "닉네임을 입력해주세요.";
  }
}

function validatePassword(input) {
  if (input.value === "") {
    return "비밀번호를 입력해주세요.";
  } else if (input.value.length < 8) {
    return "비밀번호를 8자 이상 입력해주세요.";
  }
}

function wrongPasswordCheckEvent() {
  if (passwordCheckInput.value === "") {
    wrongpasswordCheck.textContent = "";
    passwordCheckInput.classList.remove("warning", "done");
  } else if (passwordCheckInput.value !== passwordInput.value) {
    passwordCheckInput.classList.add("warning");
    passwordCheckInput.classList.remove("done");
    wrongpasswordCheck.textContent = "비밀번호가 일치하지 않습니다.";
  } else {
    passwordCheckInput.classList.remove("warning");
    passwordCheckInput.classList.add("done");
    wrongpasswordCheck.textContent = "";
  }
  passwordCheckInput.parentElement.appendChild(wrongpasswordCheck);
  if (wrongpasswordCheck.textContent === "") {
    passwordCheckInput.parentElement.removeChild(wrongpasswordCheck);
  }
}

/* email 에러 메시지 처리 */
emailInput.addEventListener("focusout", () =>
  wrongInput(emailInput, wrongEmail, validateEmail)
);
emailInput.addEventListener("input", () =>
  wrongInput(emailInput, wrongEmail, validateEmail)
);

/* nickname 에러 메시지 처리 */
nicknameInput.addEventListener("focusout", () =>
  wrongInput(nicknameInput, wrongNickname, validateNickname)
);
nicknameInput.addEventListener("input", () =>
  wrongInput(nicknameInput, wrongNickname, validateNickname)
);

/* password 에러 메시지 처리 */
passwordInput.addEventListener("focusout", () =>
  wrongInput(passwordInput, wrongPassword, validatePassword)
);
passwordInput.addEventListener("input", () =>
  wrongInput(passwordInput, wrongPassword, validatePassword)
);

/* password-check 에러 메시지 처리 */
passwordInput.addEventListener("input", wrongPasswordCheckEvent); // password가 변경되어도 즉시 password-check과 비교
passwordCheckInput.addEventListener("focusout", wrongPasswordCheckEvent);
passwordCheckInput.addEventListener("input", wrongPasswordCheckEvent);

/* email, nickname, password, password-check에 유효한 값이 입력되면 회원가입 페이지 버튼 활성화 */
inputArray.forEach((input) => {
  input.addEventListener("input", () =>
    activateButton(signupButton, inputArray)
  );
});

inputArray.forEach((input) => {
  input.addEventListener("focusout", () =>
    activateButton(signupButton, inputArray)
  );
});

/* 회원가입 버튼 클릭시 로그인 페이지로 이동 */
signupForm.addEventListener("submit", (event) =>
  redirectToPage(event, "/login.html")
);

/* 눈모양 버튼 클릭시 */
document.querySelectorAll(".visibility").forEach((button) => {
  button.addEventListener("click", () => togglePasswordVisibility(button));
});
