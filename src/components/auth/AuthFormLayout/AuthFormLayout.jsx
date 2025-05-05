import { Link } from 'react-router-dom';
import { AuthForm } from '@/components/auth';
import { Logo } from '@/components/common';
import { ROUTES } from '@/constants/urls';
import styles from './AuthFormLayout.module.scss';

const AuthFormLayout = ({ type, formProps }) => {
  return (
    <div className={styles.authBody}>
      <div className={styles.authContainer}>
        <header className={styles.authHeader}>
          <Logo size="large" />
        </header>

        <AuthForm type={type} {...formProps} />

        <div className={styles.switch}>
          {type === 'signup' ? (
            <>
              이미 회원이신가요?&nbsp;
              <Link to={ROUTES.SIGNIN} className={styles.switchButton}>
                로그인
              </Link>
            </>
          ) : (
            <>
              판다마켓이 처음이신가요?&nbsp;
              <Link to={ROUTES.SIGNUP} className={styles.switchButton}>
                회원가입
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthFormLayout;
