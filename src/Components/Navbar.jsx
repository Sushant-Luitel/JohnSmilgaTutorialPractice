import React, { useContext } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="navbar">
      <h5>Context API</h5>
      <NavLinks />
    </div>
  );
};

export default Navbar;
