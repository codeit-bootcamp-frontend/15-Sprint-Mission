const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-btn");

const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

// 로그인 버튼 속성 조절을 위한 boolean 값
// 이메일과 비밀번호가 모두 true일 때 able 버튼이 된다
let isValidEmail = false;
let isValidPassword = false;

const validateEmail = () => {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailValue) {
    emailError.textContent = "이메일을 입력해주세요.";
    emailError.classList.add("email-error-box");
    emailInput.classList.add("error-input");
    isValidEmail = false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = "잘못된 이메일 형식입니다.";
    emailError.classList.add("email-error-box");
    emailInput.classList.add("error-input");
    isValidEmail = false;
  } else {
    emailError.textContent = "";
    emailError.classList.remove("email-error-box");
    emailInput.classList.remove("error-input");
    isValidEmail = true;
  }

  toggleLoginButton();
};

const validatePassword = () => {
  const passwordValue = passwordInput.value.trim();

  if (!passwordValue) {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordError.classList.add("password-error-box");
    passwordInput.classList.add("error-input");
    isValidPassword = false;
  } else if (passwordValue.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordError.classList.add("password-error-box");
    passwordInput.classList.add("error-input");
    isValidPassword = false;
  } else {
    passwordError.textContent = "";
    passwordError.classList.remove("password-error-box");
    passwordInput.classList.remove("error-input");
    isValidPassword = true;
  }

  toggleLoginButton();
};

const toggleLoginButton = () => {
  if (isValidEmail && isValidPassword) {
    loginButton.removeAttribute("disabled");
    loginButton.classList.add("abled");
  } else {
    loginButton.setAttribute("disabled", true);
    loginButton.classList.remove("abled");
  }
};

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
loginButton.addEventListener("click", (e) => {
  validateEmail();
  validatePassword();
  if (!isValidEmail || !isValidPassword) {
    e.preventDefault();
  }
});
