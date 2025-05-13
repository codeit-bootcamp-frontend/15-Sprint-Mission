import { Link } from "react-router";
import { Logo } from "@/components/Logo";
import { useState, useEffect } from "react";
import logo from "/logo/logo.png";
import logoMobile from "/logo/logo_mobile.png";
import profileImg from "/icons/profile.png";
import {
  HeaderStyle,
  LogoStyle,
  ProfileImgStyle,
  LinkWrapperStyle,
  LinkStyle,
} from "./Header.styles";
import { useLocation } from "react-router";

function Header() {
  const [logoImg, setLogoImg] = useState(logo);
  const [logoSize, setLogoSize] = useState(true);
  const location = useLocation();

  const getName = () => {
    switch (location.pathname) {
      case "/items":
      case "/additem":
        return LinkStyle;
      default:
        return "DefaultStyle"; // 기본 클래스
    }
  };

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
    <header css={HeaderStyle}>
      <div css={LogoStyle}>
        <Logo
          srcLogo={logoImg}
          variant={logoSize ? "homeDesktop" : "homeMobile"}
        />
        <div css={LinkWrapperStyle}>
          <Link to="/board">자유게시판</Link>
          <Link to="/items" css={getName()}>
            중고마켓
          </Link>
        </div>
      </div>
      <img css={ProfileImgStyle} src={profileImg} alt="프로필 이미지" />
    </header>
  );
}

export default Header;
