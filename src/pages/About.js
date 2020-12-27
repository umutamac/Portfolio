import React from "react";
import "./about.css";

import headshot from "../assets/aboutPics/Alptekin_U_01.jpg";
import psuLogo from "../assets/aboutPics/psu_coe.png";
import bootcamp from "../assets/aboutPics/UT_bootcamp.png";
import sj from "../assets/aboutPics/sj.jpg";
import resume from "../assets/pdf/Resume_Umut_Alptekin_Dec2020.pdf";
// import { Row } from "../components/Grid";

function About() {

  return (
    <article id="about">
      <div className="article-container">
        <h1>About Me</h1>
        <hr /><br />
        <div className="about-text">

          <div id="headshot">
            <img alt="Umut-Alptekin" src={headshot} />
           
          </div>

          <p>Hello everyone! My name is Umut and I am currently on my way to become a Full-Stack Web Developer
          thanks
          to the coding bootcamp at UT Austin. I have recently earned a Bachelor's degree in mechanical
          engineering, however, during this shaky time in the job market,
                I've decided to dive into an industry which I had an interest in but no time for previously.</p>

          <p>For some background information, I was born and raised in Istanbul, Turkey. I have gone to a French
          high
          school in Istanbul, then moved to USA to attend Penn State University.
          I had the chance to study an interesting subject and took part on many technical projects like
          building
          a gas-powered car as my capstone project, as well as lived in a foreing culture for several years,
          all
          of which I enjoyed every moment.
          After finishing college and having a job-hunting period in the USA, I have come back to Istanbul.
              </p>

          <p>Currently, I am not certain about whether I will look for a job in web development or in engineering
          after I am done with my coding bootcamp, but having multiple options is something very valuable for
          me. I will see where future takes me...</p>
          
          <span>My resume can be found <a href={resume} target="_blank" rel="noopener noreferrer">here</a>.</span>

          <br />
          <div id="logosDiv">

            <div id="bootCampLogo">
              <img alt="Umut-Alptekin" src={bootcamp} />
            </div>
            <div id="psuLogo">
              <img alt="Umut-Alptekin" src={psuLogo} />
            </div>
            <div id="sjLogo">
              <img alt="Umut-Alptekin" src={sj} />
            </div>

          </div>

        </div>

      </div>
    </article>
  );
}


export default About;
