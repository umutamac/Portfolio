import React from "react";
import { Col, Row } from "../components/Grid";

function NoMatch() {
  return (
    <Row>
      <Col size="m12">
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Col>
    </Row>
  );
}

export default NoMatch;