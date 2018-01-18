import React from "react";
import "./Nav.css";

const Nav = () => (
    <nav className="nav-center">
        <a href="/" className="left" id="navLogo">Chuck's Tees</a>
        <div className="nav-wrapper container">
            <ul className="navUl center">
                <li><a href="/" className="navLinks">Profile</a></li>
                <li><a href="/" className="navLinks">Login</a></li>
                <li><a href="/" className="navLinks">Sign Up</a></li>
            </ul>

        </div>
    </nav>
);

export default Nav;