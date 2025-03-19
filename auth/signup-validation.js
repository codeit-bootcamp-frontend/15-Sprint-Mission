import {
  emailInput,
  nameInput,
  passwordInput,
  passwordCheckInput,
  emailPattern,
  emailError,
  passwordError,
  passwordCheckError,
  signupBtn,
  isEmailValid,
  isPasswordValid,
  isPasswordCheckValid,
} from "./validation-common.js";

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

  signupBtnToggle();
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

  passwordDblCheck(); // 비밀번호 확인 후, 비밀번호 수정 시 이를 감지 하지 못해서 추가. (즉시 검사하는 함수)
  signupBtnToggle();
};

const passwordDblCheck = () => {
  const passwordCheckValue = passwordCheckInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  isPasswordCheckValid.value = false;

  if (passwordCheckValue !== passwordValue) {
    passwordCheckError.textContent = "비밀번호가 일치하지 않습니다.";
    passwordCheckInput.classList.add("input-error");
    passwordCheckError.style.display = "block";
  } else {
    passwordCheckError.style.display = "none";
    passwordCheckInput.classList.remove("input-error");
    isPasswordCheckValid.value = true;
  }

  signupBtnToggle();
};

const signupBtnToggle = () => {
  if (isEmailValid.value && isPasswordValid.value && isPasswordCheckValid.value) {
    signupBtn.style.backgroundColor = "#3578e5";
    signupBtn.style.cursor = "pointer";
    signupBtn.disabled = false;
  } else {
    signupBtn.style.backgroundColor = "#9ca3af";
    signupBtn.style.color = "#f3f4f6";
    signupBtn.style.cursor = "not-allowed";
    signupBtn.disabled = true;
  }
};

// focusout 이벤트
emailInput.addEventListener("focusout", emailCheck);
passwordInput.addEventListener("focusout", passwordCheck);
passwordCheckInput.addEventListener("focusout", passwordDblCheck);

// 회원가입 버튼 요소 초기 상태 설정
signupBtn.style.cursor = "not-allowed";
signupBtn.disabled = true;
