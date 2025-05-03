import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/urls';
import styles from './Header.module.scss';
import Logo from '@/components/common/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        <Link to={ROUTES.SIGNIN} className={styles.signinButton}>
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
