import React from "react";
import head from './Header.module.css';
import logo from './logo.svg'

const Header = () => {
    return (
        <header className={head.header}>
            <img src={logo} alt='Logo'/>
        </header>
    )
}

export default Header
