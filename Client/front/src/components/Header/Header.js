import React from 'react';
import './Header.css'
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';

const Header = () => {
    return (
        <header>
            <Navbar />
            <Banner />
        </header>
    );
}

export default Header;
