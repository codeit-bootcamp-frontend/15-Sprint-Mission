const signupButton = document.querySelector(".signup");
const nicknameInput = document.getElementById("nickname");
const nicknameErr = document.getElementById("nicknameErr");
const passwordCheckInput = document.getElementById("password-check");
const passwordCheckErr = document.getElementById("passwordCheckErr");
const passwordCheckVisibility = document.getElementById("passwordCheckVisibility");

// signup.js과 auth.js의 중복 변수명 다르게 선언
const signupEmailInput = document.getElementById("email");
const signupPasswordInput = document.getElementById("password");
const signupEmailErr = document.getElementById("emailErr");
const signupPasswordErr = document.getElementById("passwordErr");

// 닉네임 검증
function validateNickname() {
  const nicknameValue = nicknameInput.value.trim();

  if (nicknameValue === "") {
    nicknameErr.textContent = "닉네임을 입력해주세요.";
    nicknameInput.classList.add("error-input");
    nicknameInput.classList.remove("correct-input");
  } else {
    nicknameErr.textContent = "";
    nicknameInput.classList.remove("error-input");
    nicknameInput.classList.add("correct-input");
  }
  toggleButton();
}

// 비밀번호 확인 검증
function validatePasswordCheck() {
  const passwordValue = signupPasswordInput.value.trim();
  const passwordCheckValue = passwordCheckInput.value.trim();

  if (passwordValue !== passwordCheckValue) {
    passwordCheckErr.textContent = "비밀번호가 일치하지 않습니다.";
    passwordCheckInput.classList.add("error-input");
    passwordCheckInput.classList.remove("correct-input");
  } else {
    passwordCheckErr.textContent = "";
    passwordCheckInput.classList.remove("error-input");
    passwordCheckInput.classList.add("correct-input");
  }
  toggleButton();
}

// 이벤트 리스너 추가
nicknameInput.addEventListener("focusout", validateNickname);
passwordCheckInput.addEventListener("focusout", validatePasswordCheck);
passwordCheckVisibility.addEventListener("click", () =>
  togglePasswordVisibility(passwordCheckInput, passwordCheckVisibility)
);

// 회원가입 버튼 활성화
function toggleButton() {
  if (
    signupEmailErr.textContent === "" &&
    signupPasswordErr.textContent === "" &&
    nicknameErr.textContent === "" &&
    passwordCheckErr.textContent === "" &&
    signupEmailInput.value.trim() !== "" &&
    nicknameInput.value.trim() !== "" &&
    signupPasswordInput.value.trim() !== "" &&
    passwordCheckInput.value.trim() !== ""
  ) {
    signupButton.disabled = false;
    signupButton.classList.add("active");
  } else {
    signupButton.disabled = true;
    signupButton.classList.remove("active");
  }
}

// 회원가입 폼 제출 이벤트
document.querySelector(".signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!signupButton.disabled) {
    window.location.href = "/login.html";
  }
});
