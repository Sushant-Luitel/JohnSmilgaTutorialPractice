import React, { useState } from "react";
import { data } from "./data";
const UserChallengeForm = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    setUsers([...users, { id: [fakeId], name }]);
  };

  const removePerson = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>User Challenge Form</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button
              className=" btn "
              id="btn-remove"
              onClick={() => removePerson(user.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallengeForm;
