const email = document.getElementById('email');
const password = document.querySelector('#pwd');
const passwordConfirm = document.querySelector('#pwd-confirm');
const username = document.getElementById('username');
const submitButton = document.querySelector('.submit-button');

document.documentElement.style.setProperty('--red', '#F74747');
document.documentElement.style.setProperty('--gray400', '#9CA3AF');

// 페이지 로드 시 버튼을 비활성화
submitButton.disabled = true;
submitButton.style.backgroundColor = 'var(--gray400)';

function enableButton(button) {
    button.disabled = false;
    button.style.backgroundColor = 'var(--blue100)';
}

function disableButton(button) {
    button.disabled = true;
    button.style.backgroundColor = 'var(--gray400)';
}

function checkFormValidity() {
    const isEmailValid = validateEmail(email.value) === '';
    const isPasswordValid = validatePassword(password.value) === '';
    const isPasswordConfirmValid = validatePasswordConfirm(passwordConfirm.value, password.value) === '';
    const isUsernameValid = validateUsername(username.value) === '';

    // 모든 입력값이 유효하면 버튼 활성화, 아니면 비활성화
    if (isEmailValid && isPasswordValid && isPasswordConfirmValid && isUsernameValid) {
        enableButton(submitButton);
    } else {
        disableButton(submitButton);
    }
}

function validateInput(inputElement, messageElement, validateCallback) {
    const inputValue = inputElement.value;
    const validationMessage = validateCallback(inputValue);

    if (validationMessage) {
        messageElement.textContent = validationMessage;
        inputElement.style.border = '1px solid var(--red)';
        return false;
    } else {
        messageElement.textContent = '';
        inputElement.style.border = 'none';
        return true;
    }
}

function validateEmail(check_email) {
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!check_email) {
        return '이메일을 입력해주세요';
    }
    if (!email_regex.test(check_email)) {
        return '잘못된 이메일 형식입니다';
    }
    return '';
}

function validatePassword(check_password) {
    if (!check_password) {
        return '비밀번호를 입력해주세요';
    } else if (check_password.length < 8) {
        return '비밀번호를 8자 이상 입력해주세요';
    }
    return '';
}

function validatePasswordConfirm(confirm_password, check_password) {
    if (confirm_password !== check_password) {
        return '비밀번호가 일치하지 않습니다.';
    }
    return '';
}

function validateUsername(check_username) {
    if (!check_username) {
        return '닉네임을 입력해주세요';
    }
    return '';
}

// focusout 이벤트 처리
email.addEventListener('focusout', function () {
    const message = document.querySelector('.message-email');
    validateInput(email, message, validateEmail);
    checkFormValidity(); // 폼 상태 체크
});

password.addEventListener('focusout', function () {
    const message = document.querySelector('.message-password');
    validateInput(password, message, validatePassword);
    checkFormValidity(); // 폼 상태 체크
});

passwordConfirm.addEventListener('focusout', function () {
    const message = document.querySelector('.message-password-confirm');
    validateInput(passwordConfirm, message, (value) => validatePasswordConfirm(value, password.value));
    checkFormValidity(); // 폼 상태 체크
});

username.addEventListener('focusout', function () {
    const message = document.querySelector('.message-username');
    validateInput(username, message, validateUsername);
    checkFormValidity(); // 폼 상태 체크
});

// input 이벤트 처리
email.addEventListener('input', checkFormValidity);
password.addEventListener('input', checkFormValidity);
passwordConfirm.addEventListener('input', checkFormValidity);
username.addEventListener('input', checkFormValidity);