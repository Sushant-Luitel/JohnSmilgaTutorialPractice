import React, { createContext, useState } from "react";
import NavLinks from "./NavLinks";
export const NavbarContext = createContext();
const Navbar = () => {
  const [user, setUser] = useState({ name: "rat" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <div className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
