import logo from "../assets/images/panda-logo.png";
import brandName from "../assets/images/판다마켓.png";
import avatar from "../assets/images/avatar.png";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="border-b border-b-gray-300">
      <div
        className="
          max-w-[1920px]
          mx-auto
          px-[2rem] sm:px-[5rem] md:px-[10rem] lg:px-[20rem]
          py-4
          flex justify-between
        "
      >
        <div className="flex items-center gap-20">
          <div className="flex items-center gap-2">
            <img className="hidden md:flex size-[4rem]" src={logo} />
            <img className="h-[3rem] " src={brandName} />
          </div>
          <div>
            <ul className="flex w-full text-[1.2rem] md:text-[1.4rem] gap-5 text-[#4B5563] font-[700]">
              <li>자유게시판</li>
              <Link
                to="/items"
                className={
                  pathname === "/items" ? "text-[#3692FF] font-[700]" : ""
                }
              >
                중고마켓
              </Link>
            </ul>
          </div>
        </div>
        <div className="size-[4rem] rounded-full bg-gray-300 ">
          <img src={avatar} />
        </div>
      </div>
    </nav>
  );
}
