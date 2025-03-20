// cdn에서 아이콘 불러오는 것은 비동기적
// <i> 요소 존재하지 않을 수도 있으므로 HTML이 완전히 로드된 이후 사용하도록 함

document.addEventListener("DOMContentLoaded", () => {
  const visibleIcon = document.querySelector(".password-toggle-icon i");
  const passwordInput = document.querySelector("#password");

  visibleIcon.parentElement.addEventListener("click", () => {
    // 비밀번호 input 타입 토글
    const isPasswordVisible = passwordInput.type === "text";
    passwordInput.type = isPasswordVisible ? "password" : "text";

    // <i> 태그 클래스 전환
    visibleIcon.classList.toggle("fa-eye");
    visibleIcon.classList.toggle("fa-eye-slash");
  });
});
