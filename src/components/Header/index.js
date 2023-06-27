import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav() {

  return (
    <header className="navbar-fixed">
      <nav>
        <div className="nav-wrapper container" role="navigation">
          <div className="row">

            <div className="col s8 ">
              <NavLink to="/" id="name" className="" >
                <span className="flow-text">Umut A. ALPTEKIN</span>
              </NavLink>
              <button data-target="nav-mobile" className="sidenav-trigger full hide-on-large-only">
                <i className="material-icons">menu</i>
              </button>
            </div>

            <ul id="navbar-pages" className="hide-on-med-and-down col s4 center-align">
              <li><NavLink to="/">About Me</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/skills">Skills</NavLink></li>
            </ul>

            <a className="dropdown-trigger hide-on-large-only center-align col s4" href="#!" data-target="dropdown1">
              <i className="material-icons hoverable">menu</i>
            </a>

            <ul id="dropdown1" className="dropdown-content">
              <li><NavLink to="/">About Me</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/skills">Skills</NavLink></li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;