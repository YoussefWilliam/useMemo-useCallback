import React from "react";
import "./App.css";

function Boxes({ boxes }) {
  return (
    <div className="boxes-wrapper">
      {boxes.map((boxStyles, index) => (
        <div key={index} className="box" style={boxStyles} />
      ))}
    </div>
  );
}

export default React.memo(Boxes);
