import React from "react";
import dial from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.messagesData.map(msg => <Message message={msg.message}/> )

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