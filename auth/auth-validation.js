import { ERROR_MESSAGES } from '../constants/auth-validation-messages.js';

// 이메일 형식 검증
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(String(email));
}

// 검증 에러 메시지 표시 (에러 메시지를 어떤 input과 연결할지 명확히 하기 위해 input.closest를 사용)
function toggleError(targetInput, message, isValid) {
  const inputContainer = targetInput.closest('.input-container');
  if (!inputContainer) return;

  const errorContainer = inputContainer.querySelector(
    '.validation-error-message',
  );

  if (isValid === false) {
    targetInput.classList.add('error-input');
    errorContainer.textContent = message;
    errorContainer.classList.add('active');
  } else {
    targetInput.classList.remove('error-input');
    errorContainer.textContent = '';
    errorContainer.classList.remove('active');
  }
}

// input 입력 값 검증
function checkInputs(target, authSubmitButton) {
  const emailInput = document.getElementById('email');
  const nicknameInput = document.getElementById('nickname');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('password-confirm');

  const emailValue = emailInput.value.trim();
  const nicknameValue = nicknameInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  let isValid = true;

  if (target === emailInput) {
    if (emailValue === '') {
      isValid = false;
      toggleError(emailInput, ERROR_MESSAGES.emailRequired, isValid);
    } else if (!validateEmail(emailValue)) {
      isValid = false;
      toggleError(emailInput, ERROR_MESSAGES.invalidEmail, isValid);
    } else {
      isValid = true;
      toggleError(emailInput, '', isValid);
    }
  }

  // -닉네임 검증
  if (target === nicknameInput) {
    if (nicknameValue === '') {
      isValid = false;
      toggleError(nicknameInput, ERROR_MESSAGES.nicknameRequired, isValid);
    } else {
      isValid = true;
      toggleError(nicknameInput, '', isValid);
    }
  }

  // -비밀번호 검증
  if (target === passwordInput) {
    if (passwordValue === '') {
      isValid = false;
      toggleError(passwordInput, ERROR_MESSAGES.passwordRequired, isValid);
    } else if (passwordValue.length < 8) {
      isValid = false;
      toggleError(passwordInput, ERROR_MESSAGES.passwordLength, isValid);
    } else {
      isValid = true;
      toggleError(passwordInput, '', isValid);
    }
  }

  // -비밀번호 확인 검증
  if (target === confirmPasswordInput) {
    if (confirmPasswordValue === '') {
      isValid = false;
      toggleError(
        confirmPasswordInput,
        ERROR_MESSAGES.confirmPasswordRequired,
        isValid,
      );
    } else if (passwordValue !== confirmPasswordValue) {
      isValid = false;
      toggleError(
        confirmPasswordInput,
        ERROR_MESSAGES.passwordMismatch,
        isValid,
      );
    } else {
      isValid = true;
      toggleError(confirmPasswordInput, '', isValid);
    }
  }

  authSubmitButton.disabled = !isValid;
}

function handleAuthForm() {
  const form = document.querySelector('.auth-form');
  const authSubmitButton = document.querySelector('.auth-button');

  form.addEventListener('focusout', function (event) {
    const target = event.target;

    if (target.matches('input')) {
      checkInputs(target, authSubmitButton);
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!authSubmitButton.disabled) {
      window.location.href = '/signup';
    }
  });
}

document.addEventListener('DOMContentLoaded', handleAuthForm);
