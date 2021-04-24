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

const Dialogs = () => {
    /*Example database*/
    let dialogsData = [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Galina'}
    ]
    /*Example database*/
    let messagesData = [
        {message: 'Hello my friend'},
        {message: 'I love react'},
        {message: 'SPAM SPIM SPIN'}
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = messagesData.map(msg => <MessageU message={msg.message}/> )

    return (
        <div className={dial.dialogs}>
            <div className={dial.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={dial.messages}>
                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs