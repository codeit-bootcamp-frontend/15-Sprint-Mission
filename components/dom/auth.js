export const form = document.querySelector('.auth-form');
export const authSubmitButton = document.querySelector('.auth-button');

export const emailInput = document.getElementById('email');
export const passwordInput = document.getElementById('password');
export const nicknameInput = document.getElementById('nickname');
export const confirmPasswordInput = document.getElementById('password-confirm');

export const authType = form?.dataset.authType;

export const passwordToggleBtn = document.getElementById('password-visibility');
export const confirmToggleBtn = document.getElementById(
  'password-confirm-visibility',
);
