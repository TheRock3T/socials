import React from "react";
import nb from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsList from "./FriendsList/FriendsList";

const Navbar = (props) => {

    let nameFa = props.state.friendsList.map(nameF => <FriendsList names={nameF.name} /> )

    return (
        <nav className={nb.nav}>
            <div className={nb.item}>
                <NavLink to='/profile' activeClassName={nb.active} >Profile</NavLink>
            </div>
            <div className={nb.item}>
                <NavLink to='/dialogs' activeClassName={nb.active}>Messages</NavLink>
            </div>
            <div className={nb.item}>
                <NavLink to='/music' activeClassName={nb.active}>Music</NavLink>
            </div>
            <div className={nb.item}>
                <NavLink to='/videos' activeClassName={nb.active}>Videos</NavLink>
            </div>
            <div className={nb.item}>
                <NavLink to='/settings' activeClassName={nb.active}>Settings</NavLink>
            </div>
            <div className={nb.friendsList}>
                Friends
                {nameFa}
            </div>
        </nav>

    )
}

export default Navbar