import { Link } from "react-router";
import { Logo } from "../common/Logo";
import styles from "../../styles/components/home/HomeHeader.module.scss";
import logo from "../../assets/logo/logo.png";
import logoMobile from "../../assets/logo/logo_mobile.png";

function HomeHeader() {
  return (
    <header className={styles.nav}>
      <div className={styles.logoWrapper}>
        <Logo srcLogo={logo} imgClass={styles.desktopLogo} />
        <Logo srcLogo={logoMobile} imgClass={styles.mobileLogo} />
      </div>
      <Link to="/login" className={styles.loginBtn}>
        로그인
      </Link>
    </header>
  );
}

export default HomeHeader;
