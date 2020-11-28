import React from "react";
import { Col, Row } from "../components/Grid";
import Card from "../components/Card"
import myprojects from "../wdProjects.json";

function Portfolio() {
    function renderRows() {
        const chunk = 3; // 3 cards to be created per row
        for (let i = 0; i < myprojects.length; i += chunk) { // create one row per chunk of items
            <Row> { 
                myprojects.slice(i, i + chunk).map((props) => (
                    // pick first/next 3 objects from imported json array
                    // use map to create cards for each of the 3 items, pass the props down to Card component
                    <Col size="s12 m6 l4">
                        <Card {...props} />
                    </Col>
                ))
            }
            </Row>
        }
    }

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
            <div id="tab">
                {renderRows()}
            </div>
        </div>
    );
}
export default Portfolio;