import { Link, NavLink } from "react-router-dom";

import logo from "/logo.svg";
import logo_title from "/logo_title.svg";

import "./Header.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "var(--blue)" : undefined,
  };
}

function Header() {
  return (
    <header className="item-banner">
      <div className="item-banner-content">
        <div className="item-banner-left">
          <Link className="item-logo-content" to="/">
            <img className="item-logo" src={logo} alt="판다마켓 로고 이미지" />
            <img className="item-logo-text" src={logo_title} alt="판다마켓" />
          </Link>

          <nav className="item-nav-content">
            <ul>
              <li>
                <NavLink to="/community" style={getLinkStyle}>
                  자유게시판
                </NavLink>
              </li>
              <li>
                <NavLink to="/item" style={getLinkStyle}>
                  중고 마켓
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Link className="item-login" to="/login">
          로그인
        </Link>
      </div>
    </header>
  );
}

export default Header;
