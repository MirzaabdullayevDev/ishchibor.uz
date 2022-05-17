import React from "react";
import "./NavTools.css";

export default function NavTools() {
  return (
    <>
      <div className="nav_lang mobile">
        <a href="/uz">O'Z</a>
        <span></span>
        <a href="/ru">РУ</a>
      </div>
      <div className="nav_tools">
        <div className="nav_lang desktop">
          <a href="/uz">O'Z</a>
          <span></span>
          <a href="/ru">РУ</a>
        </div>
        <a className="nav_call" href="tel:+998935613300">
          <div className="call_number">
            <i className="fa-solid fa-phone"></i>
            <h4>+998935613300</h4>
          </div>
          <p>Call Center</p>
        </a>
        <a className="nav_profile" href="/profile">
          <i className="fa-solid fa-user"></i>
          <h4>Mening profilim</h4>
        </a>
      </div>
    </>
  );
}
