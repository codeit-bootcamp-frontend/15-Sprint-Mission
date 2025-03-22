import { emailInput, passwordInput, validateEmail, validatePassword } from "./auth.js";

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout",validatePassword);

//------------------------ 버튼 활성화 ------------------------
const loginSubmit = document.querySelector(".login-btn");

function loginactivate(){
    const emailvalidity = !emailInput.classList.contains("error") && emailInput.value!=="";
    const passwordvalidity = !passwordInput.classList.contains("error") && passwordInput.value!=="";
    if(emailvalidity&&passwordvalidity){
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
passwordInput.addEventListener("focusout",validatePassword);