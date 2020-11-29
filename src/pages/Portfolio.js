import React from "react";
import { Col, Row } from "../components/Grid";
import Card from "../components/Card"
import myprojects from "../wdProjects.json";
import "./portfolio.css";

function Portfolio() {

    return (
        <div className="container" id="portfolio">
            <h1>Portfolio</h1>
            <hr /><br />
            <Row>
                <Col size="s12">
                    <ul id="tabs-swipe-demo" className="tabs">
                        <li className="tab col s6"><a className="active" href="#tab1">Web Development</a></li>
                        <li className="tab col s6"><a className="" href="#tab2">Engineering</a></li>
                    </ul>
                </Col>
            </Row>
            <div id="tab1">
                <Row>
                    {myprojects.map((project, i) => {
                        console.log(project);
                        return (
                            <Col key={i} size="s12 m6 l4">
                                <Card key={i} {...project} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    );
}
export default Portfolio;