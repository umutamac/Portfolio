import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
    return (
        <aside id="slide-out" className="sidenav sidenav-fixed">
            <div>
                <img src="./assets/Alptekin_U_01.jpg" alt="Umut Alptekin" height="50px" width="50px" />
            </div>
            <ul >
                <li><NavLink to="/">About Me</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
            </ul>
        </aside>
    );
}

export default Sidebar;