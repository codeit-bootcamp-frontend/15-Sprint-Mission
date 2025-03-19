/**
 *
 * @param {input태그 id} inputId
 * @param {i 태그 자신} iconElement
 */

const togglePasswordVisibility = (inputId, iconElement) => {
  const passwordInput = document.getElementById(inputId);
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";

  iconElement.classList.toggle("fa-eye", !isPassword); // 눈 아이콘 토글
  iconElement.classList.toggle("fa-eye-slash", isPassword); // 슬래시 아이콘 토글
};

//  index.html로 이동
const goHomepage = () => {
  window.location.href = "/index.html";
};
