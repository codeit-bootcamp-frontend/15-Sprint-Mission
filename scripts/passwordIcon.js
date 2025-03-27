const toggleIcons = document.querySelectorAll('.passwordIcon');

toggleIcons.forEach((icon) => {
  icon.addEventListener('click', function () {
    const passwordInput = this.parentElement.querySelector('input');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.src = '/images/icons/eyeOpen.png';
    } else {
      passwordInput.type = 'password';
      this.src = '/images/icons/eyesIcon.png';
    }
  });
});
