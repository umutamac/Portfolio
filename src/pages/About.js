import React from "react";
import "./about.css";

import Bio from "../components/Bio";
import Hero from "../components/Bio/hero";

// import psuLogo from "../assets/aboutPics/psu_coe.png";
// import bootcamp from "../assets/aboutPics/UT_bootcamp.png";
// import sj from "../assets/aboutPics/sj.jpg";

// const engResume = "https://drive.google.com/file/d/1yWjiqpy8hogHbtwtAjI1cs08kA8kzq8S/view?usp=sharing";
// const webdevResume = "https://docs.google.com/document/d/1xIc6BZVuvJXwSytZVoiGwqJ-fL1-Lf-pxx5IcLW-PL4/edit?usp=sharing";

export default function About() {

  return (
    <div className="article-container">
      <Hero />

      <Bio />

      {/* <div className="logosDiv">
        <div className="bootCampLogo">
          <img alt="University of Texas Boot Camp" src={bootcamp} />
        </div>
        <div className="psuLogo">
          <img alt="Penn State University" src={psuLogo} />
        </div>
        <div className="sjLogo">
          <img alt="Saint Joseph High School" src={sj} />
        </div>
      </div> */}

    </div>
  );
}