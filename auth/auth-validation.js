const email = document.getElementById('emailId');
const nickname = document.getElementById('nicknameId');
const pwd = document.getElementById('pwdId');
const checkPwd = document.getElementById('checkPwdId');
const errorMessage = document.getElementsByClassName('error-message');

const emailErrorMessage = document.querySelector('.error-message.email');
const nicknameErrorMessage = document.querySelector('.error-message.nickname');
const pwdErrorMessage = document.querySelector('.error-message.pwd');
const checkPwdErrorMessage = document.querySelector('.error-message.check-pwd');

// 에러 메세지 추가
function setErrorMessage(field, errorPoint, message) {
    errorPoint.textContent = message;
    field.classList.add('error');
}
// 에러 메세지 삭제
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
    activeBtn ()
}

email.addEventListener('focusout', emailError);

function nicknameError (e) {
    if (e.target.value === '') {
        setErrorMessage(nickname, nicknameErrorMessage, '닉네임을 입력해주세요.');
    } else {
        clearErrorMessage(nickname, nicknameErrorMessage);
    }
    activeBtn ()
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
    activeBtn ()
}

pwd.addEventListener('focusout', pwdError);

function checkPwdError (e) {
    if (e.target.value !== pwd.value) {
        setErrorMessage(checkPwd, checkPwdErrorMessage, '비밀번호가 일치하지 않습니다.');
    } else {
        clearErrorMessage(checkPwd, checkPwdErrorMessage);
    }
    activeBtn ()
}

checkPwd?.addEventListener('focusout', checkPwdError);

const submitBtn = document.getElementById('submitBtn');

// 버튼 활성화
function activeBtn () {
    // 공통 필드
    const emailValid = (email.value.trim() !== '') && (/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/.test(email.value.trim()));
    const pwdValid = (pwd.value.trim() !== '') && (pwd.value.trim().length >= 8);

    // 회원가입 전용 필드
    const nicknameValid = !!nickname ? (nickname.value !== '') : true;
    const checkPwdValid = !!checkPwd ? (checkPwd.value === pwd.value) : true;

    if (emailValid && pwdValid && nicknameValid && checkPwdValid) {
        submitBtn.classList.remove('disabled');
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.classList.add('disabled');
        submitBtn.setAttribute('disabled', true);
    }
}
function movePage(e) {
    e.preventDefault();
    if (window.location.pathname === '/auth/signin') {
        location.href = '/items';
    } else if (window.location.pathname === '/auth/signup') {
        location.href = '/auth/signin';
    }
}

submitBtn.addEventListener('click', movePage);