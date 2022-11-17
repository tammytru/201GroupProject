import './navbar.css';
import React from "react";
import { Link } from "react-router-dom";

export default function NavBarUnreg() {
  return (
    <div className="navbar">
      {/* <h1>ReciPlease</h1> */}
      <nav>
        <div id="left">
          <img src="../../../assets/logo.jpg" alt="Cook book logo"/>
          <Link exact to="/" style={linkStyles_title}>Explore</Link>
        </div>
        <div id="middle">
          {/* <Link exact to="/search" style={linkStyles_search}><input type='text' placeholder='search' id='search-bar'/></Link> */}
          <Link exact to="/search" style={linkStyles_search}>Search</Link>
        </div>
        <div id="right">
          <Link exact to="/login" style={linkStyles_button}>Login/Register</Link>
        </div>

      </nav>
    </div>

  );
}

const linkStyles_title = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
};

const linkStyles_search = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
};

const linkStyles_button = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
};
