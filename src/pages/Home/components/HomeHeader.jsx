// src/pages/Home/components/HomeHeader.jsx
import { Link } from "react-router";
import { Logo } from "@/components/Logo";
import logo from "@/assets/logo/logo.png";
import logoMobile from "@/assets/logo/logo_mobile.png";
import useScreenSize from "@/hooks/useScreenSize";
import { nav, logoWrapper, loginBtn } from "../styles/HomeHeader.styles.js";

function HomeHeader() {
  const { isMobile } = useScreenSize(); // 훅 사용
  const logoImg = isMobile ? logoMobile : logo; // 화면 크기에 따라 로고 선택
  const logoSize = !isMobile; // 화면 크기에 따라 로고 크기 결정

  return (
    <header css={nav}>
      <div css={logoWrapper}>
        <Logo
          srcLogo={logoImg}
          variant={logoSize ? "homeDesktop" : "homeMobile"}
        />
      </div>
      <Link to="/login" css={loginBtn}>
        로그인
      </Link>
    </header>
  );
}

export default HomeHeader;
