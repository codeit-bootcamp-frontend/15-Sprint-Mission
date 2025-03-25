export function initPasswordToggles() {
  document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', () => {
      const input = document.getElementById(button.getAttribute('data-target'));
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      button.classList.toggle('show-password-icon');
      button.classList.toggle('hide-password-icon');
    });
  });
}