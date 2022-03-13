import React from 'react';
import classes from './NavBar.module.css';
const NavBar = () => {
    return (
        <nav className={classes.mainNav}>
            <ul>
                <li className={classes.item}><a href="#">Profile</a></li>
                <li className={classes.item}><a href="#">Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;