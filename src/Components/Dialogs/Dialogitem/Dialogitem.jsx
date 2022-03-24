import React from "react";
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let pathInDialog = "/dialogs/" + props.id;
    return (
        <li>
            <NavLink to={pathInDialog}>{props.name}</NavLink>
        </li>
    )
}


export default DialogItem