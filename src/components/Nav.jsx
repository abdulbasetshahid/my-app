import { NavLink } from "react-router";
import { DRAWER_TOGGLE_ID } from "../app/drawer/drawer";

const Nav = () => {
  const closeDrawer = () => {
    const el = document.getElementById(DRAWER_TOGGLE_ID);
    if (el && "checked" in el) {
      el.checked = false;
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <NavLink to="/" onClick={closeDrawer}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" onClick={closeDrawer}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={closeDrawer}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeDrawer}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeDrawer}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" onClick={closeDrawer}>
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
