document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");
  const togglePasswordBtn = document.querySelector(".toggle-btn");

  const loginButton = document.querySelector(".login-btn");

  /* 이메일과 비밀번호 동시 유효성 검증 */
  emailInput.addEventListener("focusout", validateForm);
  passwordInput.addEventListener("focusout", validateForm);

  /* 눈 아이콘 클릭 시 비밀번호 표시 및 숨기기 */
  togglePasswordBtn.addEventListener("click", function() {
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePasswordBtn.src = "./images/open_eye.png";
    } else {
      passwordInput.type = "password";
      togglePasswordBtn.src = "./images/close_eye.png";
    }
  });

  /* 로그인을 위한 유효성 검증 */
  function validateForm() {
    let isValid = true;

  /* 이메일 유효성 검증 */
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
      showError(emailInput, emailError, "이메일을 입력해주세요.");
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      showError(emailInput, emailError, "잘못된 이메일 형식입니다.");
      isValid = false;
    } else {
      hideError(emailInput, emailError);
    }

  /* 비밀번호 유효성 검증 */
  const passwordValue = passwordInput.value.trim();

    if (passwordValue === "") {
      showError(passwordInput, passwordError, "비밀번호를 입력해주세요.");
      isValid = false;
    } else if (passwordValue.length < 8) {
      showError(passwordInput, passwordError, "비밀번호를 8자 이상 입력해주세요.");
      isValid = false;
    } else {
      hideError(passwordInput, passwordError);
    }

    /* 동시 유효성 검증 완료 시 로그인 버튼 활성화*/
    loginButton.disabled = !isValid;
  }

  function showError(inputElement, errorElement, message) {
    inputElement.classList.add("input-error");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  function hideError(inputElement, errorElement) {
    inputElement.classList.remove("input-error");
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }

  /* 로그인 버튼 클릭 시 페이지 이동 */
  loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (!loginButton.disabled) {
      window.location.href = "/items";
    }
  });

  loginButton.disabled = true;
});