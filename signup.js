document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector(".emailform .innertext"); // 이메일 input
  const passwordInput = document.querySelector(".pswdform .innertext"); // 비밀번호 input
  const signupButton = document.querySelector(".signup-btn"); // 회원가입 버튼
  const emailLabel = document.querySelector(".emailform"); // 이메일 label
  const passwordLabel = document.querySelector(".pswdform"); // 비밀번호 label
  const nicknameInput = document.querySelector(".nickname .innertext"); // 닉네임 input
  const passwordCheckInput = document.querySelector(".checkpswd .innertext"); //비밀번호 확인 input
  const nicknameLabel = document.querySelector(".nickname"); //닉네임 label
  const passwordCheckLabel = document.querySelector(".checkpswd"); // 비밀번호확인 label
  // 이메일 검사
  emailInput.addEventListener("blur", function () {
      validateEmail();
      toggleSignupButton();
  });
  // 비밀번호 검사
  passwordInput.addEventListener("blur", function () {
      validatePassword();
      toggleSignupButton();
  });
  // 닉네임 검사
  nicknameInput.addEventListener("blur", function () {
    validateNickname();
    toggleSignupButton();
  });
  //비밀번호 확인 검사
  passwordCheckInput.addEventListener("blur", function () {
    validatePasswordCheck();
    toggleSignupButton();
  });
  // 회원가입 버튼 클릭 시 로그인페이지로 이동
  signupButton.addEventListener("click", function (event) {
      if (signupButton.disabled) {
          event.preventDefault(); // 버튼이 비활성화 상태라면 이동하지 않음
      } else {
          window.location.href = "/login.html";
      }
  });
  // 이메일 조건문
  function validateEmail() {
      const emailValue = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      removeErrorMessage(emailLabel);

      if (emailValue === "") {
          showError(emailLabel, "이메일을 입력해주세요.");
          emailInput.classList.add("error");
          return false;
      } else if (!emailPattern.test(emailValue)) {
          showError(emailLabel, "잘못된 이메일입니다.");
          emailInput.classList.add("error");
          return false;
      } else {
          emailInput.classList.remove("error");
          return true;
      }
  }
  // 비밀번호 조건문
  function validatePassword() {
      const passwordValue = passwordInput.value.trim();

      removeErrorMessage(passwordLabel);

      if (passwordValue === "") {
          showError(passwordLabel, "비밀번호를 입력해주세요.");
          passwordInput.classList.add("error");
          return false;
      } else if (passwordValue.length < 8) {
          showError(passwordLabel, "비밀번호를 8자 이상 입력해주세요.");
          passwordInput.classList.add("error");
          return false;
      } else {
          passwordInput.classList.remove("error");
          return true;
      }
  }
  // 닉네임 조건문
  function validateNickname() {
    const nicknameValue = nicknameInput.value.trim();

    removeErrorMessage(nicknameLabel);

    if (nicknameValue === "") {
        showError(nicknameLabel, "닉네임을 입력해주세요.");
        nicknameInput.classList.add("error");
        return false;
    } else {
        nicknameInput.classList.remove("error");
        return true;
    }
  }
  // 비밀번호 확인 조건문
  function validatePasswordCheck() {
    const passwordCheckValue = passwordCheckInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    removeErrorMessage(passwordCheckLabel);

    if (passwordCheckValue === "") {
        showError(passwordCheckLabel, "비밀번호를 입력해주세요.");
        passwordCheckInput.classList.add("error");
        return false;
    } else if (passwordCheckValue !== passwordValue) {
        showError(passwordCheckLabel, "비밀번호가 일치하지 않습니다.");
        passwordCheckInput.classList.add("error");
        return false;
    } else {
        passwordCheckInput.classList.remove("error");
        return true;
    }
  }

  // 에러 메시지 표시 함수
  function showError(label, message) {
      let errorMessage = document.createElement("p");
      errorMessage.classList.add("error-message");
      errorMessage.textContent = message;
      label.appendChild(errorMessage);
  }
  // 기존 에러 메시지 제거 함수
  function removeErrorMessage(label) {
      const existingError = label.querySelector(".error-message");
      if (existingError) {
          existingError.remove();
      }
  }
  // 회원가입 버튼 활성화 할지말지
  function toggleSignupButton() {
      if (validateEmail() && validatePassword() && validateNickname() && validatePasswordCheck()) {
          signupButton.disabled = false;
          signupButton.classList.remove("disabled");
      } else {
          signupButton.disabled = true;
          signupButton.classList.add("disabled");
      }
  }
  // 초기 로그인 버튼 비활성화
  signupButton.disabled = true;
  signupButton.classList.add("disabled");
});