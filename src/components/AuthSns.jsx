import styles from './styles/AuthSns.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthSns = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  const isLoginPage = pathname === '/login';
  const authText = {
    message: isLoginPage ? '판다마켓이 처음이신가요?' : '이미 회원이신가요?',
    buttonText: isLoginPage ? '회원가입' : '로그인',
    navigateTo: isLoginPage ? '/signup' : '/login'
  };

  return (
    <>
      <div className={styles.authSns}>
        <p>간편 로그인하기</p>
        <ul>
          <li>
            <a href='https://google.com' target='_blank'>
              <img src='images/sub/login_sns_google.svg' alt='구글 로그인' />
            </a>
          </li>
          <li>
            <a href='https://kakao.com' target='_blank'>
              <img src='images/sub/login_sns_kakao.svg' alt='카카오 로그인' />
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.authSignup}>
        {authText.message}
        <button onClick={() => navigate(authText.navigateTo)}>
          {authText.buttonText}
        </button>
      </p>
    </>
  );
};

export default AuthSns;
