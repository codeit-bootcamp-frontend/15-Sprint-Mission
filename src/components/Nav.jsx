import logoText from "../img/logoText.svg";
import loginState from "../img/loginState.svg";
import Favicon from "../img/favicon.svg";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-16 py-15 bg-[#ffffff] border-b border-secondary-350">
      <div className="flex items-center gap-8">
        <NavLink to="/" className="flex items-center gap-8">
          <img
            src={Favicon}
            alt="Logo"
            className="size-40 hidden tablet:block"
          />
          <img src={logoText} alt="Logo" className="w-81 h-40" />
        </NavLink>
        <ul className="flex space-x-8 text-lg font-bold text-secondary-600">
          <li>
            <NavLink
              to="/freeboard"
              className={({ isActive }) => (isActive ? "text-primary-100" : "")}
            >
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/items"
              className={({ isActive }) => (isActive ? "text-primary-100" : "")}
            >
              중고마켓
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <img src={loginState} alt="Login State" className="size-40" />
      </div>
    </div>
  );
};

export default Nav;
