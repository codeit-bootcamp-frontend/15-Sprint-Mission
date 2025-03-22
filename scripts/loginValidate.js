const email = document.getElementById('email');
const emailError = document.getElementById('emailErrDiv');
const password = document.getElementById('password');
const passwordError = document.getElementById('passwordErrDiv');
const loginButton = document.getElementById('loginButton');

let emailCheck = false;
let passwordCheck = false;
let isLoginPossible = false;

function validateEmail() {
  const emailValue = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '') {
    emailError.textContent = '이메일을 입력하세요.';
    email.classList.add('invalid');
    emailCheck = false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = '잘못된 이메일 형식입니다.';
    email.classList.add('invalid');
    emailCheck = false;
  } else {
    emailError.textContent = '';
    email.classList.remove('invalid');
    emailCheck = true;
  }

  LoginCheck();
}

function validatePassword() {
  const passwordValue = password.value.trim();

  if (passwordValue === '') {
    passwordError.textContent = '비밀번호를 입력해주세요.';
    password.classList.add('invalid');
    passwordCheck = false;
  } else if (passwordValue.length < 8) {
    passwordError.textContent = '비밀번호를 8자이상 입력해주세요.';
    password.classList.add('invalid');
    passwordCheck = false;
  } else {
    passwordError.textContent = '';
    password.classList.remove('invalid');
    passwordCheck = true;
  }

  LoginCheck();
}

function LoginCheck() {
  if (emailCheck && passwordCheck) {
    isLoginPossible = true;
    loginButton.classList.add('activate');
  } else {
    loginButton.classList.remove('activate');
    isLoginPossible = false;
  }
}

function Login() {
  if (isLoginPossible) {
    location.href = '/pages/items.html';
  } else {
    window.alert('올바른 이메일/비밀번호를 입력해주세요.');
  }
}

email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);
loginButton.addEventListener('click', Login);
