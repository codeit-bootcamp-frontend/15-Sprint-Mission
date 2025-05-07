import { Link } from "react-router";
import { Logo } from "@/components/Logo";
import logo from "@/assets/logo/logo.png";
import logoMobile from "@/assets/logo/logo_mobile.png";
import styles from "../styles/HomeHeader.module.scss";

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
