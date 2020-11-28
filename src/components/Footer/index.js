import React from "react";

function Footer() {
  return (
    <footer className="page-footer valign-wrapper">
        <div className="footer-left">
            <p>If you have any questions, or just want to say hello, feel free to contact me. Here are my social pages:
            </p>
        </div>
        <div className="icons-container-right flex-container">
            <a href="https://www.linkedin.com/in/umutalptekin" target="_blank" rel="noopener noreferrer">
                <div className="icon icon-linkedin hoverable"></div>
            </a>
            <a href="https://github.com/umutamac" target="_blank" rel="noopener noreferrer">
                <div className="icon icon-github hoverable" id="github-icon"></div>
            </a>
        </div>
    </footer>
  );
}

export default Footer;