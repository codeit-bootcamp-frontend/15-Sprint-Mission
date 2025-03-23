// input 에러 메시지 표시
export const toggleError = (targetInput, message, isInputValid) => {
  const inputContainer = targetInput.closest('.input-container');
  if (!inputContainer) return;
  const errorContainer = inputContainer.querySelector(
    '.validation-error-message',
  );
  if (!isInputValid) {
    targetInput.classList.add('error-input');
    errorContainer.textContent = message;
    errorContainer.classList.add('active');
  } else {
    targetInput.classList.remove('error-input');
    errorContainer.textContent = '';
    errorContainer.classList.remove('active');
  }
};
