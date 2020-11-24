import React from "react";

// Exporting the Container, Row, and Col components from this file

export function Container( children ) {
  return <div className="row">{children}</div>;
}

export function Row( children ) {
  return <div className="row">{children}</div>;
}

// This Col component lets us size materialize columns with less syntax
// e.g. <Col size="m12"> instead of <div className="col m12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .trim()
        .map(size => "col " + size)}
    >
      {children}
    </div>
  );
}
