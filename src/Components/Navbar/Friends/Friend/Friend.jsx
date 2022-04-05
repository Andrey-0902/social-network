import React from "react";
import classes from "./Friend.module.css";

const Friend = (props) => {
    return (
        <li>
            <img className={classes.avatar} src={props.avatar} alt=""/>
            <p>{props.name}</p>
        </li>
    )
}

export default Friend