import { NavLink, useLocation } from "react-router-dom";
import { ulContainerStyle, navTitleStyle } from "./Nav.styles";
import { css } from "@emotion/react";

const Nav = () => {

  const location = useLocation();
  const isMarketActive = location.pathname.startsWith("/items") || location.pathname === "/additem";

  return (
    <nav>
      <ul css={ulContainerStyle}>
        <li>
          <NavLink to="board" css={navTitleStyle}>
            자유게시판
          </NavLink>
        </li>
        <li>
          <NavLink to="items" css={[navTitleStyle, isMarketActive && css`color: #3692ff;`]}>
            중고마켓
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
