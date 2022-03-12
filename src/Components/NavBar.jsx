import React from 'react';
import classes from './NavBar.module.css';
const NavBar = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li className={classes.item}><a>Profile</a></li>
                <li className="item"><a>Messages</a></li>
                <li><a>News</a></li>
                <li><a>Music</a></li>
                <li><a>Settings</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;