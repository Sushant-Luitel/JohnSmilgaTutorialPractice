import { data } from "./data";
import { useState } from "react";
const UseReducerSetup = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn btn-remove" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}

      {people.length < 1 ? (
        <button className="btn" onClick={() => setPeople(data)}>
          Reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => setPeople([])}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default UseReducerSetup;
