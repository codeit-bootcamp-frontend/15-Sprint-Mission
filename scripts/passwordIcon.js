const toggleIcon = document.querySelector('.passwordIcon');

function changeIcon() {
  if (password.type === 'password') {
    password.type = 'text';
    toggleIcon.src = '/images/icons/eyeOpen.png';
  } else {
    password.type = 'password';
    toggleIcon.src = '/images/icons/eyesIcon.png';
  }
}

toggleIcon.addEventListener('click', changeIcon);
