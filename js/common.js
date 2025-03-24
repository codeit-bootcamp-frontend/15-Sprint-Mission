/* 에러 메시지 처리 */
function wrongInput(input, span, validateFunction) {
  const errorMessage = validateFunction(input);
  if (errorMessage) {
    input.classList.add("warning");
    input.classList.remove("done");
    span.textContent = errorMessage;
  } else {
    input.classList.remove("warning");
    input.classList.add("done");
    span.textContent = "";
  }
  input.parentElement.appendChild(span);
  if (span.textContent === "") {
    input.parentElement.removeChild(span);
  }
}

/* 눈모양 버튼 클릭시 비밀번호 보이기 or 가리기 */
function togglePasswordVisibility(button) {
  const passwordInput = button.previousElementSibling;
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    button.classList.add("visible");
  } else {
    passwordInput.type = "password";
    button.classList.remove("visible");
  }
}

/* inputs에 모두 done 클래스가 있다면 버튼 활성화 */
function activateButton(button, inputs) {
  if (inputs.every((input) => input.classList.contains("done"))) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

// 버튼 클릭시 특정 페이지로 이동
function redirectToPage(event, redirectUrl) {
  event.preventDefault();
  window.location.href = redirectUrl;
}

export { wrongInput, togglePasswordVisibility, activateButton, redirectToPage };
