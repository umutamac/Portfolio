import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="page-footer ">
            <div className="valign-wrapper container footer-main">
                <div className="left">

                    <div className="contact-left icons-container">
                        <a href="https://www.linkedin.com/in/umutalptekin" target="_blank" rel="noopener">
                            <div className="icon icon-linkedin "></div>
                        </a>
                        <a href="https://github.com/umutamac" target="_blank" rel="noopener">
                            <div className="icon icon-github "></div>
                        </a>
                        <a href="mailto:amacalptekin@gmail.com" target="_blank" rel="noopener">
                            <div className="icon icon-email "></div>
                        </a>
                        {/* <i class="fas fa-space-shuttle"></i> */}
                    </div>

                </div>

                <div className="middle valign-wrapper">
                    <p>Umut Alptekin - 2021</p>
                </div>

                <div className="right center-align" >
                    <span >
                        hi
                    </span>
                </div>
            </div>

            {/* <div style={{ width: "100%" }}></div> */}

            <div className="center-align" id="attributeArea">
                <p>Background vector created by pikisuperstar - <a href="https://www.freepik.com/vectors/background" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>www.freepik.com</a></p>
            </div>

        </footer>
    );
}

export default Footer;