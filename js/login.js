import { authValidity, emailInput, passwordInput, validateEmail, validatePassword, psVisibility } from "./auth.js";

//----------------- 이메일,비밀번호 검사 / 눈 아이콘 -------------------
emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);

const ps_visibility = document.querySelector(".ps-visibility");
ps_visibility.addEventListener("click", psVisibility);

//------------------------ 버튼 활성화 ------------------------
const loginSubmit = document.querySelector(".login-btn");

function loginactivate(){
    if(authValidity()){
        loginSubmit.style.backgroundColor = "var(--blue)";
        loginSubmit.disabled=false;
    } 
    else{
        loginSubmit.style.backgroundColor = "var(--gray400)";
        loginSubmit.disabled=true;
    }
}

emailInput.addEventListener("focusout",loginactivate);
passwordInput.addEventListener("focusout",loginactivate);
