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

    let dialogsData = [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Galina'}
    ]

    let messagesData = [
        {message: 'Hello my friend'},
        {message: 'I love react'},
        {message: 'SPAM SPIM SPIN'}
    ]

    return (
        <div className={dial.dialogs}>
            <div className={dial.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={dial.messages}>
                <MessageU message={messagesData[0].message}/>
                <MessageU message={messagesData[1].message}/>
                <MessageU message={messagesData[2].message}/>

            </div>
        </div>
    )
}

export default Dialogs