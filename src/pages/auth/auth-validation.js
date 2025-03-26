import './password-visibility.js';
import { validateEmail } from '../utils/validators.js';
import { toggleError } from '../utils/form.js';
import { ERROR_MESSAGES } from '../constants/messages/auth.js';
import { debounce } from '../utils/debounce.js';
import {
  form,
  authSubmitButton,
  emailInput,
  passwordInput,
  nicknameInput,
  confirmPasswordInput,
  authType,
} from '../components/dom/auth.js';
import { PAGE_URLS } from '../constants/urls/page-urls.js';

const validateEmailInput = () => {
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    toggleError(emailInput, ERROR_MESSAGES.emailRequired, false);
    return;
  }

  if (!validateEmail(emailValue)) {
    toggleError(emailInput, ERROR_MESSAGES.invalidEmail, false);
    return;
  }

  toggleError(emailInput, '', true);
};

const validateNicknameInput = () => {
  const nicknameValue = nicknameInput.value.trim();
  if (nicknameValue === '') {
    toggleError(nicknameInput, ERROR_MESSAGES.nicknameRequired, false);
    return;
  }
  toggleError(nicknameInput, '', true);
};

const validatePasswordInput = () => {
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === '') {
    toggleError(passwordInput, ERROR_MESSAGES.passwordRequired, false);
    return;
  }

  if (passwordValue.length < 8) {
    toggleError(passwordInput, ERROR_MESSAGES.passwordLength, false);
    return;
  }
  toggleError(passwordInput, '', true);
};

const validateConfirmPasswordInput = () => {
  const confirmPasswordValue = confirmPasswordInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  if (confirmPasswordValue === '') {
    toggleError(
      confirmPasswordInput,
      ERROR_MESSAGES.confirmPasswordRequired,
      false,
    );
    return;
  }

  if (confirmPasswordValue && confirmPasswordValue !== passwordValue) {
    toggleError(confirmPasswordInput, ERROR_MESSAGES.passwordMismatch, false);
    return;
  }
  toggleError(confirmPasswordInput, '', true);
};

// 인풋 유효성 검사
const validateInput = (target) => {
  const { id } = target;

  if (id === 'email') validateEmailInput();
  if (id === 'password') validatePasswordInput();
  if (id === 'nickname' && authType === 'signup') validateNicknameInput();
  if (id === 'password-confirm' && authType === 'signup')
    validateConfirmPasswordInput();
};

// 전체 폼 유효성 검사
const validateForm = () => {
  let isFormValid = true;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const nicknameValue = nicknameInput ? nicknameInput.value.trim() : '';
  const confirmPasswordValue = confirmPasswordInput
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

/* ------------------------이벤트 리스너 등록-------------------------- */
form.addEventListener('focusout', function (event) {
  if (event.target.matches('input')) {
    validateInput(event.target);
  }
});

// '비번' 입력 시 '비번확인' 입력 값도 같이 검사,debounce로 입력이 멈추면 검사
passwordInput.addEventListener(
  'input',
  debounce(() => {
    validatePasswordInput();
    if (confirmPasswordInput && confirmPasswordInput.value.trim() !== '') {
      validateConfirmPasswordInput();
    }
  }, 500),
);

if (confirmPasswordInput) {
  confirmPasswordInput.addEventListener('input', () => {
    validateConfirmPasswordInput();
  });
}

// 인풋 입력 시 제출 버튼 상태 업데이트(form이 유효성 검사를 통과하면 focus를 옮기지 않아도 자동 버튼 활성화되도록)
// 인풋이 바뀔 때마다 유효성 검사 너무 자주 실행되면 성능에 부담이 생기니까 debounce로 제어
form.addEventListener(
  'input',
  debounce(() => {
    updateSubmitButtonState();
  }, 100),
);

// 폼 제출 시 전체 폼 검증 후 페이지 이동 처리
form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!validateForm()) return;

  if (authType === 'signup') {
    window.location.href = PAGE_URLS.SIGNIN;
  } else if (authType === 'signin') {
    window.location.href = PAGE_URLS.ITEMS;
  }
});
