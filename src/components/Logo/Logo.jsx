import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo/logo.png";
import LogoMoblieImg from "../../assets/logo/logo_moblie.png";
import LogoStyle from "./Logo.styles";

const Logo = () => {
  return (
    <Link to="/">
      <picture>
        <source srcSet={LogoMoblieImg} media="(max-width: 740px)" />
        <img css={LogoStyle} src={LogoImg}></img>
      </picture>
    </Link>
  );
};

export default Logo;
