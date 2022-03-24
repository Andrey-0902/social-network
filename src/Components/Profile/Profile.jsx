import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <main className={classes.mainContent}>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </main>
    );
};

export default Profile;