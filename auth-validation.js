const email = document.getElementById('emailId');
const nickname = document.getElementById('nicknameId');
const pwd = document.getElementById('pwdId');
const checkPwd = document.getElementById('checkPwdId');
const errorMessage = document.getElementsByClassName('error-message');

const emailErrorMessage = document.querySelector('.error-message.email');
const nicknameErrorMessage = document.querySelector('.error-message.nickname');
const pwdErrorMessage = document.querySelector('.error-message.pwd');
const checkPwdErrorMessage = document.querySelector('.error-message.check-pwd');

// error 메세지 추가
function setErrorMessage(field, errorPoint, message) {
    errorPoint.textContent = message;
    field.classList.add('error');
}
// error 메세지 삭제
function clearErrorMessage(field, errorPoint) {
    errorPoint.textContent = '';
    field.classList.remove('error');
}

function emailError (e) {
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (e.target.value === '') {
        setErrorMessage(email, emailErrorMessage, '이메일을 입력해주세요.');
    } else if (exptext.test(e.target.value) === false) {
        setErrorMessage(email, emailErrorMessage, '잘못된 이메일 형식입니다.');
    } else {
        clearErrorMessage(email, emailErrorMessage);
    }
}

email.addEventListener('focusout', emailError);

function nicknameError (e) {
    if (e.target.value === '') {
        setErrorMessage(nickname, nicknameErrorMessage, '닉네임을 입력해주세요.');
    } else {
        clearErrorMessage(nickname, nicknameErrorMessage);
    }
}

nickname ?. addEventListener('focusout', nicknameError);

function pwdError (e) {
    if (e.target.value === '') {
        setErrorMessage(pwd, pwdErrorMessage, '비밀번호를 입력해주세요.');
    } else if (e.target.value.length < 8) {
        setErrorMessage(pwd, pwdErrorMessage, '비밀번호를 8자 이상 입력해주세요.');
    } else {
        clearErrorMessage(pwd, pwdErrorMessage);
    }
}

pwd.addEventListener('focusout', pwdError);

function checkPwdError (e) {
    if (e.target.value !== pwd.value) {
        setErrorMessage(checkPwd, checkPwdErrorMessage, '비밀번호가 일치하지 않습니다.');
    } else {
        clearErrorMessage(checkPwd, checkPwdErrorMessage);
    }
}

checkPwd ?.addEventListener('focusout', checkPwdError);

