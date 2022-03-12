import React from 'react';
import classes from './Profile.module.css';
const Profile = () => {
    return (
        <main className="main-content">
            <img src="https://avatars.mds.yandex.net/i?id=5ff0bca997edbf6d1fc20ce56034a496-5878999-images-thumbs&n=13" alt=""/>
            <section className="ava-and-descriptions">
                <img src="https://avatars.mds.yandex.net/i?id=950c5627823560d0f8d4020de1e0ff9d-5887217-images-thumbs&n=13" alt=""/>
                <p>information</p>
            </section>
            <section className="my-posts">
                <h2>My posts</h2>
                <div>my post</div>
            </section>
            <section className="posts">
                <div className={classes.item}>post 1</div>
                <div className="item">post 2</div>
            </section>
        </main>
    );
};

export default Profile;