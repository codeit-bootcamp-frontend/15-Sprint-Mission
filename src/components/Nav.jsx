import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link to="/items" className={styles.logo}>
        <img
          src="/panda-logo.svg"
          alt="판다얼굴 로고"
          className={styles.pandaLogo}
        />
        <img
          src="/panda-market.svg"
          alt="판다마켓"
          className={styles.pandaMarket}
        />
      </Link>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>자유게시판</li>
          <li className={styles.menuItem}>
            <Link to="/items" className={styles.menuLink}>
              중고마켓
            </Link>
          </li>
        </ul>
        <img src="/profile.svg" alt="프로필 이미지" />
      </div>
    </div>
  );
};

export default Nav;
