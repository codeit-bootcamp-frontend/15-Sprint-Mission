import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();

  const getLinkStyle = ({ isActive }) => {
    const isAddItemPage = location.pathname === "/additem";
    return {
      color: isActive || isAddItemPage ? "#3692ff" : "inherit",
    };
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
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
        <ul className={styles.menu}>
          <li className={styles.menuItem}>자유게시판</li>
          <li className={styles.menuItem}>
            <NavLink
              to="/items"
              className={styles.menuLink}
              style={getLinkStyle}
            >
              중고마켓
            </NavLink>
          </li>
        </ul>
      </div>
      <img src="/profile.svg" alt="프로필 이미지" />
    </div>
  );
};

export default Header;
