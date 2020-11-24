import React from "react";

function Footer() {
  return (
    <footer class="page-footer valign-wrapper">
        <div class="footer-left">
            <p>If you have any questions, or just want to say hello, feel free to contact me. Here are my social pages:
            </p>
        </div>
        <div class="icons-container-right flex-container">
            <a href="https://www.linkedin.com/in/umutalptekin" target="_blank" rel="noopener noreferrer">
                <div class="icon icon-linkedin hoverable"></div>
            </a>
            <a href="https://github.com/umutamac" target="_blank" rel="noopener noreferrer">
                <div class="icon icon-github hoverable" id="github-icon"></div>
            </a>
        </div>
    </footer>
  );
}

export default Footer;