const loginEmail = document.getElementById("login-email");
const emailAlert = document.getElementById("login-email-alert");
const loginPassword = document.getElementById("login-password");
const passwordAlert = document.getElementById("login-password-alert");
const loginBtn = document.getElementById("login-submit");
const toggleBtn = document.getElementById("toggle-password");
const eyeIcon = document.getElementById("eye-icon");

// 로그인 버튼 상태 업데이트 함수
const loginBtnUpdate = () => {
  // loginBtn이 disabled 되는 조건
  const isEmailEmpty = loginEmail.value.trim() === "";
  const isPasswordEmpty = loginPassword.value.trim() === "";
  const isEmailError = !emailAlert.classList.contains("hidden");
  const isPasswordError = !passwordAlert.classList.contains("hidden");

  // 조건 중 하나라도 만족하면 버튼 비활성화
  if (isEmailEmpty || isPasswordEmpty || isEmailError || isPasswordError) {
    loginBtn.disabled = true;
  } else {
    loginBtn.disabled = false;
  }
};

// 에러 메세지를 보여주는 함수
const showErrorMessage = (message, inputElement, alert) => {
  alert.innerText = message;
  alert.classList.remove("hidden");
  inputElement.style.border = `1px solid var(--alert-color)`;
};

// 에러 메세지를 숨기는 함수
const hiddenErrorMessage = (inputElement, alert) => {
  alert.innerText = "";
  alert.classList.add("hidden");
  inputElement.style.border = "none";
};

function emailAlertFn(event) {
  const input = event.target.value;
  //이메일 정규식
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //이메일의 내용이 비어있을 경우
  if (input === "") {
    showErrorMessage("이메일을 입력해주세요.", loginEmail, emailAlert);
    loginBtnUpdate();
    return;
  }

  // 이메일 형식이 맞지 않은 경우
  if (!emailPattern.test(input)) {
    showErrorMessage("잘못된 이메일 형식입니다.", loginEmail, emailAlert);
    loginBtnUpdate();
    return;
  }

  // 이메일이 정상일 경우 원래대로 바꾸기
  hiddenErrorMessage(loginEmail, emailAlert);
  loginBtnUpdate();
}

function passwordAlertFn(event) {
  const input = event.target.value;
  // 패스워드가 없을 경우
  if (input === "") {
    showErrorMessage("비밀번호를 입력해주세요.", loginPassword, passwordAlert);
    loginBtnUpdate();
    return;
  }
  // 패스워드가 8자보다 작은 경우우
  if (input.length < 8) {
    showErrorMessage(
      "비밀번호를 8자 이상 입력해주세요.",
      loginPassword,
      passwordAlert
    );
    loginBtnUpdate();
    return;
  }
  // 비밀번호가 정상일 경우 원래대로 바꾸기
  hiddenErrorMessage(loginPassword, passwordAlert);
  loginBtnUpdate();
}

function handleLogin(event) {
  event.preventDefault();
  window.location.href = "/items";
}

function handleEyeIcon(event) {
  event.preventDefault();
  if (loginPassword.type === "password") {
    loginPassword.type = "text";
    eyeIcon.src = "../img/eye.png";
  } else {
    loginPassword.type = "password";
    eyeIcon.src = "../img/no-eye.png";
  }
}

loginEmail.addEventListener("focusout", emailAlertFn);
loginPassword.addEventListener("focusout", passwordAlertFn);
loginBtn.addEventListener("click", handleLogin);
toggleBtn.addEventListener("click", handleEyeIcon);
