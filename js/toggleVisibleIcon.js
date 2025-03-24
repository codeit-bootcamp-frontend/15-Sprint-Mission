// cdn은 비동기 처리 및 <i> 요소가 실제 존재하지 않을 수 있으므로 페이지 로드가 다 되고 처리
// 로그인 및 회원가입 input에서 공통적으로 사용

document.addEventListener("DOMContentLoaded", () => {
  // 눈 모양 아이콘 선택 (NodeList로 반환)
  const passwordToggles = document.querySelectorAll(".password-toggle-icon");

  // 각 요소에 대한 이벤트 리스너 할당
  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const passwordInput = toggle.closest("div").querySelector("input"); // 가까운 조상 찾기
      const visibleIcon = toggle.querySelector("i");

      // 비밀번호 input 타입 토글
      const isPasswordVisible = passwordInput.type === "text";
      passwordInput.type = isPasswordVisible ? "password" : "text";

      // <i> 태그 클래스 전환
      visibleIcon.classList.toggle("fa-eye");
      visibleIcon.classList.toggle("fa-eye-slash");
    });
  });
});
