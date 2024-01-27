import React, { useState } from "react";
import ShowHideText from "./ShowHideText";
const TernaryOperator = () => {
  const [showText, SetShowText] = useState(false);

  return (
    <div>
      {showText ? <ShowHideText /> : <h1>Empty</h1>}

      <button
        style={{ position: "fixed", top: 0, left: 0 }}
        onClick={() => SetShowText(!showText)}
      >
        {showText ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default TernaryOperator;
