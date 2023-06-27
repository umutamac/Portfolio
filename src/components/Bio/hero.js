import React from "react";
import headshot from "../../assets/aboutPics/Alptekin_U_01.jpg";

import "./hero.css"
const webdevResume = "https://docs.google.com/document/d/1xIc6BZVuvJXwSytZVoiGwqJ-fL1-Lf-pxx5IcLW-PL4/edit?usp=sharing";

export default function Hero() {

    return (
        <div id="about-text" style={{ marginBottom: "150px" }}>
            <div className="row align-items-center">
                <div className="col-7">
                    <h1>Hi, I'm Umut Alptekin</h1>
                    <h2>I'm a web developer</h2>
                    <div>
                        <a className="btn btn-primary" href={webdevResume} target="_blank" rel="noreferrer" role="button">Resume</a>
                    </div>

                </div>
                <div className="col-5">
                    <div id="headshot">
                        <img src={headshot} alt="Umut Alptekin" />
                    </div>
                </div>

            </div>
        </div>
    );
}