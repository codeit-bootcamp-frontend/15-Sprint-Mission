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
  toggleSignupButton();
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
  toggleSignupButton();
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
  checkPasswordMatch();
  toggleSignupButton();
});
//비밀번호 8자리 검증
function isValidPassword(password) {
  return password.length >=8;
};
//비밀번호 재확인
document.getElementById('checkpassword').addEventListener('blur', function(){
  checkPasswordMatch();
  toggleSignupButton();
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
// 회원가입 클릭시
document.getElementById('signup-button').addEventListener('click', function(){
  const emailInput = document.getElementById('email');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const checkPasswordInput = document.getElementById('checkpassword');
  const signupButton = document.getElementById('signup-button');
  if (isValidEmail(emailInput.value) && usernameInput.value.trim() !== '' && isValidPassword(passwordInput.value) && checkPasswordMatch === checkPasswordInput.value) {
    window.location.href = "../signin/signin.html";
  } else {
    alert("정보를 입력해주세요.");
  }
  toggleSignupButton();
});
//회원가입 활성화 비활성화
function toggleSignupButton() {
  const emailInput = document.getElementById('email');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const checkPasswordInput = document.getElementById('checkpassword');
  const signupButton = document.getElementById('signup-button');
  if (isValidEmail(emailInput.value) && usernameInput.value.trim() !== '' && isValidPassword(passwordInput.value) && checkPasswordMatch === checkPasswordInput.value) {
    signupButton.disabled = false;
    signupButton.classList.remove('disabled');
  } else {
    signupButton.disabled = true;
    signupButton.classList.add('disabled');
  }
}




















//  다시 작성
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
//비밀번호 확인 눈모양설정
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
// // 이메일 양식 검사
// function isValidEmail(email){
//   const emailstyle = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return emailstyle.test(email);
// }
// // 비밀번호 양식 검사
// function isValidPassword(password){
//   return password.length >= 8;
// }
// // 비밀번호 확인부분 에러 설정
// function checkPasswordMatch(){
//   const passwordInput = document.getElementById('password');
//   const checkPasswordInput = document.getElementById('checkpassword');
//   const errorMassageMatch = document.getElementById('error-matchpassword-message');

//   if (passwordInput.value !== checkPasswordInput.value){
//     checkPasswordInput.classList.add('error');
//     errorMassageMatch.style.display = 'block';
//     return false;
//   } else {
//     checkPasswordInput.classList.remove('error');
//     errorMassageMatch.style.display = 'none';
//   }
// }
// // 전체 필드 유효성 검사 및 회원가입 버튼 활성/비활성
// function validateForm(){
//   const emailInput = document.getElementById('email');
//   const usernameInput = document.getElementById('username');
//   const passwordInput = document.getElementById('password');
//   const checkPasswordInput = document.getElementById('checkpassword');
//   const signupInput = document.getElementById('signup-button');

//   //이메일
//   const emailValid = isValidEmail(emailInput.value);
//   const emailErrorMessage = document.getElementById('error-email-message');
//   const emailformErrorMessage = document.getElementById('error-emailform-message')
//   if (emailInput.value.trim() === ''){
//     emailInput.classList.add('error');
//     emailErrorMessage.style.display = 'block';
//     emailformErrorMessage.style.display = 'none';
//   } else if (!emailValid){
//     emailInput.classList.add('error');
//     emailErrorMessage.style.display = 'none';
//     emailformErrorMessage.style.display = 'block';
//   } else {
//     emailInput.classList.remove('error');
//     emailErrorMessage.style.display = 'none';
//     emailformErrorMessage.style.display = 'none';
//   }
//   //닉네임
//   const usernameValid = usernameInput.value.trim() !== '';
//   const usernameErrorMessage = document.getElementById('error-username-message');
//   if (!usernameValid){
//     usernameInput.classList.add('error')
//     usernameErrorMessage.style.display = 'block';
//   } else {
//     usernameInput.classList.remove('error')
//     usernameErrorMessage.style.display = 'none';
//   }
//   //비밀번호
//   const passwordValid = isValidPassword(passwordInput.value);
//   const passwordErrorMessage = document.getElementById('error-password-message');
//   const passwordLengthErrorMessage = document.getElementById('error-message-length');
//   if (passwordInput.value.trim() ===''){
//     passwordInput.classList.add('error');
//     passwordErrorMessage.style.display = 'block';
//     passwordLengthErrorMessage.style.display = 'none';
//   } else if (!passwordValid){
//     passwordInput.classList.add('error');
//     passwordErrorMessage.style.display = 'none';
//     passwordLengthErrorMessage.style.display = 'block';
//   } else {
//     passwordInput.classList.remove('error');
//     passwordErrorMessage.style.display = 'none';
//     passwordLengthErrorMessage.style.display = 'none';
//   }
//   //비밀번호 확인
//   const passwordMatchValid = checkPasswordMatch();
//   // 폼 확인 후 회원가입 활성/비활성화
//   if (emailValid && usernameValid && passwordValid && passwordMatchValid) {
//     signupInput.disabled = false;
//   } else {
//     signupInput.disabled = true;
//   }
// };
// // blur 이벤트 추가 = 입력이 끝나면 반응
// document.getElementById('email').addEventListener('blur', validateForm);
// document.getElementById('username').addEventListener('blur', validateForm);
// document.getElementById('password').addEventListener('blur', validateForm);
// document.getElementById('checkpassword').addEventListener('blur', validateForm);
// // 페이지 이동
// document.getElementById('signup-button').addEventListener('click', function(){
//   window.location.href = "../signin/signin.html";
// });

