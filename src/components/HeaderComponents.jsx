import React from "react";
import { useLocation } from "react-router-dom";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const location = useLocation();
  const isItemsPage = location.pathname === "/items";

  return (
    <header className="header-container">
      <nav className="nav">
        <Link to="/" className="logo-container">
          <img src="/img/favicon.svg" alt="pandamarket logo" className="logo" />
          <img
            src="/img/logoText.svg"
            alt="pandamarket logotext"
            className="logoText"
          />
        </Link>
        <ul className="nav-list">
          <li>
            <Link className="nav-text-freebord" to="/freeborad">
              자유게시판
            </Link>
          </li>
          <li>
            <Link
              className={`nav-text-market ${isItemsPage ? "active" : ""}`}
              to="/items"
            >
              중고마켓
            </Link>
          </li>
        </ul>
      </nav>
      <img src="/img/loginState.svg" alt="loginState" className="loginState" />
    </header>
  );
};

export default HeaderComponent;
