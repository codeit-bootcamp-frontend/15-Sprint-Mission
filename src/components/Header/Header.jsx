import { Outlet } from "react-router-dom";
import Profile from "../Profile/Profile";
import Nav from "../Nav/Nav";
import { HeaderStyle, containerStyle } from "./Header.styles";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <>
      <header css={HeaderStyle}>
        <div css={containerStyle}>
          <Logo />
          <Nav />
        </div>
        <Profile />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
