// 처음 공백이고, 에러 활성화전적 없음 -> 에러메세지,에러셋팅
import { emailInput } from './auth';
// 이메일이 유효하지 않고, 에러활성화전적 없음-> 에러메세지,에러셋팅
// 공백이고, 에러 활성화전적 있음 -> 에러메세지 수정
// 이메일이 유효하지 않고, 에러활성화전적 있음->에러메세지 수정
// 이메일이 유효하고, 에러활성화전적 있음-> 에러셋팅 삭제

// 처음에 작성했던 코드는 이메일이랑 비밀번호랑 서로 영향 끼치고 난리 났는데.. 
// 지피티 제안으로 여러 함수로 분리해보니까 동작도 훨씬 안전하고, 어디서 어떤 작업이 일어나는지 파악하기도 명확해서 마음이 편안하다.
// 막혔던 부분: 이메일,비밀번호 등등에 재사용 가능함 함수로 작성하고 싶은데, wrapper.append(message);부분이 문제였다. wrapper를 파라미터로 받을 생각을 못했다.
// 부족한 부분: getElemetn, queryselector나 부모,자식에 접근하는 등, 선택자에 대한 이해도가 아직 많이 부족한거 같다. 
// 어떤 형태로 받고, 어떤 형태로 다루게 되는지 자꾸 에러가 나서 더 혼란스러워졌다.
const EMAIL_INPUT_ID = "email";
const PASSWORD_INPUT_ID = "password";

export function displayError(event, wrapper, errorMessage){ //displayError, removeError 함수로 분리해서 만들기..
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
export function removeError(event, wrapper){
    const visited = event.target.classList.contains("error");
    if(visited){
        event.target.classList.remove("error");
        wrapper.lastChild.remove();
    }
}
// ------------------------ 이메일 유효성 검사 ------------------------
export const emailInput = document.getElementById(EMAIL_INPUT_ID);
const emailWrapper = document.querySelector(".email");
const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

export function validateEmail(event){
    const inputValue = emailInput.value;
    const emailValidation = exptext.test(inputValue);
    if(!inputValue){ 
        displayError(event, emailWrapper, "이메일을 입력해주세요.");
    } else if(!emailValidation){
        displayError(event, emailWrapper, "잘못된 이메일 형식입니다.");
    } else if(emailValidation){
        removeError(event, emailWrapper);
    } 
}

emailInput.addEventListener("focusout", validateEmail);

// ------------------------ 비밀번호 유효성 검사 ------------------------
export const passwordInput = document.getElementById(PASSWORD_INPUT_ID);
const passwordWrapper = document.querySelector(".password");
const expPassword = /[A-Za-z\d]{8,}$/;

export function validatePassword(event){
    let inputValue = passwordInput.value;
    if(inputValue===""){ 
        displayError(event, passwordWrapper, "비밀번호를 입력해주세요.");
    } else if(expPassword.test(inputValue)===false){
        displayError(event, passwordWrapper, "비밀번호를 8자 이상 입력해주세요.");
    } else if(expPassword.test(inputValue)){
        removeError(event, passwordWrapper);
    } 
}
passwordInput.addEventListener("focusout",validatePassword);




