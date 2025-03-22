import {  authValidity, emailInput, passwordInput, displayError, removeError, validateEmail, validatePassword, psVisibility } from "./auth.js";

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout",validatePassword);

const ps_visibility = document.getElementsByClassName("ps-visibility");
Array.from(ps_visibility).forEach(element => {
    element.addEventListener("click", psVisibility);
});
//------------------------ 닉네임 유효성 검사 ------------------------
const nameInput = document.getElementById("name");
const nameWrapper = document.querySelector(".name");
function validateName(event){
    const inputValue = nameInput.value;
    if(!inputValue){ 
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
    const inputValue = passwordInput.value;
    const chkinputValue = chkpasswordInput.value;
    if(inputValue!==chkinputValue){
        displayError(event, chkpasswordWrapper, "비밀번호가 일치하지 않습니다..")
    } else{
        removeError(event, chkpasswordWrapper);
    }
}
chkpasswordInput.addEventListener("focusout",correctPassword);
//------------------------ 버튼 활성화 ------------------------
const signupSubmit = document.querySelector(".signup-btn");

function signupactivate(){
    const chkpasswordvalidity = chkpasswordInput.value === passwordInput.value;
    const namevalidity = nameInput.value;
    if(authValidity() && chkpasswordvalidity && namevalidity){
        signupSubmit.style.backgroundColor = "var(--blue)";
        signupSubmit.disabled = false;
    } else{
        signupSubmit.style.backgroundColor = "var(--gray400)";
        signupSubmit.disabled = true;
    }
}

emailInput.addEventListener("focusout",signupactivate);
passwordInput.addEventListener("focusout",signupactivate);
chkpasswordInput.addEventListener("focusout",signupactivate);
nameInput.addEventListener("focusout",signupactivate);