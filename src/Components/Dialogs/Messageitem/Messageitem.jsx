import React from "react";
import classes from './../Dialogs.module.css'

const MessageItem = (props) => {
    return <li className={classes.messageItem}>{props.message}</li>
}


export default MessageItem