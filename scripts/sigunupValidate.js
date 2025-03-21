const email = document.getElementById('email');
const emailError = document.getElementById('emailErrDiv');
const nickname = document.getElementById('name');
const nicknameError = document.getElementById('nicknameErrDiv');
const password = document.getElementById('password');
const passwordError = document.getElementById('passwordErrDiv');
const confirmPassword = document.getElementById('confirmPassword');
const confirmError = document.getElementById('confirmErrDiv');

function validateEmail() {
  const emailValue = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '') {
    emailError.textContent = '이메일을 입력하세요.';
    email.classList.add('invalid');
    return false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = '잘못된 이메일 형식입니다.';
    email.classList.add('invalid');
    return false;
  } else {
    emailError.textContent = '';
    email.classList.remove('invalid');
    return true;
  }
}

function validateNickname() {
  const nicknameValue = nickname.value.trim();

  if (nicknameValue === '') {
    nicknameError.textContent = '닉네임을 입력해주세요.';
    nickname.classList.add('invaild');
    return false;
  } else {
    nicknameError.textContent = '';
    nicknameError.classList.remove('invalid');
    return true;
  }
}

function validatePassword() {
  const passwordValue = password.value.trim();

  if (passwordValue === '') {
    passwordError.textContent = '비밀번호를 입력해주세요.';
    password.classList.add('invalid');
    return false;
  } else if (passwordValue.length < 8) {
    passwordError.textContent = '비밀번호를 8자이상 입력해주세요.';
    password.classList.add('invalid');
    return false;
  } else {
    passwordError.textContent = '';
    password.classList.remove('invalid');
    return true;
  }
}

function validateConfirmPassword() {
  const confirmValue = confirmPassword.value.trim();
  const passwordValue = password.value.trim();

  if (confirmValue !== passwordValue) {
    console.log('달라!');
    return false;
  } else {
    console.log('같아');
  }
}

email.addEventListener('blur', validateEmail);
nickname.addEventListener('blur', validateNickname);
password.addEventListener('blur', validatePassword);
confirmPassword.addEventListener('blur', validateConfirmPassword);
