import React from "react";
import dial from "./../Dialogs.module.css"


const Message = (props) => {
    return (
        <div className={dial.message}>{props.message}</div>
    )
}


export default Message