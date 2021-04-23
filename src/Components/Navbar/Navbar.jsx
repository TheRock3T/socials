import React from "react";
import nb from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={nb.nav}>
            <div className={nb.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={nb.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={nb.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={nb.item}>
                <a href='/videos'>Videos</a>
            </div>
            <div className={nb.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar