import React from "react";
import "./about.css";

import headshot from "../assets/aboutPics/Alptekin_U_01.jpg";
import psuLogo from "../assets/aboutPics/psu_coe.png";
import bootcamp from "../assets/aboutPics/UT_bootcamp.png";
import sj from "../assets/aboutPics/sj.jpg";
// import { Row } from "../components/Grid";

function About() {
  let resume = "assets/pdf/Resume_Umut_Alptekin_Dec2020.pdf";

  return (
    <article id="about">
      <div className="article-container">
        <h1>About Me</h1>
        <hr /><br />
        <div className="about-text">
          <div id="headshot"><img alt="Umut-Alptekin" src={headshot} /></div>

          <p> Hello there! My name is Umut Alptekin. I am currently looking for a job as either an engineer, or a Full-Stack/Back-end developer.
          </p>

          <p>I have recently graduated from Penn State University with a Bachelor of Science in Mechanical Engineering in May 2020,
          and, shortly after, finished a 3-month long bootcamp about Full-Stack Web Development from University of Texas at Austin.
          </p>

          <p>For some background information, I was born and raised in Istanbul, Turkey. I have gone to Lycée Saint-Joseph Istanbul, a French high school, then moved to USA to attend Penn State University. 
          Currently, I am back in Istanbul for the foreseeable future, but still open to relocating to another country to chase a work opportunity.
          </p>

          <p>The bootcamp was a very interesting and constructive experience for me. I have learned so much about coding in general, project workflow in software, and about web development itself.
          Every week, I was challenged with a new project about a new topic, and had to learn how to use the tools I was just introduced to pretty much on the job.
          After the bootcamp, I am still learning more about the tools and technologies to better leverage them, and finding different solutions to given problems. 
          </p>

          <p>While in Penn State, I loved studying engineering, since the technical problem-solving aspect gives me quite a lot of joy. 
          One of the most memorable things I was involved in was my capstone project where my teammates and I were building a gas-powered, fiberglass car with the maximum fuel efficiency as possible.
          Our plans to use it in the Shell Eco-marathon competition could not happen, it was still an amazing experience.
          </p>

          <span>My resume can be found <a href={process.env.PUBLIC_URL + resume} target="_blank" rel="noopener noreferrer">here</a>.</span>

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