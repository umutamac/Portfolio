import React, { useEffect, useState } from "react";
import { Col, Row } from "../components/Grid";
import Card from "../components/Card"


function Portfolio(props) {
    return (
        <div className="container" id="portfolio">
            <h1>Portfolio</h1>
            <hr />
            <br />
            <Row>
                <Col size="s12">
                    <ul id="tabs-swipe-demo" class="tabs">
                        <li className="tab col s6"><a className="active" href="#tab1">Web Development</a></li>
                        <li className="tab col s6"><a className="" href="#tab2">Engineering</a></li>
                    </ul>
                </Col>
            </Row>

            <div id="tab">
                <Row>
                    <Col size="s12 m6 l4">
                        <Card {...props} />
                    </Col>
                </Row>
            </div>

        </div>
    );
}

export default Portfolio;
