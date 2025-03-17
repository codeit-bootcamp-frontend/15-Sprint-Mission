document.getElementById('email').addEventListener('blur', function(){
  const emailInput = document.getElementById('email');
  const errorMassage = document.getElementById('error-message');

  if(!emailInput.value) {
    emailInput.classList.add('error');
    errorMassage.style.display = 'block';
  } else {
    emailInput.classList.remove('error');
    errorMassage.style.display = 'none';
  }
});