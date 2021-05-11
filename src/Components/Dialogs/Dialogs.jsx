import React from "react";
import dial from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.state.messagesData.map(msg => <Message message={msg.message}/> )
    let newMessageElement = React.createRef()
    let newMessageAdd = () => {
        let messagePerson = newMessageElement.current.value
        alert(messagePerson)
    }
    return (
        <div className={dial.dialogs}>
            <div className={dial.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={dial.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <div>
                    <button onClick={newMessageAdd}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs