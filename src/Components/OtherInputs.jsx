import React, { useState } from "react";

const OtherInputs = () => {
  const [checked, setChecked] = useState(false);
  function handleChange(e) {
    setChecked(e.target.checked);
  }
  const frameworks = ["react", "vue", "angular", "express"];
  const [framework, setFramework] = useState("react");

  return (
    <div>
      <form className="form">
        <div className="form-row">
          <label htmlFor="freeShipping">Free Shipping</label>
          <input
            type="checkbox"
            id="freeShipping"
            checked={checked}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="framework">Framework</label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={(e) => {
              setFramework(e.target.value);
              console.log(e.target.value);
            }}
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
};

export default OtherInputs;
