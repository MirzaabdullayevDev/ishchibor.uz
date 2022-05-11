import React from "react";
import Logo from "./Logo/Logo";
import "./Navbar.css";
import NavTools from "./NavTools/NavTools";

const Navbar = () => {
  return (
    <nav>
      <div class="container">
        <div class="navbar">
          <Logo />
          <NavTools/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
