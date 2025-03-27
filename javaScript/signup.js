document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  const usernameInput = document.getElementById("username");
  const usernameError = document.getElementById("username-error");

  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");

  const confirmPasswordInput = document.getElementById("confirm-password");
  const confirmPasswordError = document.getElementById("confirm-password-error");

  const passwordToggle = document.querySelector("#password-toggle");
  const confirmPasswordToggle = document.querySelector("#confirm-password-toggle");

  const signupButton = document.querySelector(".login-btn");

  function showError(input, errorElement, message) {
    input.style.border = "2px solid red";
    errorElement.textContent = message;
    errorElement.style.color = "red";
    errorElement.style.display = "block";
    updateSignupButtonState();
  }

  function hideError(input, errorElement) {
    input.style.border = "";
    errorElement.textContent = "";
    errorElement.style.display = "none";
    updateSignupButtonState();
  }

  function validateInput() {
    let isValid = true;

    if (emailInput.value.trim() === "" || emailError.textContent !== "") isValid = false;
    if (usernameInput.value.trim() === "" || usernameError.textContent !== "") isValid = false;
    if (passwordInput.value.trim() === "" || passwordError.textContent !== "") isValid = false;
    if (confirmPasswordInput.value.trim() === "" || confirmPasswordError.textContent !== "") isValid = false;

    return isValid;
  }

  function updateSignupButtonState() {
    signupButton.disabled = !validateInput();
  }

  emailInput.addEventListener("blur", function () {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
      showError(emailInput, emailError, "이메일을 입력해주세요.");
    } else if (!emailPattern.test(emailValue)) {
      showError(emailInput, emailError, "잘못된 이메일 형식입니다.");
    } else {
      hideError(emailInput, emailError);
    }
  });

  usernameInput.addEventListener("blur", function () {
    if (usernameInput.value.trim() === "") {
      showError(usernameInput, usernameError, "닉네임을 입력해주세요.");
    } else {
      hideError(usernameInput, usernameError);
    }
  });

  passwordInput.addEventListener("blur", function () {
    const passwordValue = passwordInput.value.trim();

    if (passwordValue === "") {
      showError(passwordInput, passwordError, "비밀번호를 입력해주세요.");
    } else if (passwordValue.length < 8) {
      showError(passwordInput, passwordError, "비밀번호를 8자 이상 입력해주세요.");
    } else {
      hideError(passwordInput, passwordError);
    }
  });

  passwordInput.addEventListener("input", function () {
    validateConfirmPassword();
  });

  confirmPasswordInput.addEventListener("blur", function () {
    validateConfirmPassword();
  });

  function validateConfirmPassword() {
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    if (confirmPasswordValue === "") {
      showError(confirmPasswordInput, confirmPasswordError, "비밀번호를 다시 입력해주세요.");
    } else if (passwordValue !== confirmPasswordValue) {
      showError(confirmPasswordInput, confirmPasswordError, "비밀번호가 일치하지 않습니다.");
    } else {
      hideError(confirmPasswordInput, confirmPasswordError);
    }
  }

  signupButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (!signupButton.disabled) {
      location.href = "login.html";
    }
  });

  /* 눈 아이콘 클릭 시 비밀번호 표시 및 숨기기 */
  passwordToggle.addEventListener("click", function () {

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.src = "./images/open_eye.png"; // 사선 없는 눈 아이콘
    } else {
      passwordInput.type = "password";
      passwordToggle.src = "./images/close_eye.png"; // 사선 있는 눈 아이콘
    }
  });

  confirmPasswordToggle.addEventListener("click", function () {
    
    if (confirmPasswordInput.type === "password") {
      confirmPasswordInput.type = "text";
      confirmPasswordToggle.src = "./images/open_eye.png";
    } else {
      confirmPasswordInput.type = "password";
      confirmPasswordToggle.src = "./images/close_eye.png";
    }
  });

  updateSignupButtonState();
});