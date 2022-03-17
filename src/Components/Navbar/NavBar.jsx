import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={classes.mainNav}>
            <ul>
                <li className={`${classes.item} ${classes.active}`}><a href="/profile">Profile</a></li>
                <li className={classes.item}><a href="/dialogs">Messages</a></li>
                <li className={classes.item}><a href="/news">News</a></li>
                <li className={classes.item}><a href="/music">Music</a></li>
                <li className={classes.item}><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;