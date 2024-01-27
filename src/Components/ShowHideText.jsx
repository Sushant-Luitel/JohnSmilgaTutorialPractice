import React, { useEffect } from "react";

const ShowHideText = () => {
  useEffect(() => {
    const IntId = setInterval(() => {
      console.log("Hello World");
    }, 1000);
    return () => {
      clearInterval(IntId);
    };
  }, []);
  return (
    <div>
      <h1>Welcome to the Show Hide Component</h1>
    </div>
  );
};

export default ShowHideText;
