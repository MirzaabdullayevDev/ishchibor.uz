import React from "react";
import imgLogo from "../../../../images/logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <a href="/" class="logo">
      <img src={imgLogo} alt="logo" />
    </a>
  );
}
