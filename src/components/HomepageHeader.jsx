import { Link } from "react-router";
import styles from "../styles/components/HomePageHeader.module.css";
import logo from "../assets/logo/logo.png";
import logoMobile from "../assets/logo/logo_mobile.png";

function HomePageHeader() {
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="판다마켓 로고" className={styles.desktopLogo} />
        <img
          src={logoMobile}
          alt="판다마켓 모바일 로고"
          className={styles.mobileLogo}
        />
      </div>
      <Link to="/login" className={styles.loginBtn}>
        로그인
      </Link>
    </header>
  );
}

export default HomePageHeader;
