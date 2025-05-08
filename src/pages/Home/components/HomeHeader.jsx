import { Link } from "react-router";
import { Logo } from "@/components/Logo";
import logo from "@/assets/logo/logo.png";
import logoMobile from "@/assets/logo/logo_mobile.png";
import styles from "../styles/HomeHeader.module.scss";
import { useState, useEffect } from "react";

function HomeHeader() {
  const [logoImg, setLogoImg] = useState(logo);
  const [logoSize, setLogoSize] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLogoImg(logoMobile);
        setLogoSize(false);
      } else {
        setLogoImg(logo);
        setLogoSize(true);
      }
    };

    // 초기 로드시 한번 실행
    handleResize();

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 클린업 함수
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.nav}>
      <div className={styles.logoWrapper}>
        <Logo
          srcLogo={logoImg}
          variant={logoSize ? "homeDesktop" : "homeMobile"}
        />
      </div>
      <Link to="/login" className={styles.loginBtn}>
        로그인
      </Link>
    </header>
  );
}

export default HomeHeader;
