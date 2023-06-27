import React from "react";
import headshot from "../../assets/aboutPics/Alptekin_U_01.jpg";

import "./hero.css"

export default function Hero() {

    return (
        <div id="about-text" style={{ marginBottom: "100px" }}>
            <div className="row align-items-center">
                <div className="col-7">
                    <h1>Hi, I'm Umut Alptekin</h1>
                    <h2>I'm a web developer</h2>
                    <div>

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