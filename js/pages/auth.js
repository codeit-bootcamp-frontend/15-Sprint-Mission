const toggleViewPassword = () => {
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

const validateInput = (input, validationRules = null) => {
  if (!input) return;

  const parentLi = input.closest('li');

  input.addEventListener('focusout', () => {
    // 빈값 체크
    if (!input.value) {
      parentLi.classList.add('error-empty');
      parentLi.classList.remove('error-format');
      checkAllInputsValid();
      return;
    }

    // validationRules가 있을 때만 추가 유효성 검사 실행
    if (validationRules && !validationRules.test(input.value)) {
      parentLi.classList.add('error-format');
      parentLi.classList.remove('error-empty');
      checkAllInputsValid();
      return;
    }

    // 유효성 검사 통과시
    parentLi.classList.remove('error-empty', 'error-format');
    parentLi.classList.add('is-valid');
    checkAllInputsValid();
  });
};

const checkAllInputsValid = () => {
  const authForm = document.querySelector('.auth-form');
  const submitButton = document.querySelector('.auth-btn');

  // 현재 페이지에 있는 입력 필드만 검사
  const inputs = authForm.querySelectorAll('input');
  const isAllValid = Array.from(inputs).every((input) => {
    const parent = input.closest('li');
    return input.value && !parent.classList.contains('error-empty') && !parent.classList.contains('error-format');
  });

  // 버튼 상태 업데이트
  submitButton.disabled = !isAllValid;
};

const checkInputValid = (page) => {
  
  // 이메일 유효성 검사
  const emailInput = document.querySelector('#email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  validateInput(emailInput, emailRegex);
  
  // 비밀번호 유효성 검사 (8자 이상)
  const passwordInput = document.querySelector('#password');
  const passwordRegex = /^.{8,}$/;
  validateInput(passwordInput, passwordRegex);
  
  
  // 닉네임 빈값 체크
  if (page === 'signup') {
    const nicknameInput = document.querySelector('#nickname');
    validateInput(nicknameInput);
  }

  // 비밀번호 확인 유효성 검사
  if (page === 'signup') {
    const passwordConfirmInput = document.querySelector('#password-confirm');
    const passwordConfirmRegex = /^.{8,}$/;
    validateInput(passwordConfirmInput, passwordConfirmRegex);
  }

  // 초기 버튼 상태 체크
  checkAllInputsValid();
};

const getCurrentPage = () => {
  const path = document.getElementById('container').classList.contains('login') ? 'login' : 'signup';
  return path;
};

const initAuthButton = (page) => {
  const authForm = document.querySelector('#authForm');

  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitButton = authForm.querySelector('.auth-btn');

    if (!submitButton.disabled) {
      const redirectPath = page === 'login' ? '/items.html' : '/login.html';
      window.location.href = redirectPath;
    }
  });
};

export function authInit() {
  const currentPage = getCurrentPage();
  toggleViewPassword();
  checkInputValid(currentPage);
  initAuthButton(currentPage);
}