import { validateEmail, validatePassword } from './validation/validation.js';

document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginButton = document.querySelector('.auth__button');
  const loginForm = document.querySelector('form');

  const showError = (input, message) => {
    const wrapper = input.closest('.auth__input');
    wrapper.classList.add('auth__input-error');

    let errorMessage = wrapper.querySelector('.auth__error-message');
    if (!errorMessage) {
      errorMessage = document.createElement('span');
      errorMessage.className = 'auth__error-message';
      wrapper.appendChild(errorMessage);
    }
    errorMessage.innerText = message;
  };

  const hideError = input => {
    const wrapper = input.closest('.auth__input');
    wrapper.classList.remove('auth__input-error');

    const errorMessage = wrapper.querySelector('.auth__error-message');
    if (errorMessage) {
      errorMessage.remove();
    }
  };

  const updateButtonState = () => {
    const emailValid = !validateEmail(emailInput.value.trim());
    const passwordValid = !validatePassword(passwordInput.value.trim());
    loginButton.disabled = !(emailValid && passwordValid);
  };

  const validateEmailInput = () => {
    const email = emailInput.value.trim();
    hideError(emailInput);

    const error = validateEmail(email);
    if (error) {
      showError(emailInput, error);
    }

    updateButtonState();
  };

  const validatePasswordInput = () => {
    const password = passwordInput.value.trim();
    hideError(passwordInput);

    const error = validatePassword(password);
    if (error) {
      showError(passwordInput, error);
    }

    updateButtonState();
  };

  emailInput.addEventListener('blur', validateEmailInput);
  passwordInput.addEventListener('blur', validatePasswordInput);

  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const emailError = validateEmail(emailInput.value.trim());
    const passwordError = validatePassword(passwordInput.value.trim());

    if (!emailError && !passwordError) {
      window.location.href = '/items.html';
    }
  });
});
