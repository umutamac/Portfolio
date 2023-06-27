import React from "react";

export default function NoMatch() {
  const noMatchStyle = {
    textAlign: "center",
  };
  return (
    <div style={{ paddingTop: "100px", height: "100vh" }}>
      <h1 style={noMatchStyle} >Page Not Found</h1>
      <h1 style={{ textAlign: "center" }}>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </div>
  );
}
