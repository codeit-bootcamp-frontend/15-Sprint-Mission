const email = document.getElementById('email');
const password = document.getElementById('pwd');
const passwordConfirm = document.getElementsByClassName('pwd-confirm');
const username = document.getElementById('username');
let checkValid = true;

document.documentElement.style.setProperty('--red', '#F74747');

function validateInput(inputElement, messageElement, validateCallback) {
    const inputValue = inputElement.value;
    const validationMessage = validateCallback(inputValue);

    if(validationMessage) {
        messageElement.textContent = validationMessage;
        inputElement.style.border = '1px solid var(--red)';
        checkValid = false;
        return false;
    } else {
        messageElement.textContent = '';
        inputElement.style.border = 'none';
        checkValid = true;
        return true;
    }
}

function validateEmail(check_email){     
	const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(!check_email) {
        return '이메일을 입력해주세요';
    }
    if(!email_regex.test(check_email)) {
        return '잘못된 이메일 형식입니다';
    }
    return '';
}

function validatePassword(check_password) {
    if(!check_password) {
        return '비밀번호를 입력해주세요';
    } else if(check_password.length < 8) {
        return '비밀번호를 8자 이상 입력해주세요';
    } 
    return '';
}

email.addEventListener('focusout', function () {
    const message = document.querySelector('.message-email');
    validateInput(email, message, validateEmail);
})

password.addEventListener('focusout', function () {
    const message = document.querySelector('.message-password');
    validateInput(password, message, validatePassword);
})