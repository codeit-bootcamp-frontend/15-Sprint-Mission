import { ERROR_MESSAGES } from '../constants/auth-validation-messages.js';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.auth-form');
  const authSubmitButton = document.querySelector('.auth-button');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const nicknameInput = document.getElementById('nickname');
  const confirmPasswordInput = document.getElementById('password-confirm');
  const authType = form.dataset.authType;

  let emailValue;
  let nicknameValue;
  let passwordValue;
  let confirmPasswordValue;

  // 이메일 형식 검증
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email));
  }

  // 에러 메시지 표시
  function toggleError(targetInput, message, isInputValid) {
    const inputContainer = targetInput.closest('.input-container');
    if (!inputContainer) return;
    const errorContainer = inputContainer.querySelector(
      '.validation-error-message',
    );
    if (!isInputValid) {
      targetInput.classList.add('error-input');
      errorContainer.textContent = message;
      errorContainer.classList.add('active');
    } else {
      targetInput.classList.remove('error-input');
      errorContainer.textContent = '';
      errorContainer.classList.remove('active');
    }
  }

  // 개별 인풋 검증: 포커스아웃된 input만 검증하고 에러 메시지 표시
  function validateInput(target) {
    if (target.id === 'email') {
      emailValue = emailInput.value.trim();

      if (emailValue === '') {
        toggleError(target, ERROR_MESSAGES.emailRequired, false);
      } else if (!validateEmail(emailValue)) {
        toggleError(target, ERROR_MESSAGES.invalidEmail, false);
      } else {
        toggleError(target, '', true);
      }
    }

    if (target.id === 'nickname' && authType === 'signup') {
      nicknameValue = nicknameInput.value.trim();
      if (nicknameValue === '') {
        toggleError(target, ERROR_MESSAGES.nicknameRequired, false);
      } else {
        toggleError(target, '', true);
      }
    }

    if (target.id === 'password') {
      passwordValue = passwordInput.value.trim();
      if (passwordValue === '') {
        toggleError(target, ERROR_MESSAGES.passwordRequired, false);
      } else if (passwordValue.length < 8) {
        toggleError(target, ERROR_MESSAGES.passwordLength, false);
      } else {
        toggleError(target, '', true);
      }
    }

    if (target.id === 'password-confirm' && authType === 'signup') {
      confirmPasswordValue = confirmPasswordInput.value.trim();
      if (confirmPasswordValue === '') {
        toggleError(target, ERROR_MESSAGES.confirmPasswordRequired, false);
      } else if (passwordValue !== confirmPasswordValue) {
        toggleError(target, ERROR_MESSAGES.passwordMismatch, false);
      } else {
        toggleError(target, '', true);
      }
    }
  }

  // 전체 폼 유효성 검사
  function validateForm() {
    let isFormValid = true;

    emailValue = emailInput.value.trim();
    passwordValue = passwordInput.value.trim();
    nicknameValue = nicknameInput ? nicknameInput.value.trim() : '';
    confirmPasswordValue = confirmPasswordInput
      ? confirmPasswordInput.value.trim()
      : '';

    if (emailValue === '' || !validateEmail(emailValue)) isFormValid = false;
    if (passwordValue === '' || passwordValue.length < 8) isFormValid = false;
    if (authType === 'signup') {
      if (nicknameValue === '') isFormValid = false;
      if (confirmPasswordValue === '' || passwordValue !== confirmPasswordValue)
        isFormValid = false;
    }
    return isFormValid;
  }

  // 제출 버튼 활성화 상태
  function updateSubmitButtonState() {
    authSubmitButton.disabled = !validateForm();
  }

  // 포커스아웃 시 인풋 유효성 검사, 버튼 상태 업데이트
  form.addEventListener('focusout', function (event) {
    if (event.target.matches('input')) {
      validateInput(event.target);
      updateSubmitButtonState();
    }
  });

  // 폼 제출 시 전체 폼 검증 후 페이지 이동 처리
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
      if (authType === 'signup') {
        window.location.href = '/signup';
      } else if (authType === 'login') {
        window.location.href = '/items';
      }
    }
  });
});
