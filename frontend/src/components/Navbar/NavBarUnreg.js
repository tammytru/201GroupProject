import './navbar.css';
import React from "react";
import { Link } from "react-router-dom";

export default function NavBarUnreg() {
  return (
    <div className="Navbar">
      <img src="../../../assets/logo.jpg" alt="Cook book logo"/>
      {/* <h1>ReciPlease</h1> */}
      <nav>
        <Link exact to="/" style={linkStyles_title}>ReciPlease</Link>
        <Link exact to="/search" style={linkStyles_search}><input type='text' placeholder='search' id='search-bar'/></Link>
        <Link exact to="/login" style={linkStyles_button}>Login/Register</Link>
      </nav>
    </div>

  );
}

const linkStyles_title = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
  float: 'left',
  padding: '10px',
  margin: '2px, 10px, 2px, 10px',
  textAlign: 'center',
};

const linkStyles_search = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
  float: 'none',
  padding: '10px',
  margin: '2px, 10px, 2px, 10px',
};

const linkStyles_button = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
  float: 'right',
  padding: '10px',
  margin: '2px, 10px, 2px, 10px',
};
