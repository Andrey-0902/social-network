import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Messageitem/Messageitem";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map ( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} /> )
    let messagesElements = props.state.messages.map ( m => <MessageItem message={m.message} /> )

    return (
        <section className={classes.dialogsSection}>
            <ul className={classes.dialogsList}>
                { dialogsElements }
            </ul>
            <ul className={classes.messagesList}>
                { messagesElements }
            </ul>
        </section>
    )
}

export default Dialogs