import {
  passwordInput,
  confirmPasswordInput,
  passwordToggleBtn,
  confirmToggleBtn,
} from '../components/dom/auth.js';

const setupPasswordVisibility = () => {
  function togglePasswordVisibility(targetInput, toggleBtn) {
    const isPasswordHidden = targetInput.type === 'password';
    targetInput.type = isPasswordHidden ? 'text' : 'password';

    toggleBtn.classList.toggle('eye-open', isPasswordHidden);
    toggleBtn.classList.toggle('eye-closed', !isPasswordHidden);
  }

  toggleBtn.setAttribute(
    'aria-label',
    isPasswordHidden ? '비밀번호 숨기기' : '비밀번호 보기',
  );

  if (passwordInput && passwordToggleBtn) {
    passwordToggleBtn.addEventListener('click', () => {
      togglePasswordVisibility(passwordInput, passwordToggleBtn);
    });
  }

  if (confirmPasswordInput && confirmToggleBtn) {
    confirmToggleBtn.addEventListener('click', () => {
      togglePasswordVisibility(confirmPasswordInput, confirmToggleBtn);
    });
  }
};

setupPasswordVisibility();
