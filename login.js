document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector(".emailform .innertext"); // 이메일 input
  const passwordInput = document.querySelector(".pswdform .innertext"); // 비밀번호 input
  const loginButton = document.querySelector(".login-btn"); // 로그인 버튼
  const emailLabel = document.querySelector(".emailform"); // 이메일 label
  const passwordLabel = document.querySelector(".pswdform"); // 비밀번호 label
  // 이메일 검사
  emailInput.addEventListener("blur", function () {
      validateEmail();
      toggleLoginButton();
  });
  // 비밀번호 검사
  passwordInput.addEventListener("blur", function () {
      validatePassword();
      toggleLoginButton();
  });
  // 로그인 버튼 클릭 시 /items로 이동
  loginButton.addEventListener("click", function (event) {
      if (loginButton.disabled) {
          event.preventDefault(); // 버튼이 비활성화 상태라면 이동하지 않음
      } else {
          window.location.href = "/items";
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
  // 로그인 버튼 활성화 할지말지
  function toggleLoginButton() {
      if (validateEmail() && validatePassword()) {
          loginButton.disabled = false;
          loginButton.classList.remove("disabled");
      } else {
          loginButton.disabled = true;
          loginButton.classList.add("disabled");
      }
  }
  // 초기 로그인 버튼 비활성화
  loginButton.disabled = true;
  loginButton.classList.add("disabled");
});