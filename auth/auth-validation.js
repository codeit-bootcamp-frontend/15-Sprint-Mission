import './password-visibility.js';
import { validateEmail } from '../utils/validators.js';
import { toggleError } from '../utils/form.js';
import { ERROR_MESSAGES } from '../constants/messages/auth.js';
import {
  form,
  authSubmitButton,
  emailInput,
  passwordInput,
  nicknameInput,
  confirmPasswordInput,
  authType,
} from '../components/dom/auth.js';

let emailValue;
let nicknameValue;
let passwordValue;
let confirmPasswordValue;

// 개별 인풋 검증: 포커스아웃된 input만 검증하고 에러 메시지 표시
const validateInput = (target) => {
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
};

// 전체 폼 유효성 검사
const validateForm = () => {
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
};

// 제출 버튼 활성화 상태
const updateSubmitButtonState = () => {
  authSubmitButton.disabled = !validateForm();
};

// 포커스아웃 시 인풋 유효성 검사
form.addEventListener('focusout', function (event) {
  if (event.target.matches('input')) {
    validateInput(event.target);
  }
});

// input 이벤트에 적용(input이 변할때마다 이벤트가 발생하는 것을 막기 위해 넣었지만 원리는 이해 더 필요)
const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

// 인풋 입력 시 버튼 상태 업데이트(form이 유효성 검사를 통과하면 focus를 옮기지 않아도 자동 버튼 활성화되도록)
form.addEventListener(
  'input',
  debounce((event) => {
    updateSubmitButtonState();
  }, 300),
);

// 폼 제출 시 전체 폼 검증 후 페이지 이동 처리
form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (validateForm()) {
    if (authType === 'signup') {
      window.location.href = '/signin';
    } else if (authType === 'signin') {
      window.location.href = '/items';
    }
  }
});
