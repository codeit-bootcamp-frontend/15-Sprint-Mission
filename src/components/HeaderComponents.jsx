import React from "react";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <header className="header-container">
      <a className="logo-container">
        <img src="/img/favicon.svg" alt="pandamarket logo" className="logo" />
        <img
          src="/img/logoText.svg"
          alt="pandamarket logotext"
          className="logoText"
        />
      </a>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="/freeborad">자유게시판</a>
          </li>
          <li>
            <a href="/items"> 중고마켓</a>
          </li>
        </ul>
      </nav>

      <img src="/img/loginState.svg" alt="loginState" className="loginState" />
    </header>
  );
};

export default HeaderComponent;
