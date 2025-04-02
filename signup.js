
const userEmailField = document.querySelector('#email');
const emailErrorMessage = document.querySelector('.email-field .error-message');
const userNicknameField = document.querySelector('#nickname');
const nicknameErrorMessage = document.querySelector('.nickname-field .error-message')
const userPasswordField = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('.password-field .error-message');
const userPasswordCheckField = document.querySelector('#passwordCheck');
const passwordCheckErrorMessage = document.querySelector('.passwordCheck-field .error-message');
const signupBotton = document.querySelector(".sign-up-button");

const validEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.(\.[a-zA-Z]{2,3})$/;

document.getElementById('email').autocomplete = 'off';
document.getElementById('nickname').autocomplete = 'off';
document.getElementById('password').autocomplete = 'off';
document.getElementById('passwordCheck').autocomplete = 'off';

//버튼 유효성 검사
let isEmailValid = false;
let isNicknameValid = false;
let isPasswordValid = false;
let isPasswordCheckValid = false;

function handleFormEmail(event) {
    const input = userEmailField.value;
    if ( input === '') {
        emailErrorMessage.textContent = "이메일을 입력해주세요";
        emailErrorMessage.style.color = 'red';
        userEmailField.style.border = '1px solid red';
    } else if (validEmail.test(input) ) {
        emailErrorMessage.textContent = "올바른 이메일 형식입니다";
        emailErrorMessage.style.color = '#3692FF';
        userEmailField.style.border = '1px solid #3692FF';
        isEmailValid = true;
    } else {
        emailErrorMessage.textContent = "잘못된 이메일 형식입니다";
        emailErrorMessage.style.color = 'red';
        userEmailField.style.border = '1px solid red';
    }
    handleSignupButton()
}

function handleFormPassword(e) {
    const input = userPasswordField.value; 
    if ( input === '' ) {
        passwordErrorMessage.textContent = "비밀번호를 입력해주세요";  
        passwordErrorMessage.style.color = 'red';
        userPasswordField.style.border = '1px solid red';  
    } else if ( input.length < 8 ) {
        passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요";
        passwordErrorMessage.style.color = 'red';
        userPasswordField.style.border = '1px solid red';  
    } else {
        passwordErrorMessage.textContent = "유효한 비밀번호 입니다"
        userPasswordField.style.border = '1px solid #3692FF';
        passwordErrorMessage.style.color = ' #3692FF';
        isPasswordValid = true;
    }
    handleSignupButton()
}

function handleNickname(e) {
    const input = userNicknameField.value;
    if ( input === '' ) {
        nicknameErrorMessage.textContent = "닉네임을 입력해주세요";
        nicknameErrorMessage.style.color = 'red';
        userNicknameField.style.border = '1px solid red';
    } else {
        nicknameErrorMessage.textContent = "올바른 닉네임입니다";
        nicknameErrorMessage.style.color = '#3692FF';
        userNicknameField.style.border = '1px solid #3692FF';
        isNicknameValid = true;
    }
    handleSignupButton()
}

function handlePasswordCheck(e) {
    const input = userPasswordCheckField.value;
    if ( input.length < 8 ) {
        passwordCheckErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요";
        passwordCheckErrorMessage.style.color = 'red';
        userNicknameField.style.border = '1px solid red';
    } else if ( input !== userPasswordField.value ) {
        passwordCheckErrorMessage.textContent = "비밀번호가 일치하지 않습니다";
        passwordCheckErrorMessage.style.color = 'red';
        userPasswordCheckField.style.border = '1px solid red';
    } else {
        passwordCheckErrorMessage.textContent = "비밀번호가 일치합니다";
        passwordCheckErrorMessage.style.color = "#3692FF";
        userPasswordCheckField.style.border = "1px solid #3692FF"
        isPasswordCheckValid = true;
    }
    handleSignupButton()
}

//버튼 활성화 함수
function handleSignupButton() {
    if ( isEmailValid && isNicknameValid & isPasswordValid && isPasswordCheckValid ) {
        signupBotton.style.backgroundColor = '#3692FF';
        signupBotton.disabled = false;
    }
}

userEmailField.addEventListener('focusout', handleFormEmail);
userPasswordField.addEventListener('focusout', handleFormPassword);
userNicknameField.addEventListener('focusout', handleNickname);
userPasswordCheckField.addEventListener('focusout', handlePasswordCheck);
