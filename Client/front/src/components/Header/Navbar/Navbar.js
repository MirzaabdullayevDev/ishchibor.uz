import React from "react";
import Logo from "./Logo/Logo";
import "./Navbar.css";
import NavTools from "./NavTools/NavTools";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <Logo />
          <NavTools/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
