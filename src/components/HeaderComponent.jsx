import React from "react";
import { NavLink, Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <nav className="flex justify-between items-center h-[70px] px-[200px] pb-[2px] border-b-[1px] border-[var(--secondary-350)] bg-white">
      <div className="flex items-center gap-[47px]">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-[8px]">
            <img src="/img/favicon.svg" alt="pandamarket logo" />
            <img src="/img/logoText.svg" alt="pandamarket logotext" />
          </div>
        </Link>

        <ul className="flex gap-[30px] text-[18px] leading-[26px] font-bold text-[var(--secondary-600)]">
          <li>
            <NavLink
              to="/freeboard"
              className={({ isActive }) =>
                isActive ? "text-[var(--primary-100)] " : ""
              }
            >
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/items"
              className={({ isActive }) =>
                isActive ? "text-[var(--primary-100)] " : ""
              }
            >
              중고마켓
            </NavLink>
          </li>
        </ul>
      </div>

      <button>
        <img src="/img/loginState.svg" alt="loginState" className="h-[40px]" />
      </button>
    </nav>
  );
};

export default HeaderComponent;
