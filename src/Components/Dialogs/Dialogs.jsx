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

const Dialogs = () => {
    return (
        <section className={classes.dialogsSection}>
            <ul className={classes.dialogsList}>
                <DialogItem name='Конь в пальто' id='1' />
                <DialogItem name='Мышка норушка' id='2' />
                <DialogItem name='Кот в сапогах' id='3' />
                <DialogItem name='Серый волк' id='4' />
                <DialogItem name='Панда' id='5' />
            </ul>
            <ul className={classes.messagesList}>
                <MessageItem message='Привет, как дела?' />
                <MessageItem message='Учу React' />
                <MessageItem message='Yo' />
            </ul>
        </section>
    )
}

export default Dialogs