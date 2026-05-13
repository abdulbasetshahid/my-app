import React from "react";
import { NavLink } from "react-router";
import { ROUTE_PATHS } from "../app/router/paths";

const Header = () => {
  return (
    <nav className="navbar w-full bg-base-200">
      <label
        htmlFor="my-drawer-4"
        aria-label="open sidebar"
        className="btn btn-square btn-ghost"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
          className="my-1.5 inline-block size-4"
        >
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
          <path d="M9 4v16"></path>
          <path d="M14 10l2 2l-2 2"></path>
        </svg>
      </label>

      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Khati Admin</a>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-ghost">Login</button>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={ROUTE_PATHS.profile}>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTE_PATHS.users}>
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTE_PATHS.login}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
