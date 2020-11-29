import React from "react";

// Exporting the Container, Row, and Col components from this file

export function Container() {
  return <div className="row"></div>;
}

export function Row(props) {
  return <div className="row">{props.children}</div>;
}

// This Col component lets us size materialize columns with less syntax
// e.g. <Col size="m12"> instead of <div className="col m12">
export function Col({children, size}) {
  return (
    <div className={`col ${size}`} >
      {children}
    </div>
  );
}
