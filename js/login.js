import { emailInput, passwordInput, validateEmail, validatePassword } from "./auth.js";

emailInput.addEventListener("focusout", validateEmail);
// passwordInput.addEventListener("focusout",validatePassword);

//------------------------ 버튼 활성화 ------------------------
const loginSubmit = document.querySelector(".login-btn");

function loginactivate(){
    const emailvalidity = !emailInput.classList.contains("error") && emailInput.value!=="";
    const passwordvalidity = !passwordInput.classList.contains("error") && passwordInput.value!=="";
    if(emailvalidity&&passwordvalidity){
        loginSubmit.style.backgroundColor = "var(--blue)";
    } 
//비밀번호 9글자를 입력해야 적용됨.. 
// 왜 8글자까지는 안되는가(error스타일도 빠져있는데?)-개발자도구로 확인해보기
    else{
        loginSubmit.style.backgroundColor = "var(--gray400)";

    }
}

emailInput.addEventListener("input",loginactivate);
passwordInput.addEventListener("input",loginactivate);
passwordInput.addEventListener("input",validatePassword);

