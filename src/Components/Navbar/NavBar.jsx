import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props) => {

    return (
        <div>
            <nav className={classes.mainNav}>
                <ul className={classes.mainNav__navList}>
                    <li className={classes.item}><NavLink to="/profile"
                                                          className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
                    </li>
                    <li className={classes.item}><NavLink to="/dialogs"
                                                          className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
                    </li>
                    <li className={classes.item}><NavLink to="/news"
                                                          className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
                    </li>
                    <li className={classes.item}><NavLink to="/music"
                                                          className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
                    </li>
                    <li className={classes.item}><NavLink to="/settings"
                                                          className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
                    </li>
                </ul>
            <Friends friends={props.state.friends}/>
            </nav>
        </div>
    )
        ;
};

export default NavBar;