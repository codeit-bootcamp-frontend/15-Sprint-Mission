const togglePassword = () => {
  const toggleButtons = document.querySelectorAll('.toggle-password');
  const passwordFields = document.querySelectorAll('input[type="password"]');

  toggleButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      const type = passwordFields[index].getAttribute('type') === 'password' ? 'text' : 'password';
      passwordFields[index].setAttribute('type', type);

      this.querySelector('img').src =
        type === 'password' ? 'images/common/ic_eye_off.svg' : 'images/common/ic_eye_on.svg';
    });
  });
};

export { togglePassword };
