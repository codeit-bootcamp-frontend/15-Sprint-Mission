import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import logoText from "../assets/images/logo_text.svg";
import profile from "../assets/icons/profile.svg";

function Header() {
  const active = location.pathname === "/items" || "/additems";
  return (
    <div className="w-full bg-white sticky top-0 border border-[#dfdfdf]">
      <div className="max-w-1520 p-9 flex items-center justify-between m-auto gap-16 tablet:px-24 tablet:gap-24">
        <Link to="/">
          <img className="w-153 hidden tablet:block" src={logo} />
          <img className="w-81 block tablet:hidden" src={logoText} />
        </Link>
        <div className="flex flex-1 gap-8 tablet:gap-24 text-lg font-bold tablet:text-2lg text-gray600">
          <Link to="/">
            <span className="cursor-pointer">자유게시판</span>
          </Link>
          <Link to="/items">
            <span className={`${active ? "text-blue100" : ""} cursor-pointer`}>
              중고마켓
            </span>
          </Link>
        </div>
        <div>
          <img className="size-40" src={profile} />
        </div>
      </div>
    </div>
  );
}

export default Header;
