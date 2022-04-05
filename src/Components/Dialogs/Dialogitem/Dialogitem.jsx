import React from "react";
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let pathInDialog = "/dialogs/" + props.id;
    return (
        <li className={classes.dialogItem}>
            <NavLink to={pathInDialog}><img className={classes.avatar} src={props.avatar} alt=""/><p>{props.name}</p></NavLink>
        </li>
    )
}


export default DialogItem