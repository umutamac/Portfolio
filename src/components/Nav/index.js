import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper row">
        <a className="dropdown-trigger left-align col s4" href="#!" data-target="dropdown1">
          <i className="material-icons hoverable">menu</i></a>
        <ul id="dropdown1" className="dropdown-content">
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          {/* <li className="active"><a href="index.html">About</a></li>
          <li><a href="more-html/portfolio.html">Portfolio</a></li> */}
         
        </ul>
        <a className="center-align col s8 hoverable" href="index.html" id="name">
          <span className="flow-text">Umut A. ALPTEKIN</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;