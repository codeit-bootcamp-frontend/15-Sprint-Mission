import { emailInput, passwordInput, emailPattern, emailError, passwordError, loginBtn, isEmailValid, isPasswordValid } from "./validation-common.js";

// 이메일 유효성 검사 함수
const emailCheck = () => {
  // 이메일 값 공백 제거 후 가져오기.
  const emailValue = emailInput.value.trim();
  isEmailValid.value = false;

  if (emailValue === "") {
    emailError.textContent = "이메일을 입력해주세요.";
    emailError.style.display = "block";
    emailInput.classList.add("input-error");
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = "잘못된 이메일 형식입니다.";
    emailError.style.display = "block";
    emailInput.classList.add("input-error");
  } else {
    emailError.style.display = "none";
    emailInput.classList.remove("input-error");
    isEmailValid.value = true;
  }

  loginBtnToggle();
};

// 패스워드 유효성 검사 함수
const passwordCheck = () => {
  const passwordValue = passwordInput.value.trim();
  isPasswordValid.value = false;

  if (passwordValue === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordError.style.display = "block";
    passwordInput.classList.add("input-error");
  } else if (passwordValue.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordError.style.display = "block";
    passwordInput.classList.add("input-error");
  } else {
    passwordError.style.display = "none";
    passwordInput.classList.remove("input-error");
    isPasswordValid.value = true;
  }

  loginBtnToggle();
};

// 이메일, 패스워드 유효성 검사에 따른 로그인 버튼 활성화 함수
const loginBtnToggle = () => {
  if (isEmailValid.value && isPasswordValid.value) {
    loginBtn.style.backgroundColor = "#3578e5";
    loginBtn.style.cursor = "pointer";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#9ca3af";
    loginBtn.style.color = "#f3f4f6";
    loginBtn.style.cursor = "not-allowed";
    loginBtn.disabled = true;
  }
};

// focusout 이벤트
emailInput.addEventListener("focusout", emailCheck);
passwordInput.addEventListener("focusout", passwordCheck);

// 초기 로그인 버튼 비활성화
loginBtn.disabled = true;
loginBtn.style.cursor = "not-allowed";
