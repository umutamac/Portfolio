import React from "react";
import "./bio.css";

export default function Bio() {

  return (
    <div id="about-text" style={{ marginBottom: "100px" }} >

      <section className="py-5">
        <ul className="timeline">
          <li className="timeline-item mb-5">
            <h5 className="fw-bold">Software Developer at Testinvite</h5>
            <p className="text-muted mb-2 fw-bold">February 2021 - Present</p>
            <p className="text-muted">
              In this SaaS company, I work on the web app, which is built with Vue.js at the front-end and Firebase at the back-end. My work is comprised of improving existing features, assisting clients with technical issues, and building entirely new features from end to end. This includes designing the interfaces, adapting any 3rd party software into our system when needed and creating the necessary backend functions.
            </p>
          </li>

          <li className="timeline-item mb-5">
            <h5 className="fw-bold">Coding Bootcamp</h5>
            <p className="text-muted mb-2 fw-bold">December 2020</p>
            <p className="text-muted">
              I've completed a 3-month long bootcamp about Full-Stack Web Development from University of Texas at Austin. The bootcamp was a very interesting and constructive experience for me. I have learned so much about coding in general, workflow in a software project, and web development itself. Every week, I was challenged with a new project about a new topic, and had to quickly learn how to use the tools I was just introduced in order to build a project. After the bootcamp, I am still learning more about the tools and technologies to better leverage them, and finding different solutions to given problems.
            </p>
          </li>

          <li className="timeline-item mb-5">
            <h5 className="fw-bold">Bachelor's Degree at Penn State</h5>
            <p className="text-muted mb-2 fw-bold">May 2020</p>
            <p className="text-muted">
              I have graduated from Penn State University with a Bachelor of Science in Mechanical Engineering. While in Penn State, I loved studying engineering, since the technical problem-solving aspect gives me quite a lot of joy. One of the most memorable things I was involved in was my capstone project where my teammates and I were building a gas-powered, fiberglass car with the maximum fuel efficiency as possible for the Shell Eco-marathon competition. 
            </p>
          </li>

          {/* <li className="timeline-item mb-5">
            <h5 className="fw-bold">Earned the first million $!</h5>
            <p className="text-muted mb-2 fw-bold">15 October 2020</p>
            <p className="text-muted">
              Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed
              et urna sit amet massa dapibus tristique non finibus ligula. Nam
              pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
              vulputate mattis.
            </p>
          </li> */}
        </ul>
      </section>
    </div>
  );
}