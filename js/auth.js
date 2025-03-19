const emailInput = document.getElementById("email");
const emailWrapper = document.querySelector(".email");

var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
let isEventTriggered = false;

// 처음 공백이고, 에러 활성화전적 없음 -> 에러메세지,에러셋팅
// 이메일이 유효하지 않고, 에러활성화전적 없음-> 에러메세지,에러셋팅
// 공백이고, 에러 활성화전적 있음 -> 에러메세지 수정
// 이메일이 유효하지 않고, 에러활성화전적 있음->에러메세지 수정
// 이메일이 유효하고, 에러활성화전적 있음-> 에러셋팅 삭제
function emailError(event, errorMessage){
    event.target.classList.add("error");

    const message = document.createElement('span');
    message.textContent = errorMessage;
    message.classList.add("errorMessage");
    emailWrapper.append(message);
    isEventTriggered = true;

    console.log(emailWrapper);
}
function validateEmail(event){
    let inputValue = emailInput.value;
    if(inputValue==="" && !isEventTriggered){ 
        emailError(event,"이메일을 입력해주세요.");
    } else if(inputValue!=="" && !isEventTriggered && (exptext.test(inputValue)==false)){
        emailError(event,"잘못된 이메일 형식입니다.");
    } else if(inputValue==="" && isEventTriggered){
        emailWrapper.lastChild.textContent="이메일을 입력해주세요.";       
    } else if(inputValue!=="" && isEventTriggered && (exptext.test(inputValue)==false)){
        emailWrapper.lastChild.textContent="잘못된 이메일 형식입니다.";       
    } else if(exptext.test(inputValue) && isEventTriggered){
        event.target.classList.remove("error");
        emailWrapper.lastChild.remove();
        isEventTriggered = false;
    } 
}

emailInput.addEventListener("focusout", validateEmail);

// ------------------------- 비밀번호 유효성 검사 ---------------------------
const passwordInput = document.getElementById("password");
const passwordWrapper = document.querySelector(".password");

var expPassword = /[A-Za-z\d]{8,}$/;
let isEventTriggered_2 = false;

// function addError(event, errorMessage){
//     event.target.classList.add("error");

//     const message = document.createElement('span');
//     message.textContent = errorMessage;
//     message.classList.add("errorMessage");
//     passwordWrapper.append(message);
//     isEventTriggered_2 = true;

//     console.log(passwordWrapper);

// }
function validatePassword(event){
    const inputValue = passwordInput.value;
    if(inputValue==="" && !isEventTriggered_2){ 
        addError(event,"비밀번호를 입력해주세요.");
    } else if(inputValue!=="" && !isEventTriggered_2 && (expPassword.test(inputValue)==false)){
        addError(event,"잘못된 이메일 형식입니다.");
    } else if(inputValue==="" && isEventTriggered_2){
        emailWrapper.lastChild.textContent="비밀번호를 입력해주세요.";       
    } else if(inputValue!=="" && isEventTriggered_2 && (expPassword.test(inputValue)==false)){
        emailWrapper.lastChild.textContent="잘못된 이메일 형식입니다.";       
    } else if(expPassword.test(inputValue) && isEventTriggered_2){
        event.target.classList.remove("error");
        emailWrapper.lastChild.remove();
        isEventTriggered_2 = false;
    } 
}

passwordInput.addEventListener("focusout", validatePassword);

console.log(emailWrapper);
console.log(passwordWrapper);


