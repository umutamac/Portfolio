import React from "react";
import "./skills.css";

import { Row, Col } from "../components/Grid";

//import context from "require-context/register";

import icons from "../assets/skillsPics/index.js";


let langicons = [icons.ts, icons.js, icons.jquery, icons.html, icons.css,];
let dbicons = [icons.mongodb, icons.mysql];
let frameworkicon = [icons.vue, icons.react, icons.nodejs,];

export default function Skills() {

    return (
        <div id="skills" className="container">
            <h1>Skills</h1>
            <hr /><br />

            <div>
                <h3>Languages</h3>
                <Row>
                    {langicons.map((img, i) => {
                        return (
                            <Col key={i} size="s6 m4 l2">
                                <img className="skill-img " src={img} alt="Language icon" />
                            </Col>
                        )
                    })}
                </Row>
                <h3 style={{ marginTop: "30px" }}>Databases</h3>
                <Row>
                    {dbicons.map((img, i) => {
                        return (
                            <Col key={i} size="s16 m4 l2">
                                <img className="skill-img " src={img} alt="Databases icon" />
                            </Col>
                        )
                    })}
                </Row>
                <h3 style={{ marginTop: "30px" }}>Frameworks</h3>
                <Row>
                    {frameworkicon.map((img, i) => {
                        return (
                            <Col key={i} size="s6 m4 l2">
                                <img className="skill-img " src={img} alt="Framework icon" />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    );
}