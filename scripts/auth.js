document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form.auth-form");
  if (!form) return;
  const button = form.querySelector("button.auth-button");
  // 페이지 로드 시 버튼 비활성화
  button.disabled = true;

  // 전체 폼 유효성 검사
  function checkFormValidity() {
    let valid = true;
    const inputs = form.querySelectorAll("input");
    inputs.forEach(function (input) {
      if (input.value.trim() === "") {
        valid = false;
      }
    });
    if (form.querySelectorAll(".error-message").length > 0) {
      valid = false;
    }
    button.disabled = !valid;
  }

  // 이메일 검증
  const emailInput = document.getElementById("email");
  if (emailInput) {
    emailInput.addEventListener("blur", validateEmail);
    emailInput.addEventListener("input", validateEmail);
  }
  function validateEmail() {
    const emailValue = emailInput.value.trim();
    let errorMessage = emailInput.closest(".input-group").querySelector(".error-message");
    if (!emailValue) {
      emailInput.classList.add("input-error");
      if (!errorMessage) {
        errorMessage = document.createElement("span");
        errorMessage.className = "error-message";
        errorMessage.style.cssText = "color: red; font-size: 14px; display: block; margin-top: 4px;";
        errorMessage.innerText = "이메일을 입력해주세요.";
        emailInput.closest(".input-group").appendChild(errorMessage);
      } else {
        errorMessage.innerText = "이메일을 입력해주세요.";
      }
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        emailInput.classList.add("input-error");
        if (!errorMessage) {
          errorMessage = document.createElement("span");
          errorMessage.className = "error-message";
          errorMessage.style.cssText = "color: red; font-size: 14px; display: block; margin-top: 4px;";
          errorMessage.innerText = "잘못된 이메일 형식입니다";
          emailInput.closest(".input-group").appendChild(errorMessage);
        } else {
          errorMessage.innerText = "잘못된 이메일 형식입니다";
        }
      } else {
        emailInput.classList.remove("input-error");
        if (errorMessage) errorMessage.remove();
      }
    }
    checkFormValidity();
  }

  // 비밀번호
  const passwordInput = document.getElementById("password");
  if (passwordInput) {
    passwordInput.addEventListener("blur", validatePassword);
    passwordInput.addEventListener("input", validatePassword);
  }
  function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    let errorMessage = passwordInput.closest(".input-group").querySelector(".error-message");
    if (!passwordValue) {
      passwordInput.classList.add("input-error");
      if (!errorMessage) {
        errorMessage = document.createElement("span");
        errorMessage.className = "error-message";
        errorMessage.style.cssText = "color: red; font-size: 14px; display: block; margin-top: 4px;";
        errorMessage.innerText = "비밀번호를 입력해주세요.";
        passwordInput.closest(".input-group").appendChild(errorMessage);
      } else {
        errorMessage.innerText = "비밀번호를 입력해주세요.";
      }
    } else if (passwordValue.length < 8) {
      passwordInput.classList.add("input-error");
      if (!errorMessage) {
        errorMessage = document.createElement("span");
        errorMessage.className = "error-message";
        errorMessage.style.cssText = "color: red; font-size: 14px; display: block; margin-top: 4px;";
        errorMessage.innerText = "비밀번호를 8자 이상 입력해주세요.";
        passwordInput.closest(".input-group").appendChild(errorMessage);
      } else {
        errorMessage.innerText = "비밀번호를 8자 이상 입력해주세요.";
      }
    } else {
      passwordInput.classList.remove("input-error");
      if (errorMessage) errorMessage.remove();
    }
    if (passwordCheckInput) {
      validatePasswordCheck();
    }
    checkFormValidity();
  }

  // 닉네임
  const nicknameInput = document.getElementById("nickname");
  if (nicknameInput) {
    nicknameInput.addEventListener("blur", validateNickname);
    nicknameInput.addEventListener("input", validateNickname);
  }
  function validateNickname() {
    const nicknameValue = nicknameInput.value.trim();
    let errorMessage = nicknameInput.closest(".input-group").querySelector(".error-message");
    if (!nicknameValue) {
      nicknameInput.classList.add("input-error");
      if (!errorMessage) {
        errorMessage = document.createElement("span");
        errorMessage.className = "error-message";
        errorMessage.style.cssText = "color: red; font-size: 14px; display: block; margin-top: 4px;";
        errorMessage.innerText = "닉네임을 입력해주세요.";
        nicknameInput.closest(".input-group").appendChild(errorMessage);
      } else {
        errorMessage.innerText = "닉네임을 입력해주세요.";
      }
    } else {
      nicknameInput.classList.remove("input-error");
      if (errorMessage) errorMessage.remove();
    }
    checkFormValidity();
  }

  // 비밀번호 - 회원가입
  const passwordCheckInput = document.getElementById("passwordCheck");
  if (passwordCheckInput) {
    passwordCheckInput.addEventListener("blur", validatePasswordCheck);
    passwordCheckInput.addEventListener("input", validatePasswordCheck);
  }
  function validatePasswordCheck() {
    if (passwordInput && passwordCheckInput) {
      const passwordValue = passwordInput.value;
      const passwordCheckValue = passwordCheckInput.value;
      let errorMessage = passwordCheckInput.closest(".input-group").querySelector(".error-message");
      if (passwordValue !== passwordCheckValue) {
        passwordCheckInput.classList.add("input-error");
        if (!errorMessage) {
          errorMessage = document.createElement("span");
          errorMessage.className = "error-message";
          errorMessage.style.cssText = "color: red; font-size: 14px; display: block; margin-top: 4px;";
          errorMessage.innerText = "비밀번호가 일치하지 않습니다.";
          passwordCheckInput.closest(".input-group").appendChild(errorMessage);
        } else {
          errorMessage.innerText = "비밀번호가 일치하지 않습니다.";
        }
      } else {
        passwordCheckInput.classList.remove("input-error");
        if (errorMessage) errorMessage.remove();
      }
      checkFormValidity();
    }
  }

  // 비밀번호 토글 (눈 아이콘 클릭 시) - 이미지 변경 없이 단순 토글
  const passwordWrappers = document.querySelectorAll(".password-wrapper");
  passwordWrappers.forEach(function (wrapper) {
    const toggleButton = wrapper.querySelector("button");
    const input = wrapper.querySelector("input");
    if (toggleButton && input) {
      toggleButton.addEventListener("click", function (e) {
        e.preventDefault();
        input.type = input.type === "password" ? "text" : "password";
      });
    }
  });

  // 폼 제출 처리
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (button.disabled) return;
    if (nicknameInput || passwordCheckInput) {
      window.location.href = "login.html";
    } else {
      window.location.href = "/items";
    }
  });
});
