import React from "react";
import dial from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let dialogId = '/dialogs/' + props.id
    return (
        <div className={dial.dialog + ' ' + dial.active}>
            <NavLink to={dialogId}>{props.name}</NavLink>
        </div>
    )
}

const MessageU = (props) => {
    return (
        <div className={dial.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={dial.dialogs}>
            <div className={dial.dialogsItems}>
               <DialogItem name='Dmitry' id='1' />
                <DialogItem name='Valera' id='2' />
                <DialogItem name='Alex' id='3' />
                <DialogItem name='Galina' id='4' />
            </div>
            <div className={dial.messages}>
                <MessageU message='Hello my friend' />
                <MessageU message='I love react' />
                <MessageU message='SPAM SPAM SPAM' />

            </div>
        </div>
    )
}

export default Dialogs