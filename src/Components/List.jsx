import { Person } from "./Person";
import React from "react";
import { Persons } from "./data";
const List = () => {
  return (
    <div>
      {Persons.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </div>
  );
};

export default List;
