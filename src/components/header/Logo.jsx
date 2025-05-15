import { Link } from "react-router";
import LogoSm from "../../assets/images/logo-sm.png";
import LogoTypo from "../../assets/images/logo-typo.png";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <img
          src={LogoTypo}
          alt="판다마켓 모바일 로고"
          className="tablet:hidden h-full w-81"
        />
        <img
          src={LogoSm}
          alt="판다마켓 로고"
          className="tablet:block hidden h-full w-153"
        />
      </Link>
    </div>
  );
};
export default Logo;
