import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/urls';
import { Logo } from '@/components/common';
import styles from './AuthFormLayout.module.scss';

const AuthFormLayout = ({ children, type }) => {
  return (
    <div className={styles.authBody}>
      <div className={styles.authContainer}>
        <header className={styles.authHeader}>
          <Logo size="large" />
        </header>
        <form className={styles.authForm} data-auth-type={type}>
          {children}
        </form>
        <div className={styles.switch}>
          이미 회원이신가요?&nbsp;
          <Link to={ROUTES.SIGNIN} className={styles.switchButton}>
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthFormLayout;
