/* login, signup 공통 */

// 이메일 유효성 검사 함수
function emailValidation(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// 요소 가져오기
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordRepeatInput = document.getElementById("password-repeat");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");
const passwordCheckErr = document.getElementById("passwordCheckErr");
const passwordVisibility = document.getElementById("passwordVisibility");

let isPasswordCheckTouched = false; // 비밀번호 확인 입력 여부 추적

// 초기 오류 메시지 숨김
emailErr.style.display = "none";
passwordErr.style.display = "none";
passwordCheckErr.style.display = "none";

// 이메일 검증
function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
        emailErr.textContent = "이메일을 입력해주세요.";
        emailErr.style.display = "block";
        emailInput.classList.add("error-input");
        emailInput.classList.remove("correct-input");
    } else if (!emailValidation(emailValue)) {
        emailErr.textContent = "잘못된 이메일 형식입니다.";
        emailErr.style.display = "block";
        emailInput.classList.add("error-input");
        emailInput.classList.remove("correct-input");
    } else {
        emailErr.style.display = "none";
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
        passwordErr.style.display = "block";
        passwordInput.classList.add("error-input");
        passwordInput.classList.remove("correct-input");
    } else if (passwordValue.length < 8) {
        passwordErr.textContent = "비밀번호를 8자 이상 입력해주세요.";
        passwordErr.style.display = "block";
        passwordInput.classList.add("error-input");
        passwordInput.classList.remove("correct-input");
    } else {
        passwordErr.style.display = "none";
        passwordInput.classList.remove("error-input");
        passwordInput.classList.add("correct-input");
    }
    toggleButton();
}

// 비밀번호 확인 검증
function validatePasswordCheck() {
    const passwordValue = passwordInput.value.trim();
    const passwordCheckValue = passwordRepeatInput.value.trim();

    if (!isPasswordCheckTouched) {
        passwordCheckErr.style.display = "none"; // 입력 전에는 오류 문구 숨김
        return;
    }

    if (passwordCheckValue === "") {
        passwordCheckErr.style.display = "none"; // 비밀번호 확인 필드가 비었을 때도 오류 메시지 숨김
    } else if (passwordValue !== passwordCheckValue) {
        passwordCheckErr.textContent = "비밀번호가 일치하지 않습니다.";
        passwordCheckErr.style.display = "block";
        passwordRepeatInput.classList.add("error-input");
    } else {
        passwordCheckErr.style.display = "none";
        passwordRepeatInput.classList.remove("error-input");
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

// 회원가입 버튼 활성화
function toggleButton() {
    const isFormValid =
        emailErr.style.display === "none" &&
        passwordErr.style.display === "none" &&
        passwordCheckErr.style.display === "none" &&
        emailInput.value.trim() !== "" &&
        passwordInput.value.trim() !== "" &&
        passwordRepeatInput.value.trim() !== "";

    const signupButton = document.querySelector(".signup");
    if (isFormValid) {
        signupButton.disabled = false;
        signupButton.classList.add("active");
    } else {
        signupButton.disabled = true;
        signupButton.classList.remove("active");
    }
}

// 이벤트 리스너 추가
emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
passwordRepeatInput.addEventListener("input", () => {
    isPasswordCheckTouched = true; // 사용자가 입력 시작했음을 추적
    validatePasswordCheck(); // 입력 시에도 검증 함수 실행
});
passwordRepeatInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        validatePasswordCheck();
    }
});
passwordVisibility.addEventListener("click", () => togglePasswordVisibility(passwordInput, passwordVisibility));