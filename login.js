
const userEmailField = document.querySelector('#email');
const emailErrorMessage = document.querySelector('.email-field .error-message');
const userPasswordField = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('.password-field .error-message');
const loginButton = document.querySelector(".login-button");

const validEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.(\.[a-zA-Z]{2,3})$/;

document.getElementById('email').autocomplete = 'off';
document.getElementById('password').autocomplete = 'off';

//버튼 유효성 검사
let isEmailValid = false;
let isPasswordValid = false;

function handleFormEmail(event) {
    const input = userEmailField.value;
    if ( input === '') {
        emailErrorMessage.textContent = "이메일을 입력해주세요";
        emailErrorMessage.style.color = 'red';
        userEmailField.style.border = '1px solid red';
        isEmailValid = false;
    } else if (validEmail.test(input) ) {
        emailErrorMessage.textContent = "올바른 이메일 형식입니다";
        emailErrorMessage.style.color = '#3692FF';
        userEmailField.style.border = '1px solid #3692FF';
        isEmailValid = true;
    } else {
        emailErrorMessage.textContent = "잘못된 이메일 형식입니다";
        emailErrorMessage.style.color = 'red';
        userEmailField.style.border = '1px solid red';
        isEmailValid = false;
    }
    handleLoginButton();
}

function handleFormPassword(e) {
    const input = userPasswordField.value; 
    if ( input === '' ) {
        passwordErrorMessage.textContent = "비밀번호를 입력해주세요";  
        passwordErrorMessage.style.color = 'red';
        userPasswordField.style.border = '1px solid red';
        isPasswordValid = false;
    } else if ( input.length < 8 ) {
        passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요";
        passwordErrorMessage.style.color = 'red';
        userPasswordField.style.border = '1px solid red';  
        isPasswordValid = false;
    } else {
        passwordErrorMessage.textContent = "유효한 비밀번호 입니다"
        userPasswordField.style.border = '1px solid #3692FF';
        passwordErrorMessage.style.color = ' #3692FF';
        isPasswordValid = true;
    }
    handleLoginButton();
}

userEmailField.addEventListener('focusout', handleFormEmail);
userPasswordField.addEventListener('focusout', handleFormPassword);

//버튼 활성화 함수
function handleLoginButton(event) {
    if ( isEmailValid && isPasswordValid ) {
        loginButton.style.backgroundColor = '#3692FF';
        loginButton.disabled = false;
    }
}