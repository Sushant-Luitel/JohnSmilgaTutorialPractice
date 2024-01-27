import React, { useState } from "react";

const ObjectSetup = () => {
  const [person, setPerson] = useState({
    name: "sushant",
    age: 22,
    title: "React Developer",
  });

  function handleClick() {
    setPerson({ name: "sisham", age: 24, title: "Documentation Officer" });
  }
  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.title}</h2>
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default ObjectSetup;
