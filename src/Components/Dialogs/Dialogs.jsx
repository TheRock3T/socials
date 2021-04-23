import React from "react";
import dial from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={dial.dialogs}>
            <div className={dial.dialogsItems}>
                <div className={dial.dialog + ' ' + dial.active}>
                    Dmitry
                </div>
                <div className={dial.dialog}>
                    Alex
                </div>
                <div className={dial.dialog}>
                    Arina
                </div>
                <div className={dial.dialog}>
                    Galina
                </div>
            </div>
            <div className={dial.messages}>
                <div className={dial.message}>Hello!</div>
                <div className={dial.message}>Who u?</div>
                <div className={dial.message}>I like React!</div>
            </div>
        </div>
    )
}

export default Dialogs