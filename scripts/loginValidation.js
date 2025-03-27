const email = document.getElementById('email');
const password = document.querySelector('#pwd');
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

    if (isEmailValid && isPasswordValid) {
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

email.addEventListener('focusout', function () {
    const message = document.querySelector('.message-email');
    const isValid = validateInput(email, message, validateEmail);
    checkFormValidity(); // 이메일 검사 후 폼 상태 체크
});

password.addEventListener('focusout', function () {
    const message = document.querySelector('.message-password');
    const isValid = validateInput(password, message, validatePassword);
    checkFormValidity(); // 비밀번호 검사 후 폼 상태 체크
});

email.addEventListener('input', checkFormValidity);  // 이메일 입력 시 체크
password.addEventListener('input', checkFormValidity); // 비밀번호 입력 시 체크
