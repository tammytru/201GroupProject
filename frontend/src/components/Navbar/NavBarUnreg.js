import './navbar.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import { default as UnregisteredHomePage } from "../../pages";

export default function NavBarUnreg() {
  return (
    <div className="Navbar">
      <Router> {/* refer to: https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/#using-links-to-switch-pages */}
        <main>
          <nav class="Navbar">
            <ul>
              <li><Link to='..//pages/Search-Page/search-page.js'>Search</Link></li>
              <li><Link to='..//pages/Login-Page/Login-page.js'>Login/Register</Link></li>
            </ul>
          </nav>

          <Routes> 
            <Route path="..//pages/unregistered-user-page.js" exact component={UnregisteredHomePage}/>
            {/* <Route path="..//pages/Search-Page/search-page.js" exact component={SearchPage}/> */}
            <Route render={() => <h1>404: PAGE NOT FOUND</h1>}/>
          </Routes>

        </main>
      </Router>
    </div>

  );
}

const UnregisteredHomePage = () => {
  <Fragment>
    <h3>Explore</h3>
    {/* <FakeText /> */}
  </Fragment>
}

