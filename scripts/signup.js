document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const nicknameInput = document.getElementById("nickname");
  const passwordInput = document.getElementById("password");
  const passwordConfirmInput = document.getElementById("passwordConfirmation");
  const signupForm = document.querySelector(".auth-form");
  const signupButton = signupForm.querySelector('button[type="submit"]');
  const togglePasswordButtons = document.querySelectorAll(".toggle-password");

  emailInput.addEventListener("blur", function () {
    if (!isNotEmpty(this.value)) {
      showError(this, "이메일을 입력해주세요.");
    } else if (!isValidEmail(this.value)) {
      showError(this, "잘못된 이메일 형식입니다.");
    } else {
      removeError(this);
    }
    validateForm();
  });

  nicknameInput.addEventListener("blur", function () {
    if (!isNotEmpty(this.value)) {
      showError(this, "닉네임을 입력해주세요.");
    } else {
      removeError(this);
    }
    validateForm();
  });

  passwordInput.addEventListener("blur", function () {
    if (!isNotEmpty(this.value)) {
      showError(this, "비밀번호를 입력해주세요.");
    } else if (!isValidPasswordLength(this.value)) {
      showError(this, "비밀번호를 8자 이상 입력해주세요.");
    } else {
      removeError(this);
    }
    validatePasswordMatch();
    validateForm();
  });

  passwordConfirmInput.addEventListener("blur", function () {
    validatePasswordMatch();
    validateForm();
  });

  function validatePasswordMatch() {
    if (isNotEmpty(passwordConfirmInput.value)) {
      if (!isMatching(passwordInput.value, passwordConfirmInput.value)) {
        showError(passwordConfirmInput, "비밀번호가 일치하지 않습니다.");
      } else {
        removeError(passwordConfirmInput);
      }
    }
  }

  // 입력 변화 감지 -> 폼 유효성 검사
  emailInput.addEventListener("input", validateForm);
  nicknameInput.addEventListener("input", validateForm);
  passwordInput.addEventListener("input", validateForm);
  passwordConfirmInput.addEventListener("input", validateForm);

  function validateForm() {
    const isEmailValid =
      isNotEmpty(emailInput.value) && isValidEmail(emailInput.value);
    const isNicknameValid = isNotEmpty(nicknameInput.value);
    const isPasswordValid =
      isNotEmpty(passwordInput.value) &&
      isValidPasswordLength(passwordInput.value);
    const isPasswordConfirmValid =
      isNotEmpty(passwordConfirmInput.value) &&
      isMatching(passwordInput.value, passwordConfirmInput.value);

    const hasErrors =
      document.querySelectorAll('[class*="text-error"]').length > 0;

    setButtonState(
      signupButton,
      isEmailValid &&
        isNicknameValid &&
        isPasswordValid &&
        isPasswordConfirmValid &&
        !hasErrors
    );
  }

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!signupButton.disabled) {
      window.location.href = "login.html";
    }
  });

  togglePasswordButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentElement.querySelector("input");
      const type =
        input.getAttribute("type") === "password" ? "text" : "password";
      input.setAttribute("type", type);

      const img = this.querySelector("img");
      if (type === "text") {
        img.src = "public/icons/ic_visibility_on.png";
        img.alt = "비밀번호 표시";
      } else {
        img.src = "public/icons/ic_visibility_off.png";
        img.alt = "비밀번호 숨김";
      }
    });
  });

  validateForm();
});
