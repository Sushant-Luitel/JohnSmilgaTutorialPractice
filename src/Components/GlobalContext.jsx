import React, { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext();

const GlobalContext = ({ children }) => {
  const [user, setUser] = useState({ name: "rat" });
  const logout = () => {
    setUser(null);
  };
  return (
    <AppContext.Provider value={{ user, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalContext;
