// input 에러 메시지 표시
export const toggleError = (targetInput, message, isInputValid) => {
  const errorContainer = targetInput
    .closest('.input-container')
    ?.querySelector('.validation-error-message');
  if (!errorContainer) return;

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
