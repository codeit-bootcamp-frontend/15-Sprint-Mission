const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const authBtn = document.querySelector(".auth-button");
const login = document.querySelector("#login-button");

const emailError = document.querySelector(".email-error-message");
const pwError = document.querySelector(".pw-error-message");

const pattern = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateButton = () => {
  const emailValue = inputEmail.value.trim();
  const pwValue = inputPassword.value.trim();

  if(emailValue !== "" && pattern.test(emailValue) && pwValue !== "" && pwValue.length >= 8) {
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

login.addEventListener('click', (event) => {
  event.preventDefault();
  if(!authBtn.disabled) {
    window.location.href = '/item.html';
  }
});

validateButton();

const pwVisibility = document.querySelector(".password-eye-button");

const togglePwVisibility = (eyeButton, pwInput) => {
  const eyeIcon = eyeButton.querySelector(".password-eye");

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