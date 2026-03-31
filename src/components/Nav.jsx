import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
    return (
        <div>
            <ul className="menu bg-base-200 rounded-box w-56">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </ul>
        </div>
    );
};

export default Nav;