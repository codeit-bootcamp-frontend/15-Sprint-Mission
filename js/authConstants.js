const inputs = document.querySelectorAll('.auth__input');
const loginButton = document.querySelector('.login-button');
const signUpButton = document.querySelector('.sign-up-button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const nickName = document.querySelector('#nickname');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.pasword-error');
const nickNameError = document.querySelector('.nickname-error');
const confirmError = document.querySelector('.confirm-error');
const visibilities = document.querySelectorAll('.auth__password-toggle');


export { inputs, loginButton, signUpButton, email, password, passwordConfirm, nickName, emailError, passwordError, nickNameError, confirmError, visibilities}; 