import { Link } from "react-router-dom";

import logo from "/logo.svg";
import logo_title from "/logo_title.svg";

function Header() {
  return (
    <div className="banner-content">
      <div className="logo-content">
        <Link className="logo" to="/">
          <img src={logo} alt="판다마켓 로고 이미지" />
        </Link>
        <Link className="logo-text" to="/">
          <img src={logo_title} alt="판다마켓" />
        </Link>
      </div>
      <Link className="login" to="/login">
        로그인
      </Link>
    </div>
  );
}

export default Header;
