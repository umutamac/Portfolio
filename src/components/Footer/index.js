import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="page-footer ">
            <div className="valign-wrapper container footer-main">

                <div className="contact-left icons-container">
                    <a href="https://www.linkedin.com/in/umutalptekin" target="_blank" rel="noreferrer noopener">
                        <div className="icon icon-linkedin "></div>
                    </a>
                    <a href="https://github.com/umutamac" target="_blank" rel="noreferrer noopener">
                        <div className="icon icon-github "></div>
                    </a>
                    <a href="mailto:amacalptekin@gmail.com" target="_blank" rel="noreferrer noopener">
                        <div className="icon icon-email "></div>
                    </a>
                    {/* <i class="fas fa-space-shuttle"></i> */}
                </div>

            </div>

            {/* <div className="center-align" id="attributeArea">
                <p>Background vector created by pikisuperstar - <a href="https://www.freepik.com/vectors/background" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>www.freepik.com</a></p>
            </div> */}

        </footer>
    );
}