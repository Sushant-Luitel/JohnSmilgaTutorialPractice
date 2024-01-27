import React, { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Multiple Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default MultipleInputs;
