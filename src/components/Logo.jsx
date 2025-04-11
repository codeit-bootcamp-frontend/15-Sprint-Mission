import { Link } from "react-router";
import LogoSm from "../assets/logo-icon-sm.png";
import LogoTypo from "../assets/logo-icon-typo.png";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <img
          src={LogoTypo}
          alt="판다마켓 모바일 로고"
          className="tablet:hidden h-full w-20"
        />
        <img
          src={LogoSm}
          alt="판다마켓 로고"
          className="tablet:block hidden h-full w-40"
        />
      </Link>
    </div>
  );
};
export default Logo;
