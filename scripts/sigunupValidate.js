const email = document.getElementById('email');
const emailError = document.getElementById('emailErrDiv');
const nickname = document.getElementById('name');
const nicknameError = document.getElementById('nicknameErrDiv');
const password = document.getElementById('password');
const passwordError = document.getElementById('passwordErrDiv');
const confirmPassword = document.getElementById('confirmPassword');
const confirmError = document.getElementById('confirmErrDiv');
const signupButton = document.getElementById('signupButton');

let emailCheck = false;
let nicknameCheck = false;
let passwordCheck = false;
let confirmPasswordCheck = false;
let isSignUpPossible = false;

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
  signUpCheck();
}

function validateNickname() {
  const nicknameValue = nickname.value.trim();

  if (nicknameValue === '') {
    nicknameError.textContent = '닉네임을 입력해주세요.';
    nickname.classList.add('invalid');
    nicknameCheck = false;
  } else {
    nicknameError.textContent = '';
    nicknameError.classList.remove('invalid');
    nicknameCheck = true;
  }
  signUpCheck();
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
  signUpCheck();
}

function validateConfirmPassword() {
  const confirmValue = confirmPassword.value.trim();
  const passwordValue = password.value.trim();

  if (confirmValue === '') {
    confirmError.textContent = '비밀번호를 입력해주세요.';
    confirmPassword.classList.add('invalid');
    confirmPasswordCheck = false;
  }

  if (confirmValue !== passwordValue) {
    confirmError.textContent = '비밀번호가 일치하지 않습니다.';
    confirmPassword.classList.add('invalid');
    confirmPasswordCheck = false;
  } else {
    confirmError.textContent = '';
    confirmPassword.classList.remove('invalid');
    confirmPasswordCheck = true;
  }

  signUpCheck();
}

function signUpCheck() {
  if (emailCheck && nicknameCheck && passwordCheck && confirmPasswordCheck) {
    isSignUpPossible = true;
    signupButton.classList.add('activate');
  } else {
    signupButton.classList.remove('active');
    isSignUpPossible = false;
  }
}

function SignUp() {
  if (isSignUpPossible) {
    location.href = '/pages/login.html';
  } else {
    window.alert('올바른 정보들을 입력해주세요');
  }
}

email.addEventListener('blur', validateEmail);
nickname.addEventListener('blur', validateNickname);
password.addEventListener('blur', validatePassword);
confirmPassword.addEventListener('blur', validateConfirmPassword);
signupButton.addEventListener('click', SignUp);
