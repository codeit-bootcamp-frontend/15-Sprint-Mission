import { emailInput, nicknameInput, pwdInput, checkPwdInput } from './constants.js';
import { emailErrorMessage, nicknameErrorMessage, pwdErrorMessage, checkPwdErrorMessage} from './constants.js';
import { exptext } from './constants.js';
import { submitBtn } from './constants.js';

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
    if (e.target.value === '') {
        setErrorMessage(emailInput, emailErrorMessage, '이메일을 입력해주세요.');
    } else if (exptext.test(e.target.value) === false) {
        setErrorMessage(emailInput, emailErrorMessage, '잘못된 이메일 형식입니다.');
    } else {
        clearErrorMessage(emailInput, emailErrorMessage);
    }
    activeBtn ()
}

function nicknameError (e) {
    if (e.target.value === '') {
        setErrorMessage(nicknameInput, nicknameErrorMessage, '닉네임을 입력해주세요.');
    } else {
        clearErrorMessage(nicknameInput, nicknameErrorMessage);
    }
    activeBtn ()
}

function pwdError (e) {
    if (e.target.value === '') {
        setErrorMessage(pwdInput, pwdErrorMessage, '비밀번호를 입력해주세요.');
    } else if (e.target.value.length < 8) {
        setErrorMessage(pwdInput, pwdErrorMessage, '비밀번호를 8자 이상 입력해주세요.');
    } else {
        clearErrorMessage(pwdInput, pwdErrorMessage);
    }
    activeBtn ()
}

pwdInput.addEventListener('focusout', pwdError);

function checkPwdError (e) {
    if (e.target.value !== pwdInput.value) {
        setErrorMessage(checkPwdInput, checkPwdErrorMessage, '비밀번호가 일치하지 않습니다.');
    } else {
        clearErrorMessage(checkPwdInput, checkPwdErrorMessage);
    }
    activeBtn ()
}

// 버튼 활성화
function activeBtn () {
    // 공통 필드
    const emailValid = (emailInput.value.trim() !== '') && (exptext.test(emailInput.value.trim()));
    const pwdValid = (pwdInput.value.trim() !== '') && (pwdInput.value.trim().length >= 8);

    // 회원가입 전용 필드
    const nicknameValid = !!nicknameInput ? (nicknameInput.value !== '') : true;
    const checkPwdValid = !!checkPwdInput ? (checkPwdInput.value === pwdInput.value) : true;

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

export { setErrorMessage, clearErrorMessage, emailError, nicknameError, pwdError, checkPwdError };
export { movePage };