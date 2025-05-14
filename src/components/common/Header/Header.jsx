import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '@/components/common/Logo';
import { ROUTES } from '@/constants/urls';
import defaultProfileIcon from '@/assets/images/default_profile.svg';
import buttonStyles from '@/styles/helpers/buttonHelpers.module.scss';
import styles from './Header.module.scss';

const Header = () => {
  const { pathname } = useLocation();
  const isItemsActive =
    pathname.startsWith(ROUTES.ITEMS) || pathname === ROUTES.ADD_ITEM;

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftGroup}>
          <Logo />
          <nav className={styles.navLinks}>
            <NavLink
              to={ROUTES.BOARD}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              자유게시판
            </NavLink>
            <NavLink
              to={ROUTES.ITEMS}
              className={() =>
                `${styles.navLink} ${isItemsActive ? styles.active : ''}`
              }
            >
              중고마켓
            </NavLink>
          </nav>
        </div>

        {isItemsActive ? (
          <img
            src={defaultProfileIcon}
            alt="Profile Picture"
            className={styles.defaultProfileIcon}
          />
        ) : (
          <Link
            to={ROUTES.SIGNIN}
            className={`${buttonStyles.primary} ${styles.signinButton}`}
          >
            로그인
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
