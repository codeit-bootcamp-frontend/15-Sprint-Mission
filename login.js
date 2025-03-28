const loginButton = document.querySelector(".login");

// 로그인 버튼 활성화 
function toggleButton() {
    // 이메일, 비밀번호 유효성 검사 및 값이 있는지 확인
    if (emailErr.textContent === "" && passwordErr.textContent === "" &&
        emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
        loginButton.disabled = false;
        loginButton.classList.add("active");
    } else {
        loginButton.disabled = true;
        loginButton.classList.remove("active");
    }
}

// 로그인 폼 제출 이벤트
document.querySelector(".login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!loginButton.disabled) {
        window.location.href = "/items.html";
    }
});