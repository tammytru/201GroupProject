import './navbar.css';
import React from "react";
import { Link } from "react-router-dom";

export default function NavBarReg() {
  return (
    <div className="navbar">
      {/* <h1>ReciPlease</h1> */}
      <nav>
        <div id="left-reg">
          <img src="../../../assets/logo.jpg" alt="Cook book logo" id="logo"></img>
          <Link exact to="/" style={linkStyles_left} class="link">Explore</Link>
          <Link exact to="/following" style={linkStyles_left} class="link">Following</Link>
        </div>
        <div id="middle-reg">
          {/* <Link exact to="/search" style={linkStyles_search}><input type='text' placeholder='search' id='search-bar'/></Link> */}
          <Link exact to="/search" style={linkStyles_middle} class="link">Search</Link>
        </div>
        <div id="right-reg">
          <Link exact to="/newpost" style={linkStyles_right} class="link">New Post</Link>
          <Link exact to="/messages" style={linkStyles_right} class="link">Messages</Link>
          <Link exact to="/userprofile" style={linkStyles_right} class="link">Profile</Link>
        </div>

      </nav>
    </div>

  );
}

const linkStyles_left = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
};

const linkStyles_middle = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
};

const linkStyles_right = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
};
