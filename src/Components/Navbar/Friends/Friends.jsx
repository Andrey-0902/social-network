import React from "react"
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";

const Friends = (props) => {
    let friendsElements = props.friends.map( f => <Friend name={f.name} avatar={f.avatar}/>)
    return (
        <div>
            <p>Friends</p>
            <ul className={classes.listOfFriends}>
                {friendsElements}
            </ul>
        </div>
    )
}

export default Friends