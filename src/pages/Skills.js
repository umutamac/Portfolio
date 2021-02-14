import React from "react";
import "./skills.css";

import { Row, Col } from "../components/Grid";

//import context from "require-context/register";

import jsicon from "../assets/skillsPics/js-icon1.png";
import htmlicon from "../assets/skillsPics/html-icon2.png";
import cssicon from "../assets/skillsPics/css-icon.png";
import jqueryicon from "../assets/skillsPics/jquery-icon1.png";
import nodejsicon from "../assets/skillsPics/nodejs-icon.png";
import mongodbicon from "../assets/skillsPics/mongodb-icon2.png";
import mysqlicon from "../assets/skillsPics/mysql-icon.png";
import reacticon from "../assets/skillsPics/react-icon.png";
// import pythonicon from "../assets/skillsPics/python-icon.png";
// import postgresicon from "../assets/skillsPics/postgresql-icon.png";
// import vueicon from "../assets/skillsPics/vue-icon1.png";
// import tsicon from "../assets/skillsPics/typescripts-icon1.png";

let langicons = [htmlicon, cssicon, jsicon, jqueryicon];
let dbicons = [mongodbicon, mysqlicon];
let frameworkicon = [nodejsicon, reacticon];

function Skills() {

    return (
        <div id="skills" className="container">
            <h1>Skills</h1>
            <hr /><br />

            <div>
                <Row>
                    <h3>Languages</h3>
                    {langicons.map((img, i) => {
                        return (
                            <Col key={i} size="s6 m4 l2">
                                <img className="skill-img hoverable" src={img} alt="Language icon" />
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    <h3>Databases</h3>
                    {dbicons.map((img, i) => {
                        return (
                            <Col key={i} size="s16 m4 l2">
                                <img className="skill-img hoverable" src={img} alt="Databases icon" />
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    <h3>Frameworks</h3>
                    {frameworkicon.map((img, i) => {
                        return (
                            <Col key={i} size="s6 m4 l2">
                                <img className="skill-img hoverable" src={img} alt="Framework icon" />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    );
}

export default Skills;