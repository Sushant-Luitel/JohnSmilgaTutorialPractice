import React from "react";
import { useState, useEffect } from "react";
const FetchData = () => {
  const [users, setUsers] = useState([]);
  const url = "https://api.github.com/users";
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setUsers(result);
    }
    fetchUsers();
  }, []);
  return (
    <div className="container">
      <h1>Fetching Data!</h1>

      {users.map((user) => {
        const { avatar_url, login, url } = user;
        return (
          <div className="profile">
            <img src={avatar_url} alt="avatar" />
            <div className="user">
              <p> {login}</p>

              <a href={url} target="_blank" rel="noopener noreferer">
                Profile
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FetchData;
