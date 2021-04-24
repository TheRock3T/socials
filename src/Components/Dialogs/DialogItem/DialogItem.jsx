import React from "react";
import dial from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let dialogId = '/dialogs/' + props.id
    return (
        <div className={dial.dialog + ' ' + dial.active}>
            <NavLink to={dialogId}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem