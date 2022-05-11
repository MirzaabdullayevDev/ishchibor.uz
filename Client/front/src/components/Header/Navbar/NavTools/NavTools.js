import React from "react";
import "./NavTools.css";

export default function NavTools() {
  return (
    <>
      <div class="nav_lang mobile">
        <a href="/uz">O'Z</a>
        <span></span>
        <a href="/ru">РУ</a>
      </div>
      <div class="nav_tools">
        <div class="nav_lang desktop">
          <a href="/uz">O'Z</a>
          <span></span>
          <a href="/ru">РУ</a>
        </div>
        <a class="nav_call" href="tel:+998935613300">
          <div class="call_number">
            <i class="fa-solid fa-phone"></i>
            <h4>+998935613300</h4>
          </div>
          <p>Call Center</p>
        </a>
        <a class="nav_profile" href="/profile">
          <i class="fa-solid fa-user"></i>
          <h4>Mening profilim</h4>
        </a>
      </div>
    </>
  );
}
