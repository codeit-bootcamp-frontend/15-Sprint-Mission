import Logo from "../Logo";
import Navbar from "../Navbar";
import UserMenu from "../UserMenu";

const Header = () => {
  return (
    <header className="sticky top-0 right-0 left-0 border-b border-solid border-b-[#DDE0E3]">
      <div className="tablet:gap-9 mx-auto flex max-w-480 items-center gap-2 p-4">
        <Logo />
        <Navbar />
        <UserMenu />
      </div>
    </header>
  );
};
export default Header;
