import React, { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  function login() {
    setUser({
      name: "Sushant",
    });
  }

  function logout() {
    setUser(null);
  }
  return (
    <div>
      {user ? (
        <div>
          <h4> Hello there, {user.name}</h4>
          <button onClick={logout}>LogOut</button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button onClick={login}>Login</button>
        </div>
      )}
      {/* <button> {isLoggedIn ? "LogOut" : "Login"}</button> */}
    </div>
  );
};

export default UserChallenge;
