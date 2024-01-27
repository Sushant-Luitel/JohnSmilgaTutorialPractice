import React, { useContext } from "react";

import { AppContext } from "./GlobalContext";

const UserContainer = () => {
  const { user, logout } = useContext(AppContext);
  return (
    <div className="user-container">
      <p>Hello there, {user?.name?.toUpperCase()}</p>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default UserContainer;
