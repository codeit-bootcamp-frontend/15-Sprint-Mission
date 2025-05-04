import Logo from "../Logo";
import Navbar from "../Navbar";
import UserMenu from "../UserMenu";

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 border-b border-solid border-b-[#DDE0E3]">
      <div className="pc:gap-47 tablet:gap-35 mx-auto flex max-w-1920 items-center gap-8 p-16">
        <Logo />
        <Navbar />
        <UserMenu />
      </div>
    </header>
  );
};
export default Header;
