import logo from "../assets/images/logo.svg";
import logoMobile from "../assets/images/logo-mobile.svg";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/login");
  };
  const location = useLocation();
  const isItemsPage =
    location.pathname.startsWith("/items") || location.pathname === "/additem";

  return (
    <>
      <header className="Header">
        <div className="header-left">
          <NavLink to="/">
            <img
              className="logo-mobile"
              src={logoMobile}
              alt="판다마켓 로고 이미지 (모바일)"
            />
            <img className="logo" src={logo} alt="판다마켓 로고 이미지" />
          </NavLink>
          <div className="link-section">
            <NavLink
              to="/boards"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              자유게시판
            </NavLink>
            <NavLink to="/items" className={isItemsPage ? "active" : ""}>
              중고마켓
            </NavLink>
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
