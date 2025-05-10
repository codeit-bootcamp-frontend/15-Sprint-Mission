import logoText from "../img/logoText.svg";
import loginState from "../img/loginState.svg";
import Favicon from "../img/favicon.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-[16px] py-[15px] bg-[#ffffff] border-b border-[secondary-350]">
      <div className="flex items-center gap-[8px]">
        <Link to="/">
          <img
            src={Favicon}
            alt="Logo"
            className="size-40 hidden tablet:block"
          />
          <img src={logoText} alt="Logo" className="w-[81px] h-[40px]" />
        </Link>
        <ul className="flex space-x-8 text-lg font- bold">
          <li>
            <Link to="/freeboard" className="text-gray-700 hover:text-blue-500">
              자유게시판
            </Link>
          </li>
          <li>
            <Link to="/items" className="text-gray-700 hover:text-blue-500">
              중고마켓
            </Link>
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
