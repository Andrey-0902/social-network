import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
const Profile = () => {
    return (
        <main className={classes.mainContent}>
            <img src="https://avatars.mds.yandex.net/i?id=5ff0bca997edbf6d1fc20ce56034a496-5878999-images-thumbs&n=13" alt=""/>
            <section className="ava-and-descriptions">
                <img src="https://avatars.mds.yandex.net/i?id=950c5627823560d0f8d4020de1e0ff9d-5887217-images-thumbs&n=13" alt=""/>
                <p>information</p>
            </section>
            <MyPosts />
        </main>
    );
};

export default Profile;