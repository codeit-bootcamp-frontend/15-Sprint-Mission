// 처음 공백이고, 에러 활성화전적 없음 -> 에러메세지,에러셋팅
// 이메일이 유효하지 않고, 에러활성화전적 없음-> 에러메세지,에러셋팅
// 공백이고, 에러 활성화전적 있음 -> 에러메세지 수정
// 이메일이 유효하지 않고, 에러활성화전적 있음->에러메세지 수정
// 이메일이 유효하고, 에러활성화전적 있음-> 에러셋팅 삭제

// 처음에 작성했던 코드는 이메일이랑 비밀번호랑 서로 영향 끼치고 난리 났는데.. 
// 지피티 제안으로 여러 함수로 분리해보니까 동작도 훨씬 안전하고, 어디서 어떤 작업이 일어나는지 파악하기도 명확해서 마음이 편안하다.
// 막혔던 부분: 이메일,비밀번호 등등에 재사용 가능함 함수로 작성하고 싶은데, wrapper.append(message);부분이 문제였다. wrapper를 파라미터로 받을 생각을 못했다.
// 부족한 부분: getElemetn, queryselector나 부모,자식에 접근하는 등, 선택자에 대한 이해도가 아직 많이 부족한거 같다. 
// 어떤 형태로 받고, 어떤 형태로 다루게 되는지 자꾸 에러가 나서 더 혼란스러워졌다.

function displayError(event, wrapper, errorMessage){ //displayError, removeError 함수로 분리해서 만들기..
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
const emailInput = document.getElementById("email");
const emailWrapper = document.querySelector(".email");
var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

function validateEmail(event){
    let inputValue = emailInput.value;
    if(inputValue===""){ 
        displayError(event, emailWrapper, "이메일을 입력해주세요.");
    } else if(exptext.test(inputValue)==false){
        displayError(event, emailWrapper, "잘못된 이메일 형식입니다.");
    } else if(exptext.test(inputValue)){
        removeError(event, emailWrapper);
    } 
}

emailInput.addEventListener("focusout", validateEmail);

// ------------------------ 비밀번호 유효성 검사 ------------------------
const passwordInput = document.getElementById("password");
const passwordWrapper = document.querySelector(".password");
var expPassword = /[A-Za-z\d]{8,}$/;

function validatePassword(event){
    let inputValue = passwordInput.value;
    if(inputValue===""){ 
        displayError(event, passwordWrapper, "비밀번호를 입력해주세요.");
    } else if(expPassword.test(inputValue)==false){
        displayError(event, passwordWrapper, "비밀번호를 8자 이상 입력해주세요.");
    } else if(expPassword.test(inputValue)){
        removeError(event, passwordWrapper);
    } 
}
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
    let inputValue = passwordInput.value;
    let chkinputValue = event.target.value;
    if(inputValue !== chkinputValue){
        displayError(event, chkpasswordWrapper, "비밀번호가 일치하지 않습니다..")
    } else{
        removeError(event, chkpasswordWrapper);
    }
}
chkpasswordInput.addEventListener("input",correctPassword);
//------------------------ 버튼 활성화 ------------------------
const loginSubmit = document.querySelector(".login-btn");
const signupSubmit = document.querySelector(".signup-btn");

function loginactivate(){
    const emailvalidity = !emailInput.classList.contains("error") && emailInput.value!=="";
    const passwordvalidity = !passwordInput.classList.contains("error") && passwordInput.value!=="";
    const chkpasswordvalidity = !chkpasswordInput.classList.contains("error") && chkpasswordInput.value!=="";
    const namevalidity = !nameInput.classList.contains("error") && nameInput.value!=="";

    console.log(event.target.value);
    if(emailvalidity&&passwordvalidity&&chkpasswordvalidity&&namevalidity){
        signupSubmit.style.backgroundColor = "var(--blue)";
    }
    else if(emailvalidity&&passwordvalidity){
        loginSubmit.style.backgroundColor = "var(--blue)";
    }
}

emailInput.addEventListener("input",activate);
passwordInput.addEventListener("input",activate);
chkpasswordInput.addEventListener("input",activate);
nameInput.addEventListener("input",activate);


