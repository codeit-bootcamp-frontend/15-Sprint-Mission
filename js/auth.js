export{emailInput, passwordInput, displayError, removeError, validateEmail, validatePassword, psVisibility, authValidity};
const EMAIL_INPUT_ID = "email";
const PASSWORD_INPUT_ID = "password";
// ------------------------ 에러 메세지 ------------------------
function displayError(event, wrapper, errorMessage){ 
    const visited = event.target.classList.contains("error");
    if(visited){
        wrapper.lastChild.textContent=errorMessage;
    } else if(!visited){
        event.target.classList.add("error");
        const message = document.createElement('span');
        message.textContent = errorMessage;
        message.classList.add("errorMessage");
        wrapper.append(message);
    }
}
function removeError(event, wrapper){
    const visited = event.target.classList.contains("error");
    if(visited){
        event.target.classList.remove("error");
        wrapper.lastChild.remove();
    }
}
// ------------------------ 이메일 유효성 검사 ------------------------
const emailInput = document.getElementById(EMAIL_INPUT_ID);
const emailWrapper = document.querySelector(".email");

function validateEmail(event){
    const inputValue = emailInput.value;
    const emailValidation = emailInput.validity.valid;
    if(!inputValue){ 
        displayError(event, emailWrapper, "이메일을 입력해주세요.");
        return false;
    } 
    if(!emailValidation){
        displayError(event, emailWrapper, "잘못된 이메일 형식입니다.");
        return false;
    }
    removeError(event, emailWrapper);
    return true;
}
// ------------------------ 비밀번호 유효성 검사 ------------------------
const passwordInput = document.getElementById(PASSWORD_INPUT_ID);
const passwordWrapper = document.querySelector(".password");
const expPassword = /[A-Za-z\d]{8,}$/;

function validatePassword(event){
    const inputValue = passwordInput.value;
    const passwordValidation = expPassword.test(inputValue);
    if(!inputValue){ 
        displayError(event, passwordWrapper, "비밀번호를 입력해주세요.");
        return false;
    } 
    if(!passwordValidation){
        displayError(event, passwordWrapper, "비밀번호를 8자 이상 입력해주세요.");
        return false;
    } 
    removeError(event, passwordWrapper);
    return true;
}
// ------------------------ 버튼활성화 함수에 사용 ------------------------
function authValidity(){
    const inputE = emailInput.value;
    const emailValidation = emailInput.validity.valid;
    const inputPS = passwordInput.value;
    const passwordValidation = expPassword.test(inputPS);
    if(!inputE || !emailValidation || !inputPS || !passwordValidation){ 
        return false;
    } 
    return true;
}
// ------------------------ password visibility - 눈 아이콘 ------------------------
function psVisibility(event){
    const currentState = event.target.dataset.toggle; 
    const changeState = event.target.parentElement.querySelector("input");
    if (currentState === "off"){
        event.target.setAttribute("data-toggle", "on");
        event.target.setAttribute("src","/image/icon/visibility_on.png")
        changeState.setAttribute("type","text");

    } else if(currentState === "on"){
        event.target.setAttribute("data-toggle", "off");
        event.target.setAttribute("src","/image/icon/visibility_off.png")
        changeState.setAttribute("type","password");
    }
}

