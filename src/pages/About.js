import React from "react";
import "./about.css";

import headshot from "../assets/aboutPics/Alptekin_U_01.jpg";
import psuLogo from "../assets/aboutPics/psu_coe.png";
import bootcamp from "../assets/aboutPics/UT_bootcamp.png";
import sj from "../assets/aboutPics/sj.jpg";
import { Row, Col } from "../components/Grid";

function About() {
  const engResume = "assets/pdf/Resume_Umut_Alptekin_Dec2020.pdf";
  const webdevResume = "https://docs.google.com/document/d/1xIc6BZVuvJXwSytZVoiGwqJ-fL1-Lf-pxx5IcLW-PL4/edit?usp=sharing";

  return (
    <article id="about">
      <div className="article-container">
        <h1>About Me</h1>
        <hr /><br />
        <Row>
          <Col id="photoAndResumes" size="s12 m12 l5">
            <Row>
              <Col size="s12 m7 l12">
                <div id="headshot">
                  <img alt="Umut Alptekin" src={headshot} />
                </div>
              </Col>
              <br />
              <Col id="links" size="s12 m5 l12">
                <ul>
                  <li><a href={webdevResume} target="_blank" rel="noopener noreferrer">My Web Development Resume</a></li>
                  <br />
                  <li><a href={process.env.PUBLIC_URL + engResume} target="_blank" rel="noopener noreferrer">My Engineering Resume</a></li>
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

          <Col id="about-text" size="s12 m12 l7">
            <p>Hello there! My name is Umut Alptekin. I am currently looking for a job as either an engineer, or a Full-Stack/Back-end developer.
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

          </Col>
        </Row>

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
    </article>
  );
}

export default About;