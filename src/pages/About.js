import React from "react";
import "./about.css";

import Bio from "../components/Bio";
import { Row, Col } from "../components/Grid";
import Hero from "../components/Bio/hero"
import headshot from "../assets/aboutPics/Alptekin_U_01.jpg";
import psuLogo from "../assets/aboutPics/psu_coe.png";
import bootcamp from "../assets/aboutPics/UT_bootcamp.png";
import sj from "../assets/aboutPics/sj.jpg";

const engResume = "https://drive.google.com/file/d/1yWjiqpy8hogHbtwtAjI1cs08kA8kzq8S/view?usp=sharing";
const webdevResume = "https://docs.google.com/document/d/1xIc6BZVuvJXwSytZVoiGwqJ-fL1-Lf-pxx5IcLW-PL4/edit?usp=sharing";

export default function About() {

  return (
    <div className="article-container container">
      <Hero  />

      <Bio />
      {/* <Row>
          <Col id="photoAndResumes" size="s12 m12 l5">
            <Row>
              <Col size="s12 m7 l12">
                <div id="headshot">
                  <img src={headshot} alt="Umut Alptekin" />
                </div>
              </Col>
              <br />
              <Col id="links" size="s12 m5 l12">
                <ul>
                  <li><a href={webdevResume} target="_blank" rel="noopener noreferrer">My Web Development Resume</a></li>
                  <br />
                  <li><a href={engResume} target="_blank" rel="noopener noreferrer">My Engineering Resume</a></li>
                </ul>

                <br />

                <div className="logosDiv">
                  <div className="bootCampLogo">
                    <img alt="Umut-Alptekin" src={bootcamp} />
                  </div>
                  <div className="psuLogo">
                    <img alt="Umut-Alptekin" src={psuLogo} />
                  </div>
                  <div className="sjLogo">
                    <img alt="Umut-Alptekin" src={sj} />
                  </div>
                </div>

              </Col>
            </Row>
          </Col>

          <Col size="s12 m12 l7">
            
          </Col>
        </Row> */}

      <div className="logosDiv">
        <div className="bootCampLogo">
          <img alt="University of Texas Boot Camp" src={bootcamp} />
        </div>
        <div className="psuLogo">
          <img alt="Penn State University" src={psuLogo} />
        </div>
        <div className="sjLogo">
          <img alt="Saint Joseph High School" src={sj} />
        </div>
      </div>

    </div>
  );
}