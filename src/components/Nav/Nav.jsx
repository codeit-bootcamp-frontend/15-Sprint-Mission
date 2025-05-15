import { NavLink } from "react-router-dom";
import { ulContainerStyle, navTitleStyle } from "./Nav.styles";

const Nav = () => {
  return (
    <nav>
      <ul css={ulContainerStyle}>
        <li>
          <NavLink to="board" css={navTitleStyle}>
            자유게시판
          </NavLink>
        </li>
        <li>
          <NavLink to="items" css={navTitleStyle}>
            중고마켓
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
