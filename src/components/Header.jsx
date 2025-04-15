import logo from "../assets/images/logo.png";
import logoMobile from "../assets/images/logo-mobile.png";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ location }) => {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/login");
  };
  return (
    <>
      <header className="Header">
        <div className="header-left">
          <Link to={"/"}>
            <img
              className="logo-mobile"
              src={logoMobile}
              alt="판다마켓 로고 이미지 (모바일)"
            />
            <img className="logo" src={logo} alt="판다마켓 로고 이미지" />
          </Link>
          <div className="link-section">
            <Link
              to={"/boards"}
              className={location === "community" ? "active" : ""}
            >
              자유게시판
            </Link>
            <Link
              to={"/items"}
              className={location === "market" ? "active" : ""}
            >
              중고마켓
            </Link>
          </div>
        </div>
        <button onClick={onClickButton} className="login-button">
          로그인
        </button>
      </header>
    </>
  );
};

export default Header;
