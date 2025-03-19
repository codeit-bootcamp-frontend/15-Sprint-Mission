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
  validateForm();
});
// 이메일 양식 검증
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
//닉네임
document.getElementById('username').addEventListener('blur', function(){
  const usernameInput = document.getElementById('username');
  const errorMassage = document.getElementById('error-username-message');
  if(!usernameInput.value) {
    usernameInput.classList.add('error');
    errorMassage.style.display = 'block';
  } else {
    usernameInput.classList.remove('error');
    errorMassage.style.display = 'none';
  }
  validateForm();
});
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
});
//비밀번호 8자리 검증
function isValidPassword(password) {
  return password.length >=8;
};
//비밀번호 재확인
document.getElementById('checkpassword').addEventListener('blur', function(){
  checkPasswordMatch();
  validateForm();
});
//비밀번호 확인
function checkPasswordMatch() {
  const passwordInput = document.getElementById('password');
  const checkpassword = document.getElementById('checkpassword');
  const errorMassageMatch = document.getElementById('error-matchpassword-message');
  if (passwordInput.value !== checkpassword.value) {
    checkpassword.classList.add('error');
    errorMassageMatch.style.display = 'block';
  } else {
    checkpassword.classList.remove('error');
    errorMassageMatch.style.display = 'none';
  }
};
//회원가입 활성화 비활성화
function validateForm() {
  const emailInput = document.getElementById('email');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const checkPasswordInput = document.getElementById('checkpassword');
  const signupButton = document.getElementById('signup-button');

  const emailValid = isValidEmail(emailInput.value.trim());
  const usernameValid = usernameInput.value.trim() !== '';
  const passwordValid = isValidPassword(passwordInput.value.trim());
  const passwordsMatch = passwordInput.value === checkPasswordInput.value;

  if (emailValid && usernameValid && passwordValid && passwordsMatch) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
};
// 회원가입 클릭시 페이지이동 및 메세지
document.getElementById('signup-button').addEventListener('click', function(){
  const emailInput = document.getElementById('email');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const checkPasswordInput = document.getElementById('checkpassword');
  
  const emailValid = isValidEmail(emailInput.value.trim());
  const usernameValid = usernameInput.value.trim() !== '';
  const passwordValid = isValidPassword(passwordInput.value.trim());
  const passwordsMatch = passwordInput.value === checkPasswordInput.value;
  
  if (emailValid && usernameValid && passwordValid && passwordsMatch) {
    window.location.href = "../signin/signin.html";
  } else {
    alert("정보를 입력해주세요.");
  }
});
//<비밀번호> 눈모양설정
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
//<비밀번호 확인> 눈모양설정
document.getElementById('toggle-password-re').addEventListener('click', function(){
  const passwordInput = document.getElementById('checkpassword');
  const eyeIcon = document.getElementById('eye-icon-re')

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.src = '../img/passwordEye.svg';
    } else {
      passwordInput.type = 'password';
    eyeIcon.src = '../img/passwordBlind.svg';
    }
});

