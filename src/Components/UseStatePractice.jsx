import React, { useState } from "react";
import data from "./data";
const UseStatePractice = () => {
  const [people, setPeople] = useState(data);
  function removerPeson(id) {
    const newArray = people.filter((person) => person.id !== id);
    setPeople(newArray);
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button onClick={() => removerPeson(id)}>Delete</button>
          </div>
        );
      })}
      <button
        style={{
          marginTop: "20px",
          backgroundColor: "red",
        }}
        onClick={() => setPeople([])}
      >
        Clear All Items
      </button>
    </div>
  );
};

export default UseStatePractice;
