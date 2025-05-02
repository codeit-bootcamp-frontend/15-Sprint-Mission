import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/urls';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to={ROUTES.ROOT} className={styles.logoLink}>
          <img
            src="src/assets/images/panda_face.svg"
            alt="logo"
            className={styles.logoImage}
          />
          <h1>
            <img
              src="src/assets/images/logo_typo.svg"
              alt="panda market"
              className={styles.logoTypo}
            />
          </h1>
        </Link>
        <Link to={ROUTES.SIGNIN} className={styles.signinButton}>
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
