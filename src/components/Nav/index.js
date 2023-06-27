import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Nav() {

  return (
    <nav className="navbar fixed-top navbar-expand-md bg-body-tertiary">
      <div className="container">
        {/* <a className="navbar-brand" href="/">Umut A. ALPTEKIN</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skills">Skills</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}