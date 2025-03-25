import { ErrorMessage } from './validation_message.js';
import { initPasswordToggles } from './ui_common.js';

document.addEventListener('DOMContentLoaded', () => {  
  initPasswordToggles(); // 비밀번호 표시/숨김 아이콘 초기화

  const loginForm = document.getElementById('myFormlogin');
  const signupForm = document.getElementById('myFormSignUp');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // 폼과 제출 버튼, 페이지 유형을 저장할 변수들
  let form, submitButton, nicknameInput, confirmPasswordInput;
  let isLoginPage = false;
  let isSignupPage = false;

  // 폼 존재 여부를 확인 후 알맞은 값을 할당
  if (loginForm !== null) {
    isLoginPage = true;
    form = loginForm;
    submitButton = form.querySelector('.login');
  } else if (signupForm !== null) {
    isSignupPage = true;
    form = signupForm;
    submitButton = form.querySelector('.singup');
  } else {
    return false;
  }
  
  // 회원가입 페이지에서만 필요한 요소들 
  if (isSignupPage) {
    nicknameInput = document.getElementById('nickname');
    confirmPasswordInput = document.getElementById('confirmPassword');
  }
  
  // 에러 메시지 표시 함수
  function showError(input, message) {
    input.style.borderColor = '#F74747';
    const newErrorElement = document.createElement('p');
    newErrorElement.className = 'error-message';
    newErrorElement.textContent = message;
    newErrorElement.style.color = '#F74747';
    newErrorElement.style.fontWeight = '600';
    newErrorElement.style.margin = '10px 15px 0';
    newErrorElement.style.display = 'block';
    input.parentElement.appendChild(newErrorElement);
  }
  
  // 에러 메시지 제거 함수
  function removeError(input) {
    input.style.borderColor = '';
    const errorElement = input.parentElement.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }
  
  // 이메일 유효성 검사 (HTML5 내장 유효성 검사 활용)
  function checkEmail() {
    emailInput.type = 'email';
    const value = emailInput.value.trim();
    removeError(emailInput);
    if (value === '') {
      showError(emailInput, ErrorMessage.emailRequired);
      return false;
    }
    if (!emailInput.validity.valid) {
      showError(emailInput, ErrorMessage.invalidEmail);
      return false;
    }
    return true;
  }
  
  // 비밀번호 유효성 검사
  function checkPassword() {
    const value = passwordInput.value.trim();
    removeError(passwordInput);
    if (value === '') {
      showError(passwordInput, ErrorMessage.passwordRequired);
      return false;
    }
    if (value.length < 8) {
      showError(passwordInput, ErrorMessage.passwordLength);
      return false;
    }
    return true;
  }
  
  // 닉네임 유효성 검사 (회원가입 페이지 전용)
  function checkNickname() {
    if (!isSignupPage) return true;
    const value = nicknameInput.value.trim();
    removeError(nicknameInput);
    if (value === '') {
      showError(nicknameInput, ErrorMessage.nicknameRequired);
      return false;
    }
    return true;
  }
  
  // 비밀번호 확인 유효성 검사 (회원가입 페이지 전용)
  function checkConfirmPassword() {
    if (!isSignupPage) return true;
    const confirmValue = confirmPasswordInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    removeError(confirmPasswordInput);
    if (confirmValue === '') {
      showError(confirmPasswordInput, ErrorMessage.confirmPasswordRequired);
      return false;
    }
    if (confirmValue !== passwordValue) {
      showError(confirmPasswordInput, ErrorMessage.passwordMismatch);
      return false;
    }
    return true;
  }
  
  // 버튼 상태 업데이트 함수
  function updateButtonState() {
    const hasError = form.querySelector('.error-message') !== null;
    let allFieldsFilled =
      emailInput.value.trim() !== '' &&
      passwordInput.value.trim() !== '' &&
      passwordInput.value.trim().length >= 8;
    
    if (isSignupPage) {
      allFieldsFilled =
        allFieldsFilled &&
        nicknameInput.value.trim() !== '' &&
        confirmPasswordInput.value.trim() !== '';
    }
    
    if (!hasError && allFieldsFilled) {
      submitButton.disabled = false;
      submitButton.title = isLoginPage ? '로그인 가능상태' : '회원가입 가능상태';
      submitButton.textContent = isLoginPage ? '로그인' : '회원가입';
    } else {
      submitButton.disabled = true;
      submitButton.title = isLoginPage ? '정확한 로그인 정보를 입력하세요' : '정확한 회원가입 정보를 입력하세요';
      submitButton.textContent = isLoginPage ? '로그인' : '회원가입';
    }
  }
  
  // 이벤트 리스너 등록
  emailInput.addEventListener('blur', checkEmail);
  emailInput.addEventListener('input', updateButtonState);
  
  passwordInput.addEventListener('blur', checkPassword);
  passwordInput.addEventListener('input', () => {
    if (isSignupPage && confirmPasswordInput.value.trim() !== '') {
      checkConfirmPassword();
    }
    updateButtonState();
  });
  
  if (isSignupPage) {
    nicknameInput.addEventListener('blur', checkNickname);
    nicknameInput.addEventListener('input', updateButtonState);
    
    confirmPasswordInput.addEventListener('blur', checkConfirmPassword);
    confirmPasswordInput.addEventListener('input', updateButtonState);
  }
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (isLoginPage) {
      const isEmailValid = checkEmail();
      const isPasswordValid = checkPassword();
      if (isEmailValid && isPasswordValid) {
        navigateTo('../../html/items.html');
      }
    } else if (isSignupPage) {
      const isEmailValid = checkEmail();
      const isNicknameValid = checkNickname();
      const isPasswordValid = checkPassword();
      const isConfirmPasswordValid = checkConfirmPassword();
      if (isEmailValid && isNicknameValid && isPasswordValid && isConfirmPasswordValid) {
        navigateTo('../../html/login.html');
      }
    }
  });

  function navigateTo(url) {
    window.location.href = url;
  }
  
  updateButtonState();
});
