import { NavLink, useLocation } from "react-router-dom";
import userImage from "../assets/userImage.png";
import logo from "../assets/pandaLogo.png";
import "../components/Header.css";
import mobileLogo from "../assets/mobileLogo.png";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const location = useLocation();
  const isMarketPage = location.pathname === "/items" || location.pathname === "/additem";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <NavLink to="/items">
            <img src={isMobile ? mobileLogo : logo} alt="logo" className="header__logo-img" />
          </NavLink>
        </div>

        <div className="header__nav-container">
          <nav className="header__nav">
            <NavLink to="/board">자유게시판</NavLink>
            <NavLink to="/items" className={isMarketPage ? "market-active" : ""}>
              중고마켓
            </NavLink>
          </nav>
        </div>
      </div>

      <div className="header__right">
        <img src={userImage} alt="user" className="header__user-img" />
      </div>
    </header>
  );
};

export default Header;
