import React from "react";
import imgLogo from "../../../../images/logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <a href="/" className="logo">
      <img src={imgLogo} alt="logo" />
    </a>
  );
}
