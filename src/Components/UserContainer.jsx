import React, { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext);
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
