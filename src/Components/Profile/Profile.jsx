import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <main className={classes.mainContent}>
            <ProfileInfo />
            <MyPosts />
        </main>
    );
};

export default Profile;