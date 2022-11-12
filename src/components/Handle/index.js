import React, { useState } from "react";
import "./handle.scss";

function Handle(props) {
  const { text } = props;

  return (
    <div className="handle">
      <h2 className="handle-text">{text}</h2>
    </div>
  );
}

export default Handle;
