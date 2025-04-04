const emailInput = document.getElementById("userName");
const passwordInput = document.getElementById("userPassword");

const errorMessage = document.getElementById("error-message");
const errorPassword = document.getElementById("error-password");

const loginBtn = document.getElementById("loginBtn");

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

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!loginBtn.disabled) {
      window.location.href = "/item";
    }
  });
});

function updateButtonState() {
  const hasError =
    emailInput.classList.contains("error") ||
    passwordInput.classList.contains("error");

  const isFilled = emailInput.value !== "" && passwordInput.value.length >= 8;

  const shouldEnable = !hasError && isFilled;

  loginBtn.disabled = !shouldEnable;
}
//비활성화 시킨 버튼 어떻게 활성화 시킬지 모르겠어서 updateButtonState()부분은 챗GPT의 도움을 받았습니다. 코드 보면서 더 공부하겠습니다.
