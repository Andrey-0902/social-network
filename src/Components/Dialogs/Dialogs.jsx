import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let pathInDialog = "/dialogs/" + props.id;
    return (
        <li>
            <NavLink to={pathInDialog}>{props.name}</NavLink>
        </li>
    )
}

const MessageItem = (props) => {
    return <li className={classes.messageItem}>{props.message}</li>
}

let dialogs = [
    {id: 1, name: 'Конь в пальто'},
    {id: 2, name: 'Мышка норушка'},
    {id: 3, name: 'Кот в сапогах'},
    {id: 4, name: 'Серый волк'},
    {id: 5, name: 'Панда'}
]

let messages = [
    {id: 1, message: 'Привет, как дела?'},
    {id: 2, message: 'Учу React'},
    {id: 3, message: 'Yo'}
]

let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> )
let messagesElements = messages.map ( m => <MessageItem message={m.message} /> )

const Dialogs = () => {
    return (
        <section className={classes.dialogsSection}>
            <ul className={classes.dialogsList}>
                { dialogsElements }
            </ul>
            <ul className={classes.messagesList}>
                { messagesElements }

                <MessageItem message={messages[0].message} />
                <MessageItem message={messages[1].message} />
                <MessageItem message={messages[2].message} />
            </ul>
        </section>
    )
}

export default Dialogs