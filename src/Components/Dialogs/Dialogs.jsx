import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Messageitem/Messageitem";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message}/>)

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }


    return (
        <section className={classes.dialogsSection}>
            <ul className={classes.dialogsList}>
                {dialogsElements}
            </ul>
            <ul className={classes.messagesList}>
                {messagesElements}
            </ul>
            <div>
                <textarea className={classes.textarea} ref={newMessageElement} value={props.dialogsPage.newMessageText} onChange={onMessageChange} />
                <button className={classes.btn} onClick={addMessage}>add message</button>
            </div>
        </section>
    )
}

export default Dialogs