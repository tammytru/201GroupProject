import './navbar.css';
import React from "react";
import { Link } from "react-router-dom";

export default function NavBarUnreg() {
  return (
    <div className="Navbar">
      <h1>NAV BAR</h1>
      <nav class="Navbar">
        <ul>
          <li><Link exact to="/">Home</Link></li>
          <li><Link exact to="/search">Search</Link></li>
          <li><Link exact to="/login">Login/Register</Link></li>
        </ul>
      </nav>
    </div>

  );
}
