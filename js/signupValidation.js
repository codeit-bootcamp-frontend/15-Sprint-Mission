const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nicknameInput = document.getElementById("nickname");
const passwordConfirmInput = document.getElementById("password-confirm");
const loginButton = document.getElementById("login-btn");

const emailError = document.getElementById("email-error");
const nicknameError = document.getElementById("nickname-error");
const passwordError = document.getElementById("password-error");
const passwordConfirmError = document.getElementById("password-confirm-error");

// 로그인 버튼 속성 조절을 위한 boolean 값
// 모든 입력 값이 true일 때 버튼 활성화
let isValidEmail = false;
let isValidNickname = false;
let isValidPassword = false;
let isValidPasswordConfirm = false;

const validateEmail = () => {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailValue) {
    emailError.textContent = "이메일을 입력해주세요.";
    emailInput.classList.add("error-input");
    isValidEmail = false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = "잘못된 이메일 형식입니다.";
    emailInput.classList.add("error-input");
    isValidEmail = false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error-input");
    isValidEmail = true;
  }

  toggleLoginButton();
};

const validateNickname = () => {
  const nicknameValue = nicknameInput.value.trim();

  if (!nicknameValue) {
    nicknameError.textContent = "닉네임을 입력해주세요.";
    nicknameError.classList.add("nick-error-box");
    nicknameInput.classList.add("error-input");
    isValidNickname = false;
  } else {
    nicknameError.textContent = "";
    nicknameError.classList.remove("email-error-box");
    nicknameInput.classList.remove("error-input");
    isValidNickname = true;
  }

  toggleLoginButton();
};

const validatePassword = () => {
  const passwordValue = passwordInput.value.trim();

  if (!passwordValue) {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordInput.classList.add("error-input");
    isValidPassword = false;
  } else if (passwordValue.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordInput.classList.add("error-input");
    isValidPassword = false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("error-input");
    isValidPassword = true;
  }

  toggleLoginButton();
};

const validatePasswordConfirm = () => {
  const passwordValue = passwordInput.value.trim();
  const passwordConfirmValue = passwordConfirmInput.value.trim();

  if (passwordValue !== passwordConfirmValue) {
    passwordConfirmError.textContent = "비밀번호가 일치하지 않습니다.";
    passwordConfirmInput.classList.add("error-input");
    isValidPasswordConfirm = false;
  } else {
    passwordConfirmError.textContent = "";
    passwordConfirmInput.classList.remove("error-input");
    isValidPasswordConfirm = true;
  }

  toggleLoginButton();
};

const toggleLoginButton = () => {
  if (
    isValidEmail &&
    isValidNickname &&
    isValidPassword &&
    isValidPasswordConfirm
  ) {
    loginButton.removeAttribute("disabled");
    loginButton.classList.add("abled");
  } else {
    loginButton.setAttribute("disabled", true);
    loginButton.classList.remove("abled");
  }
};

emailInput.addEventListener("focusout", validateEmail);
nicknameInput.addEventListener("focusout", validateNickname);
passwordInput.addEventListener("focusout", validatePassword);
passwordConfirmInput.addEventListener("focusout", validatePasswordConfirm);

loginButton.addEventListener("click", (e) => {
  validateEmail();
  validateNickname();
  validatePassword();
  validatePasswordConfirm();

  if (
    !isValidEmail ||
    !isValidPassword ||
    !isValidNickname ||
    !isValidPasswordConfirm
  ) {
    e.preventDefault();
  }

  alert("회원가입이 완료 됐습니다. 이메일과 비밀번호로 로그인 해주세요!");
});
