//이메일
document.getElementById('email').addEventListener('blur', function(){
  const emailInput = document.getElementById('email');
  const errorMassage = document.getElementById('error-email-message');
  const errorMassageFormat = document.getElementById('error-emailform-message')
  if (emailInput.value.trim() === '') {
    emailInput.classList.add('error');
    errorMassage.style.display = 'block';
    errorMassageFormat.style.display = 'none';
  } else if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add('error');
    errorMassageFormat.style.display = 'block';
    errorMassage.style.display = 'none';
  } else {
    emailInput.classList.remove('error');
    errorMassage.style.display = 'none';
    errorMassageFormat.style.display = 'none';
  }
})
//이메일 양식
function isValidEmail(email) {
  const emailstyle = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailstyle.test(email);
}
//비밀번호
document.getElementById('password').addEventListener('blur', function(){
  const passwordInput = document.getElementById('password');
  const errorMassage = document.getElementById('error-password-message');
  const errorMassageLength = document.getElementById('error-message-length');
  if (passwordInput.value.trim() ==='') {
    passwordInput.classList.add('error');
    errorMassage.style.display = 'block';
    errorMassageLength.style.display = 'none';
  } else if (passwordInput.value.length < 8) {
    passwordInput.classList.add('error');
    errorMassageLength.style.display = 'block';
    errorMassage.style.display = 'none';
  } else {
    passwordInput.classList.remove('error');
    errorMassage.style.display = 'none';
    errorMassageLength.style.display = 'none';
  }
  validateForm();
})
//비밀번호 8자리 확인
function isValidPassword(password) {
  return password.length >=8;
}
// 이메일 + 비밀번호 유효성
function validateForm() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginButton = document.getElementById('signin-button');
//유효성 변수
  const emailValid = isValidEmail(emailInput.value.trim());
  const passwordValid = isValidPassword(passwordInput.value.trim());
  if (emailValid && passwordValid) {
    loginButton.disabled = false;    
  } else {
    loginButton.disabled = true;
  }
}
// 로그인 클릭시
document.getElementById('signin-button').addEventListener('click',function(){
  window.location.href = "/items";
})

//비밀번호 눈모양설정
document.getElementById('toggle-password').addEventListener('click', function(){
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon')

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.src = '../img/passwordEye.svg';
    } else {
      passwordInput.type = 'password';
    eyeIcon.src = '../img/passwordBlind.svg';
    }
})

toggleSigninButton();