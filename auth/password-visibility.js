function setupPasswordVisibility() {
  const passwordToggleBtn = document.getElementById('password-visibility');
  const confirmToggleBtn = document.getElementById(
    'password-confirm-visibility',
  );
  const passwordInput = document.getElementById('password');
  const confirmInput = document.getElementById('password-confirm');

  function togglePasswordVisibility(targetInput, toggleBtn) {
    if (targetInput.type === 'password') {
      targetInput.type = 'text';
      toggleBtn.querySelector('img').src = '../images/open_eye_grey.svg';
      toggleBtn.querySelector('img').alt = 'open eye icon';
    } else {
      targetInput.type = 'password';
      toggleBtn.querySelector('img').src = '../images/close_eye_grey.svg';
      toggleBtn.querySelector('img').alt = 'closed eye icon';
    }
  }

  if (passwordInput && passwordToggleBtn) {
    passwordToggleBtn.addEventListener('click', () => {
      togglePasswordVisibility(passwordInput, passwordToggleBtn);
    });
  }

  if (confirmInput && confirmToggleBtn) {
    confirmToggleBtn.addEventListener('click', () => {
      togglePasswordVisibility(confirmInput, confirmToggleBtn);
    });
  }
}

document.addEventListener('DOMContentLoaded', setupPasswordVisibility);
