import { NavLink } from "react-router";
import {
  BsFillHexagonFill,
  BsFillHouseDoorFill,
  BsFillPeopleFill,
  BsFileEarmarkPersonFill,
  BsPersonFillLock,
  BsFillFileLockFill
} from "react-icons/bs";

const Nav = () => {
  return (
    <ul className="menu menu-md w-full grow">
      <li>
        <NavLink
          to="/"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Home Page"
        >
          <BsFillHouseDoorFill />
          <span className="is-drawer-close:hidden">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/users"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Users"
        >
          <BsFillPeopleFill />
          <span className="is-drawer-close:hidden">Users</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Login"
        >
          <BsPersonFillLock  />
          <span className="is-drawer-close:hidden">Login</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="About"
        >
          <BsFillHexagonFill />
          <span className="is-drawer-close:hidden">About</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Contact"
        >
          <BsFillFileLockFill />
          <span className="is-drawer-close:hidden">Contact</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Profile"
        >
          <BsFileEarmarkPersonFill  />
          <span className="is-drawer-close:hidden">Profile</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
