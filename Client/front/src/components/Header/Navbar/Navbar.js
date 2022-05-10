import React from 'react';
import './Navbar.css'
import imgLogo from '../../../images/logo.png'


const Navbar = () => {
    return (
        <nav >
            <div class="container">
                <div class="navbar">
                    <a href="/" class="logo">
                        <img src={imgLogo} alt="logo" />
                    </a>
                    <div class="nav_tools">
                        <div class="nav_lang">
                            <a href="/uz">O'Z</a>
                            <span></span>
                            <a href="/ru">РУ</a>
                        </div>
                        <a class="nav_call" href="tel:+998935613300">
                            <div class="call_number">
                                <i class="fa-solid fa-phone"></i>
                                <h4>+998935613300</h4>
                            </div>
                        </a>
                        <a class="nav_profile" href="/profile">
                            <i class="fa-solid fa-user"></i>
                            <h4>Mening profilim</h4>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
