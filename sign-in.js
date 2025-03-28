/* login, signup 공통 */

// 이메일 유효성 검사 함수
function emailValidation(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// 요소 가져오기
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");
const passwordVisibility = document.getElementById("passwordVisibility");

// 초기 오류 메시지 숨김
emailErr.textContent = "";
passwordErr.textContent = "";

// 이메일 검증 
function validateEmail() {
  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
      emailErr.textContent = "이메일을 입력해주세요.";
      emailInput.classList.add("error-input");
      emailInput.classList.remove("correct-input");
  } else if (!emailValidation(emailValue)) {
      emailErr.textContent = "잘못된 이메일 형식입니다.";
      emailInput.classList.add("error-input");
      emailInput.classList.remove("correct-input");
  } else {
      emailErr.textContent = "";
      emailInput.classList.remove("error-input");
      emailInput.classList.add("correct-input");
  }
  toggleButton();
}

// 비밀번호 검증
function validatePassword() {
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === "") {
      passwordErr.textContent = "비밀번호를 입력해주세요.";
      passwordInput.classList.add("error-input");
      passwordInput.classList.remove("correct-input");
  } else if (passwordValue.length < 8) {
      passwordErr.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordInput.classList.add("error-input");
      passwordInput.classList.remove("correct-input");
  } else {
      passwordErr.textContent = "";
      passwordInput.classList.remove("error-input");
      passwordInput.classList.add("correct-input");
  }
  toggleButton();
}

// 비밀번호 보이기/숨기기 기능
function togglePasswordVisibility(input, button) {
  if (input.type === "password") {
      input.type = "text";
      button.innerHTML = '<img src="/images/eye-icon.png" class="eye-icon" alt="eye-off">';
  } else {
      input.type = "password";
      button.innerHTML = '<img src="/images/invisible-eye-icon.png" class="eye-icon" alt="eye-on">';
  }
}

// 이벤트 리스너 추가
emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
passwordVisibility.addEventListener("click", () => togglePasswordVisibility(passwordInput, passwordVisibility));

// 엔터 키 입력 시 검증 함수 실행
emailInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    validateEmail();
  }
});

passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    validatePassword();
  }
});