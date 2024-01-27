import React from "react";
import useToggle from "./useToggle";

const Toggle = () => {
  const { show, toggle } = useToggle(false);
  return (
    <div>
      <button className="btn" onClick={toggle}>
        Toggle
      </button>
      {show && <h2>Some stuff</h2>}
    </div>
  );
};

export default Toggle;
