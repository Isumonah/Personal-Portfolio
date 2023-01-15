import React from "react";
import { NavLink, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar-section">
      <ul className="navbar">
        <NavLink to="/">
          <li>About</li>
        </NavLink>
        <NavLink to="/Projects">
          <li>Projects</li>
        </NavLink>
        <Link href="/Projects#contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
