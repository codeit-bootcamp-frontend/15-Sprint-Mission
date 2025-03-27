import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from '@/utils/debounce.js';
import '@/pages/auth/auth.css';
import { validateEmail } from '@/utils/validators.js';
import { ERROR_MESSAGES } from '@/constants/messages/auth.js';
import { PAGE_URLS } from '@/constants/urls/page-urls.js';

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 버튼 활성화 조건
  const isFormValid =
    email &&
    validateEmail(email) &&
    nickname &&
    password.length >= 8 &&
    password === confirmPassword;

  // 유효성 검사 함수
  const validate = {
    email: (value) => {
      if (!value) return ERROR_MESSAGES.emailRequired;
      if (!validateEmail(value)) return ERROR_MESSAGES.invalidEmail;
      return '';
    },
    nickname: (value) => (!value ? ERROR_MESSAGES.nicknameRequired : ''),
    password: (value) => {
      if (!value) return ERROR_MESSAGES.passwordRequired;
      if (value.length < 8) return ERROR_MESSAGES.passwordLength;
      return '';
    },
    confirmPassword: (value) => {
      if (!value) return ERROR_MESSAGES.confirmPasswordRequired;
      if (value !== password) return ERROR_MESSAGES.passwordMismatch;
      return '';
    },
  };

  // 에러 업데이트
  const handleValidation = debounce((field, value) => {
    setErrors((prev) => ({ ...prev, [field]: validate[field](value) }));
  }, 300);

  // 각 필드 onChange 핸들러
  const handleChange = (field, value) => {
    switch (field) {
      case 'email':
        setEmail(value);
        break;
      case 'nickname':
        setNickname(value);
        break;
      case 'password':
        setPassword(value);
        handleValidation('confirmPassword', confirmPassword);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
    handleValidation(field, value);
  };

  // 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    navigate(PAGE_URLS.SIGNIN);
  };

  return (
    <div className="auth-body">
      <div className="auth-container">
        <header className="auth-header">
          <h1 className="logo-container">
            <a href="/">
              <img src="/images/panda_face.svg" alt="logo" className="logo" />
              <img
                src="/images/logo_typo.svg"
                alt="panda market"
                className="logo-typo"
              />
            </a>
          </h1>
        </header>

        <form
          className="auth-form"
          data-auth-type="signup"
          onSubmit={handleSubmit}
        >
          <div className="input-container">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              className={errors.email ? 'error-input' : ''}
              value={email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="이메일을 입력해주세요"
            />
            <div className="validation-error-message">{errors.email}</div>
          </div>

          <div className="input-container">
            <label htmlFor="nickname">닉네임</label>
            <input
              id="nickname"
              type="text"
              className={errors.nickname ? 'error-input' : ''}
              value={nickname}
              onChange={(e) => handleChange('nickname', e.target.value)}
              placeholder="닉네임을 입력해주세요"
            />
            <div className="validation-error-message">{errors.nickname}</div>
          </div>

          <div className="input-container">
            <label htmlFor="password">비밀번호</label>
            <div className="password-input">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className={errors.password ? 'error-input' : ''}
                value={password}
                onChange={(e) => handleChange('password', e.target.value)}
                placeholder="비밀번호를 입력해주세요"
              />
              <button
                type="button"
                className={`password-visibility ${showPassword ? 'eye-open' : 'eye-closed'}`}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
              />
            </div>
            <div
              className={`validation-error-message ${errors.password ? 'active' : ''}`}
            >
              {errors.password}
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <div className="password-input">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                className={errors.confirmPassword ? 'error-input' : ''}
                value={confirmPassword}
                onChange={(e) =>
                  handleChange('confirmPassword', e.target.value)
                }
                placeholder="비밀번호를 다시 입력해주세요"
              />
              <button
                type="button"
                className={`password-visibility ${showConfirmPassword ? 'eye-open' : 'eye-closed'}`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword ? '비밀번호 숨기기' : '비밀번호 보기'
                }
              />
            </div>
            <div
              className={`validation-error-message ${errors.confirmPassword ? 'active' : ''}`}
            >
              {errors.confirmPassword}
            </div>
          </div>

          <button type="submit" className="auth-button" disabled={!isFormValid}>
            회원가입
          </button>
        </form>

        <div className="oauth-container">
          <p>간편 로그인하기</p>
          <ul className="oauth-site">
            <li>
              <a href="https://www.google.com" className="oauth-button">
                <img
                  src="../images/google_logo.svg"
                  alt="google signin button"
                />
              </a>
            </li>
            <li>
              <a href="https://www.kakaocorp.com" className="oauth-button">
                <img src="../images/kakao_logo.svg" alt="kakao signin button" />
              </a>
            </li>
          </ul>
        </div>

        <div className="switch">
          이미 회원이신가요?&nbsp;
          <a href="/signin" className="switch-button">
            로그인
          </a>
        </div>
      </div>
    </div>
  );
}
