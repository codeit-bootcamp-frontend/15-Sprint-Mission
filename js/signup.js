import {  emailInput, passwordInput, displayError, removeError, validateEmail, validatePassword } from "./auth.js";
emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout",validatePassword);
//------------------------ 닉네임 유효성 검사 ------------------------
const nameInput = document.getElementById("name");
const nameWrapper = document.querySelector(".name");
function validateName(event){
    let inputValue = nameInput.value;
    if(inputValue===""){ 
        displayError(event, nameWrapper, "닉네임을 입력해주세요.");
    } else{
        removeError(event, nameWrapper);
    }
}
nameInput.addEventListener("focusout",validateName);
//------------------------ 비밀번호 일치 검사 ------------------------
const chkpasswordInput = document.getElementById("ckeck-password");
const chkpasswordWrapper = document.querySelector(".password-check");

function correctPassword(event){ 
//비밀번호에서 인풋을 수정했을때에도, 바로 비밀번호 불일치 에러가 뜨도록 개선하고 싶다.
    let inputValue = passwordInput.value;
    let chkinputValue = event.target.value;
    if(inputValue!==chkinputValue){
        displayError(event, chkpasswordWrapper, "비밀번호가 일치하지 않습니다..")
    } else{
        removeError(event, chkpasswordWrapper);
    }
}
chkpasswordInput.addEventListener("input",correctPassword);
//------------------------ 버튼 활성화 ------------------------
const signupSubmit = document.querySelector(".signup-btn");

function signupactivate(){
    const emailvalidity = !emailInput.classList.contains("error") && emailInput.value!=="";
    const passwordvalidity = !passwordInput.classList.contains("error") && passwordInput.value!=="";
    const chkpasswordvalidity = !chkpasswordInput.classList.contains("error") && chkpasswordInput.value!=="";
    const namevalidity = !nameInput.classList.contains("error") && nameInput.value!=="";
    if(emailvalidity&&passwordvalidity&&chkpasswordvalidity&&namevalidity){
        signupSubmit.style.backgroundColor = "var(--blue)";
    }
}

emailInput.addEventListener("input",signupactivate);
passwordInput.addEventListener("input",signupactivate);
chkpasswordInput.addEventListener("input",signupactivate);
nameInput.addEventListener("input",signupactivate);