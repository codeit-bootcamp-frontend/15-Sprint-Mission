import { button, inputEmail, inputPassword, inputNickName, inputPasswordConfirm, emailError, pwError, nicknameError, pwConfirmError, showError, hiddenError} from "./common.js";

// email 유효성 검사 패턴
const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// email 유효성 검사 및 에러 메세지
const isValidEmail = () => {
  const emailValue = inputEmail.value.trim(); // 이메일 입력값을 공백 제거 후 가져오기

  if (emailValue === "") {
    showError(inputEmail, emailError, "이메일을 입력해주세요.")
    return false;
  } else if (!pattern.test(emailValue)) { // 정규식으로 이메일 형식 검사하기
    showError(inputEmail, emailError, "잘못된 이메일 형식입니다.");
    return false;
  } else {
    hiddenError(inputEmail, emailError);
    return true;
  }
}

// nickanme 유효성 검사 및 에러 메세지
const isValidNickName = () => {
  const nicknameValue = inputNickName.value.trim();

  if (nicknameValue === "") {
    showError(inputNickName, nicknameError, "닉네임을 입력해주세요.");
    return false;
  } else {
    hiddenError(inputNickName, nicknameError);
    return true;
  }
}

// password 유효성 검사 및 에러 메세지
const isValidPassword = () => {
  const passwordValue = inputPassword.value.trim();

  if (!passwordValue) {
    showError(inputPassword, pwError, "비밀번호를 입력해주세요.");
    return false;
  } else if (passwordValue.length < 8) {
    showError(inputPassword, pwError, "비밀번호 8자 이상 입력해주세요.");
    return false;
  } else {
    hiddenError(inputPassword, pwError);
    return true;
  }
}

// password-confirm 유효성 검사 및 에러 메세지
const isValidPasswordConfrim = () => {
  const passwordConfirmValue = inputPasswordConfirm.value.trim();
  const passwordValue = inputPassword.value.trim();
  const diffPassword = (passwordConfirmValue === passwordValue);

  if (!diffPassword) {
    showError(inputPasswordConfirm, pwConfirmError, "비밀번호가 일치하지 않습니다.");
    return false;
  } else {
    hiddenError(inputPasswordConfirm, pwConfirmError);
    return true;
  }
}

// 버튼 활성화 함수
const validateButton = () => {
  if (isValidEmail() && isValidPassword() && isValidNickName() && isValidPasswordConfrim()) {
    button.disabled = false;
    button.style.cursor = "pointer";
  } else {
    button.disabled = true;
  }
}

// 회원가입 버튼 활성화시 login페이지로 이동
const signupButton = document.querySelector("#button-signup");

signupButton.onclick = () => {
  if (!button.disabled) {
    location.href = "/auth/login.html";  // 로그인 페이지로 이동
  }
};

// 이벤트 리스너 추가
inputEmail.addEventListener("input", validateButton);
inputPassword.addEventListener("input", validateButton);
inputNickName.addEventListener("input", validateButton);
inputPasswordConfirm.addEventListener("input", validateButton);

inputEmail.addEventListener("focusout", isValidEmail);
inputPassword.addEventListener("focusout", isValidPassword);
inputNickName.addEventListener("focusout", isValidNickName);
inputPasswordConfirm.addEventListener("focusout", isValidPasswordConfrim);