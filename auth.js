const inputEmail = document.querySelector("#email");
const inputName = document.querySelector("#name");
const inputPassword = document.querySelector("#password");
const inputPasswordRepeat = document.querySelector("#password-repeat");
const authBtn = document.querySelector("#auth-button");

const emailError = document.querySelector(".email-error-message");
const nameError = document.querySelector(".name-error-message");
const pwError = document.querySelector(".pw-error-message");
const pwRepeatError = document.querySelector(".pw-repeat-error-message");

const pattern = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

inputEmail.addEventListener('focusout', () => {
  const emailValue = inputEmail.value.trim();

  if(emailValue === "") {
    emailError.textContent = "이메일을 입력해주세요.";
    emailError.style.display = 'block';
    inputEmail.classList.add("input-error");
  } else if(!pattern.test(emailValue)) {
    emailError.textContent = "잘못된 이메일 형식입니다.";
    emailError.style.display = 'block';
    inputEmail.classList.add("input-error");
  } else {
    emailError.style.display = 'none';
    inputEmail.classList.remove("input-error");
  }
});

inputName.addEventListener('focusout', () => {
  const nameValue = inputName.value.trim();

  if(nameValue === "") {
    nameError.textContent = "닉네임을 입력해주세요.";
    nameError.style.display = 'block';
    inputName.classList.add("input-error");
  } else {
    nameError.style.display = 'none';
    inputName.classList.remove("input-error")
  }
});

inputPassword.addEventListener('focusout', () => {
  const pwValue = inputPassword.value.trim();
  debugger;

  if(pwValue === "") {
    pwError.textContent = "비밀번호를 입력해주세요.";
    pwError.style.display = 'block';
    inputPassword.classList.add("input-error");
  } else if(pwValue.length < 8) {
    pwError.textContent = "비밀번호를 8자리 이상 입력해주세요.";
    pwError.style.display = 'block';
    inputPassword.classList.add("input-error");
  } else {
    pwError.style.display = 'none';
    inputPassword.classList.remove("input-error");
  }
});

inputPasswordRepeat.addEventListener('focusout', () => {
  const pwRepeatValue = inputPasswordRepeat.value.trim();
  const pwValue = inputPassword.value.trim();

  if(pwRepeatValue !== pwValue) {
    pwRepeatError.textContent = "비밀번호가 일치하지 않습니다.";
    pwRepeatError.style.display = 'block';
    inputPasswordRepeat.classList.add("input-error");
  } else {
    pwRepeatError.style.display = 'none';
    inputPasswordRepeat.classList.remove("input-error");
  }
});