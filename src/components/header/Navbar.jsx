import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <ul className="tablet:text-2lg tablet:gap-30 flex grow gap-8 text-lg font-bold">
      <li>
        <NavLink to="/">자유게시판</NavLink>
      </li>
      <li>
        <NavLink
          to="/items"
          className={({ isActive }) => (isActive ? "text-primary-100" : "")}
        >
          중고마켓
        </NavLink>
      </li>
    </ul>
  );
};
export default Navbar;
