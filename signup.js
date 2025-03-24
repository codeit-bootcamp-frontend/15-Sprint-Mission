const inputEmail = document.querySelector("#email");
const inputName = document.querySelector("#name");
const inputPassword = document.querySelector("#password");
const inputPasswordRepeat = document.querySelector("#password-repeat");
const authBtn = document.querySelector(".auth-button");
const signup = document.querySelector("#signup-button");

const emailError = document.querySelector(".email-error-message");
const nameError = document.querySelector(".name-error-message");
const pwError = document.querySelector(".pw-error-message");
const pwRepeatError = document.querySelector(".pw-repeat-error-message");

const pattern = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateButton = () => {
  const emailValue = inputEmail.value.trim();
  const nameValue = inputName.value.trim();
  const pwValue = inputPassword.value.trim();
  const pwRepeatValue = inputPasswordRepeat.value.trim();

  if(emailValue !== "" && pattern.test(emailValue)&& nameValue !== "" && pwValue !== "" && pwValue.length >= 8 && pwRepeatValue !== "" && pwRepeatValue === pwValue) {
    authBtn.disabled = false;
    authBtn.style.cursor = "pointer";
  } else {
    authBtn.disabled = true;
    authBtn.style.cursor = "not-allowed";
  }
};


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

  validateButton();
});

inputEmail.addEventListener('input', validateButton);

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

  validateButton();
});

inputName.addEventListener('input', validateButton);

inputPassword.addEventListener('focusout', () => {
  const pwValue = inputPassword.value.trim();

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

  validateButton();
});

inputPassword.addEventListener('input', validateButton);

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

  validateButton();
});

inputPasswordRepeat.addEventListener('input', validateButton);

signup.addEventListener('click', (event) => {
  event.preventDefault();
  if(!authBtn.disabled) {
    window.location.href = '/login.html';
  }
});

validateButton();

const pwVisibility = document.querySelector("#pw-visibility");
const pwRepeatVisibility = document.querySelector("#pw-repeat-visibility");

const togglePwVisibility = (eyeButton, pwInput) => {
  const eyeIcon = eyeButton.querySelector("#pw-eye");

  if(pwInput.type === "password") {
    pwInput.type = "text";
    eyeIcon.src = "icon-img/eye.svg";
  
  } else {
    pwInput.type = "password";
    eyeIcon.src = "icon-img/closed-eye.svg";
  }
};

pwVisibility.addEventListener("click",() => {
  togglePwVisibility(pwVisibility, inputPassword);
});

const togglePwRepeatVisibility = (eyeButton, pwRepeatInput) => {
  const eyeIcon = eyeButton.querySelector("#pw-repeat-eye");

  if(pwRepeatInput.type === "password") {
    pwRepeatInput.type = "text";
    eyeIcon.src = "icon-img/eye.svg";
  
  } else {
    pwRepeatInput.type = "password";
    eyeIcon.src = "icon-img/closed-eye.svg";
  }
};

pwRepeatVisibility.addEventListener("click",() => {
  togglePwRepeatVisibility(pwRepeatVisibility, inputPasswordRepeat);
});