import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const container = useRef(null);

  useEffect(() => {
    console.log(container.current);
    container.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(container.current.value);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" className="form-input" ref={container} />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
