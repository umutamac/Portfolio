import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="page-footer valign-wrapper">

            <div className="contact valign-wrapper">

                <div className="contact-left icons-container">
                    <a href="https://www.linkedin.com/in/umutalptekin" target="_blank" rel="noopener">
                        <div className="icon icon-linkedin hoverable"></div>
                    </a>
                    <a href="https://github.com/umutamac" target="_blank" rel="noopener">
                        <div className="icon icon-github hoverable"></div>
                    </a>
                    <a href="mailto:amacalptekin@gmail.com" target="_blank" rel="noopener">
                        <div className="icon icon-email hoverable"></div>
                    </a>
                </div>

            </div>

            <div className="middle valign-wrapper">
                <p>Umut Alptekin - 2021</p>
            </div>

            <div className="right" id="attributeArea" style={{ textAlign: "center" }}>
                <span >
                    Background vector created by <br />
                    pikisuperstar - <a href="https://www.freepik.com/vectors/background" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>www.freepik.com</a>
                </span>
            </div>

        </footer>
    );
}

export default Footer;