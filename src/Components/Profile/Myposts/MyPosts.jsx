import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <section className={classes.sectionMyPosts}>
                <h2>My posts</h2>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button>Add post</button>
                <ul className="postsList">
                    <Post message="Здорово Корова" likeCounts="15"/>
                    <Post message="Я Бык!" likeCounts="30"/>
                </ul>
            </section>
        </div>
    );
};

export default MyPosts;