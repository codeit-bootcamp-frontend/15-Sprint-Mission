import { validateEmail, isPasswordValid, isEmpty } from "/js/common/formValidator.js";

const emailInput = document.getElementById("inputEmail");
const pwdInput = document.getElementById("inputPwd");

const emailValidError = document.getElementById("emailValidError");
const pwdValidError = document.getElementById("pwdValidError");

const loginBtn = document.getElementById("loginBtn");

const EMAIL_EMPTY_ERROR_MSG = "이메일을 입력해주세요.";
const EMAIL_VALID_ERROR_MSG = "잘못된 이메일 형식입니다.";
const PWD_EMPTY_ERROR_MSG = "비밀번호를 입력해주세요.";
const PWD_LENGTH_ERROR_MSG = "비밀번호를 8자 이상 입력해주세요.";

// 에러 메세지 표시
function showError(inputEl, errorEl, message) {
  inputEl.classList.add('error');
  inputEl.classList.remove("success");
  errorEl.textContent = message;
};

// 에러 메세지 제거
function clearError(inputEl, errorEl) {
  inputEl.classList.remove('error');
  inputEl.classList.add('success');
  errorEl.textContent = '';
};

/**
 * 입력값들의 유효성을 검사한 후,
 * 모든 항목이 유효할 경우 회원가입 버튼이 활성화
 * 그렇지 않으면 비활성화
 */
function toggleButtonState() {
  const isEmailValid = !isEmpty(emailInput.value) && validateEmail(emailInput.value);
  const isPwdValid = !isEmpty(pwdInput.value) && isPasswordValid(pwdInput.value);

  const isFormValid = isEmailValid && isPwdValid;

  if (isFormValid) {
    loginBtn.setAttribute("aria-disabled", "false");
    loginBtn.classList.remove("disabled");
  } else {
    loginBtn.setAttribute("aria-disabled", "true");
    loginBtn.classList.add("disabled");
  }
}

// 초기 상태에서 회원가입 버튼 비활성화 처리
document.addEventListener("DOMContentLoaded", () => {
  loginBtn.setAttribute("aria-disabled", "true");
  loginBtn.classList.add("disabled");
  setupPasswordToggle();
});

// 이메일 유효성 검사
emailInput.addEventListener("input", () => {
  if (isEmpty(emailInput.value)) {
    showError(emailInput, emailValidError, EMAIL_EMPTY_ERROR_MSG);
    return;
  } else if (!validateEmail(emailInput.value)) {
    showError(emailInput, emailValidError, EMAIL_VALID_ERROR_MSG);
    return;
  } else {
    clearError(emailInput, emailValidError);
  }
  toggleButtonState();
});

// 비밀번호 유효성 검사
pwdInput.addEventListener("input", () => {
  if (isEmpty(pwdInput.value)) {
    showError(pwdInput, pwdValidError, PWD_EMPTY_ERROR_MSG);
  } else if (!isPasswordValid(pwdInput.value)) {
    showError(pwdInput, pwdValidError, PWD_LENGTH_ERROR_MSG);
  } else {
    clearError(pwdInput, pwdValidError);
  }
  toggleButtonState();
});

// 비밀번호 숨김 버튼
function setupPasswordToggle() {
  const toggleButtons = document.querySelectorAll('.toggle-password');

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = btn.previousElementSibling;
      const img = btn.querySelector("img");

      const isHidden = input.type === "password";

      input.type = isHidden ? "text" : "password";
      img.src = isHidden
        ? "/assets/visibility_on.png"
        : "/assets/visibility_off.png";
      img.alt = isHidden ? "비밀번호 보이기" : "비밀번호 숨기기";
      btn.setAttribute("aria-label", isHidden ? "비밀번호 보이기" : "비밀번호 숨기기");
    });
  });
}

// 버튼이 활성화된 경우에만 로그인 페이지로 이동
loginBtn.addEventListener("click", (e) => {
  if (loginBtn.getAttribute("aria-disabled") === "true") {
    e.preventDefault();
    return;
  }
  window.location.href = "/items.html";
});