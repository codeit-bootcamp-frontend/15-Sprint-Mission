/**
 * 폼 유효성 검사 관리 모듈
 * 로그인 및 회원가입 폼을 위한 유효성 검사 기능을 제공합니다.
 */

// 에러 메시지 상수 객체
const ErrorMessage = {
  emailRequired: '이메일을 입력해주세요.',
  invalidEmail: '잘못된 이메일 형식입니다.',
  nicknameRequired: '닉네임을 입력해주세요.',
  passwordRequired: '비밀번호를 입력해주세요.',
  passwordLength: '비밀번호를 8자 이상 입력해주세요.',
  passwordMismatch: '비밀번호가 일치하지 않습니다.',
  confirmPasswordRequired: '비밀번호를 다시 한번 입력해주세요.',
};

// 모듈 패턴을 사용한 폼 유효성 검사 관리자
const FormValidator = (function() {
  // 비공개 변수
  let form, emailInput, passwordInput, submitButton;
  let nicknameInput, confirmPasswordInput;
  let isLoginPage, isSignupPage;

  // 비공개 함수: DOM 요소 초기화
  function initElements() {
    const loginForm = document.getElementById('myForm');
    const signupForm = document.getElementById('myFormSignUp');
    
    isLoginPage = loginForm !== null;
    isSignupPage = signupForm !== null;
    form = isLoginPage ? loginForm : signupForm;
    
    if (!form) return false;
    
    emailInput = document.getElementById('email');
    passwordInput = document.getElementById('password');
    submitButton = form.querySelector(isLoginPage ? '.login' : '.sigup');
    
    if (isSignupPage) {
      nicknameInput = document.getElementById('nickname');
      confirmPasswordInput = document.getElementById('confirmPassword');
    }
    
    return true;
  }

  // 비공개 함수: 에러 메시지 표시
  function showError(input, message) {
    input.style.borderColor = 'red';
    
    // 기존 에러 메시지 삭제
    removeError(input);
    
    // 새 에러 메시지 생성하고 표시
    const newErrorElement = document.createElement('p');
    newErrorElement.className = 'error-message';
    newErrorElement.textContent = message;
    newErrorElement.style.color = 'red';
    newErrorElement.style.margin = '5px 0 0 0';
    newErrorElement.style.display = 'block';
    
    input.parentElement.appendChild(newErrorElement);
  }
  
  // 비공개 함수: 에러 메시지 제거
  function removeError(input) {
    input.style.borderColor = '';
    
    const errorElement = input.parentElement.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }
  
  // 비공개 함수: 유효성 검사 함수들
  const validators = {
    // 이메일 유효성 검사
    checkEmail: function() {
      emailInput.type = 'email';
      const value = emailInput.value.trim();
      
      removeError(emailInput);
      
      if (value === '') {
        showError(emailInput, ErrorMessage.emailRequired);
        return false;
      }
      
      if (!emailInput.validity.valid) {
        showError(emailInput, ErrorMessage.invalidEmail);
        return false;
      }
      
      return true;
    },
    
    // 비밀번호 유효성 검사
    checkPassword: function() {
      const value = passwordInput.value.trim();
      
      removeError(passwordInput);
      
      if (value === '') {
        showError(passwordInput, ErrorMessage.passwordRequired);
        return false;
      }
      
      if (value.length < 8) {
        showError(passwordInput, ErrorMessage.passwordLength);
        return false;
      }
      
      return true;
    },
    
    // 닉네임 유효성 검사
    checkNickname: function() {
      if (!isSignupPage) return true;
      
      const value = nicknameInput.value.trim();
      
      removeError(nicknameInput);
      
      if (value === '') {
        showError(nicknameInput, ErrorMessage.nicknameRequired);
        return false;
      }
      
      return true;
    },
    
    // 비밀번호 확인 유효성 검사
    checkConfirmPassword: function() {
      if (!isSignupPage) return true;
      
      const confirmValue = confirmPasswordInput.value.trim();
      const passwordValue = passwordInput.value.trim();
      
      removeError(confirmPasswordInput);
      
      if (confirmValue === '') {
        showError(confirmPasswordInput, ErrorMessage.confirmPasswordRequired);
        return false;
      }
      
      if (confirmValue !== passwordValue) {
        showError(confirmPasswordInput, ErrorMessage.passwordMismatch);
        return false;
      }
      
      return true;
    }
  };
  
  // 비공개 함수: 버튼 상태 업데이트
  function updateButtonState() {
    const hasError = form.querySelector('.error-message') !== null;
    
    // 필수 필드 확인
    let allFieldsFilled = emailInput.value.trim() !== '' && 
                         passwordInput.value.trim() !== '' && 
                         passwordInput.value.trim().length >= 8;
    
    // 회원가입 페이지 추가 검사
    if (isSignupPage) {
      allFieldsFilled = allFieldsFilled && 
                        nicknameInput.value.trim() !== '' && 
                        confirmPasswordInput.value.trim() !== '';
    }
    
    // 버튼 상태 설정
    if (!hasError && allFieldsFilled) {
      submitButton.disabled = false;
      submitButton.title = isLoginPage ? '로그인 가능상태' : '회원가입 가능상태';
      submitButton.textContent = isLoginPage ? '로그인' : '회원가입';
    } else {
      submitButton.disabled = true;
      submitButton.title = isLoginPage ? '정확한 로그인 정보를 입력하세요' : '정확한 회원가입 정보를 입력하세요';
      submitButton.textContent = isLoginPage ? '로그인' : '회원가입';
    }
  }
  
  // 비공개 함수: 이벤트 리스너 설정
  function setupEventListeners() {
    // 공통 필드에 대한 이벤트 리스너
    emailInput.addEventListener('blur', validators.checkEmail);
    emailInput.addEventListener('input', updateButtonState);
    
    passwordInput.addEventListener('blur', validators.checkPassword);
    passwordInput.addEventListener('input', function() {
      // 비밀번호 변경시 회원가입 페이지에서는 확인 필드도 체크
      if (isSignupPage && confirmPasswordInput.value.trim() !== '') {
        validators.checkConfirmPassword();
      }
      updateButtonState();
    });
    
    // 회원가입 페이지일 경우 추가 이벤트 리스너
    if (isSignupPage) {
      nicknameInput.addEventListener('blur', validators.checkNickname);
      nicknameInput.addEventListener('input', updateButtonState);
      
      confirmPasswordInput.addEventListener('blur', validators.checkConfirmPassword);
      confirmPasswordInput.addEventListener('input', updateButtonState);
    }
    
    // 폼 제출 이벤트
    form.addEventListener('submit', handleFormSubmit);
  }
  
  // 비공개 함수: 폼 제출 처리
  function handleFormSubmit(event) {
    event.preventDefault();
    
    if (isLoginPage) {
      const isEmailValid = validators.checkEmail();
      const isPasswordValid = validators.checkPassword();
      
      if (isEmailValid && isPasswordValid) {
        navigateTo('../../html/items.html');
      }
    } else if (isSignupPage) {
      const isEmailValid = validators.checkEmail();
      const isNicknameValid = validators.checkNickname();
      const isPasswordValid = validators.checkPassword();
      const isConfirmPasswordValid = validators.checkConfirmPassword();
      
      if (isEmailValid && isNicknameValid && isPasswordValid && isConfirmPasswordValid) {
        navigateTo('../../html/login.html');
      }
    }
  }
  
  // 비공개 함수: 페이지 이동
  function navigateTo(url) {
    window.location.href = url;
  }
  
  // 비공개 함수: 비밀번호 토글 초기화
  function initPasswordToggles() {
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
  
  // 공개 메서드
  return {
    // 초기화 함수
    init: function() {
      // DOM 요소 초기화
      if (!initElements()) return;
      
      // 비밀번호 토글 초기화
      initPasswordToggles();
      
      // 이벤트 리스너 설정
      setupEventListeners();
      
      // 버튼 상태 초기화
      updateButtonState();
      
      console.log(`폼 유효성 검사 초기화 완료 (${isLoginPage ? '로그인' : '회원가입'} 페이지)`);
    }
  };
})();

// DOM이 로드되면 FormValidator 초기화
document.addEventListener('DOMContentLoaded', FormValidator.init);