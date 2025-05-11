import logoText from "../img/logoText.svg";
import loginState from "../img/loginState.svg";
import Favicon from "../img/favicon.svg";
import { NavLink } from "react-router";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#ffffff] border-b border-b-secondary-350 z-10">
      <div className="flex items-center justify-between px-16 py-15 ">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="flex items-center gap-8">
            <img
              src={Favicon}
              alt="로고그림"
              className="size-40 hidden tablet:block"
            />
            <img src={logoText} alt="로고글씨" className="w-81 h-40" />
          </NavLink>
          <ul className="flex space-x-8 text-lg font-bold text-secondary-600">
            <li>
              <NavLink
                to="/freeboard"
                className={({ isActive }) =>
                  isActive ? "text-primary-100" : ""
                }
              >
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/items"
                className={({ isActive }) =>
                  isActive ? "text-primary-100" : ""
                }
              >
                중고마켓
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <img src={loginState} alt="로그인상태표시" className="size-40" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
