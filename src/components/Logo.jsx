import { Link } from "react-router-dom";

export const Logo = ({ linkClass, imgClass, srcLogo }) => (
  <Link to="/" className={linkClass}>
    <img className={imgClass} src={srcLogo} alt="판다마켓 로고" />
  </Link>
);
