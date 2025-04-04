const emailInput = document.getElementById("userName");
const passwordInput = document.getElementById("userPassword");
const nicnameInput = document.getElementById("nicname");
const checkPasswordInput = document.getElementById("checkPassword");

const errorMessage = document.getElementById("error-message");
const errorPassword = document.getElementById("error-password");
const errorNicname = document.getElementById("error-nicname");
const errorCheckPassword = document.getElementById("error-checkPassword");

const signupBtn = document.getElementById("signupBtn");

document.addEventListener("DOMContentLoaded", () => {
  emailInput.addEventListener("input", () => {
    if (emailInput.value !== "" && emailInput.value.includes("@")) {
      emailInput.classList.remove("error");
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    }
    updateButtonState();
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length >= 8) {
      passwordInput.classList.remove("error");
      errorPassword.textContent = "";
      errorPassword.style.display = "none";
    }
    updateButtonState();
  });

  nicnameInput.addEventListener("input", () => {
    if (nicnameInput.value !== "") {
      nicnameInput.classList.remove("error");
      errorNicname.textContent = "";
      errorNicname.style.display = "none";
    }
    updateButtonState();
  });

  checkPasswordInput.addEventListener("input", () => {
    if (checkPasswordInput.value === passwordInput.value) {
      checkPasswordInput.classList.remove("error");
      errorCheckPassword.textContent = "";
      errorCheckPassword.style.display = "none";
    }
    updateButtonState();
  });

  emailInput.addEventListener("focusout", () => {
    if (emailInput.value === "") {
      emailInput.classList.add("error");
      errorMessage.textContent = "잘못된 이메일입니다.";
      errorMessage.style.display = "block";
    } else if (!emailInput.value.includes("@")) {
      emailInput.classList.add("error");
      errorMessage.textContent = "잘못된 이메일 형식입니다.";
      errorMessage.style.display = "block";
    } else {
      emailInput.classList.remove("error");
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    }
    updateButtonState();
  });

  passwordInput.addEventListener("focusout", () => {
    if (passwordInput.value === "") {
      passwordInput.classList.add("error");
      errorPassword.textContent = "비밀번호를 입력해주세요";
      errorPassword.style.display = "block";
    } else if (passwordInput.value.length < 8) {
      passwordInput.classList.add("error");
      errorPassword.textContent = "비밀번호를 8자 이상 입력해주세요.";
      errorPassword.style.display = "block";
    } else {
      passwordInput.classList.remove("error");
      errorPassword.textContent = "";
      errorPassword.style.display = "none";
    }
    updateButtonState();
  });

  nicnameInput.addEventListener("focusout", () => {
    if (nicnameInput.value === "") {
      nicnameInput.classList.add("error");
      errorNicname.textContent = "닉네임을 입력해주세요.";
      errorNicname.style.display = "block";
    } else {
      nicnameInput.classList.remove("error");
      errorNicname.textContent = "";
      errorNicname.style.display = "none";
    }
    updateButtonState();
  });

  checkPasswordInput.addEventListener("focusout", () => {
    if (checkPasswordInput.value !== passwordInput.value) {
      checkPasswordInput.classList.add("error");
      errorCheckPassword.textContent = "비밀번호가 일치하지 않습니다.";
      errorCheckPassword.style.display = "block";
    } else {
      checkPasswordInput.classList.remove("error");
      errorCheckPassword.textContent = "";
      errorCheckPassword.style.display = "none";
    }
    updateButtonState();
  });

  signupBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!signupBtn.disabled) {
      window.location.href = "login.html";
    }
  });
});

function updateButtonState() {
  const hasError =
    emailInput.classList.contains("error") ||
    passwordInput.classList.contains("error") ||
    nicnameInput.classList.contains("error") ||
    checkPasswordInput.classList.contains("error");

  const isFilled =
    emailInput.value !== "" &&
    passwordInput.value !== "" &&
    nicnameInput.value !== "" &&
    checkPasswordInput.value === passwordInput.value;

  const shouldEnable = !hasError && isFilled;

  signupBtn.disabled = !shouldEnable;
}
//비활성화 시킨 버튼 어떻게 활성화 시킬지 모르겠어서 챗GPT의 도움을 받았습니다. 코드 보면서 더 공부하겠습니다.
