import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <ul className="tablet:text-2lg tablet:gap-8 flex grow gap-2 text-lg font-bold">
      <li>
        <NavLink to="/">자유게시판</NavLink>
      </li>
      <li>
        <NavLink to="/items">중고마켓</NavLink>
      </li>
    </ul>
  );
};
export default Navbar;
