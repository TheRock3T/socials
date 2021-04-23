import React from "react";
import nb from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={nb.nav}>
            <div className={nb.item}>
                <a>Profile</a>
            </div>
            <div className={nb.item}>
                <a>Messages</a>
            </div>
            <div className={nb.item}>
                <a>Music</a>
            </div>
            <div className={nb.item}>
                <a >Videos</a>
            </div>
            <div className={nb.item}>
                <a>Settings</a>
            </div>
            <div className={nb.item}>
                <a>WTF</a>
            </div>
        </nav>
    )
}

export default Navbar