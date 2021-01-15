import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
      <nav>
        <div className="nav-wrapper row">
          <NavLink to="/" id="name" className="center-align col s8 hoverable" >
            <span className="flow-text">Umut A. ALPTEKIN</span>
          </NavLink>

          <a className="dropdown-trigger hide-on-large-only center-align col s4" href="#!" data-target="dropdown1">
            <i className="material-icons hoverable">menu</i>
          </a>

          <ul id="dropdown1" className="dropdown-content">
            <li><NavLink to="/">About Me</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
          </ul>

          <ul id="navbar-pages" className="hide-on-med-and-down col s4">
            <li><NavLink to="/">About Me</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
          </ul>

        </div>
      </nav>

  );
}

export default Nav;