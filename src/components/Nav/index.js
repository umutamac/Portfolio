import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
      <nav>
        <div className="nav-wrapper row">
          <Link to="/" id="name" className="center-align col s8 hoverable" >
            <span className="flow-text">Umut A. ALPTEKIN</span>
          </Link>

          <a className="dropdown-trigger hide-on-large-only center-align col s4" href="#!" data-target="dropdown1">
            <i className="material-icons hoverable">menu</i>
          </a>

          <ul id="dropdown1" className="dropdown-content">
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>

          <ul id="navbar-pages" className="hide-on-med-and-down col s4">
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>

        </div>
      </nav>

  );
}

export default Nav;