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
        <NavLink to="/Contacts" >
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
}
