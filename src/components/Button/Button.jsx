import { Link } from "react-router";
import ButtonStyle from "./Button.styles";

const Button = ({ link, children, style}) => {
  return (
    <Link css={[ButtonStyle, style]} to={link}>
      {children}
    </Link>
  );
};

export default Button;
