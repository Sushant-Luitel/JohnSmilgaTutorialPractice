import React, { useState } from "react";

const UseStateError = () => {
  console.log(useState(0));
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Increase</button>
    </div>
  );
};

export default UseStateError;
