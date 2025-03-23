const emailInput = document.getElementById('emailId');
const nicknameInput = document.getElementById('nicknameId');
const pwdInput = document.getElementById('pwdId');
const checkPwdInput = document.getElementById('checkPwdId');

const emailErrorMessage = document.querySelector('.error-message.email');
const nicknameErrorMessage = document.querySelector('.error-message.nickname');
const pwdErrorMessage = document.querySelector('.error-message.pwd');
const checkPwdErrorMessage = document.querySelector('.error-message.check-pwd');

const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

const submitBtn = document.getElementById('submitBtn');

export { emailInput, nicknameInput, pwdInput, checkPwdInput };
export { emailErrorMessage, nicknameErrorMessage, pwdErrorMessage, checkPwdErrorMessage};
export { exptext };
export { submitBtn };