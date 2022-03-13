import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {
    return (
        <div>
            <section className="my-posts">
                <h2>My posts</h2>
                <div>my post</div>
            </section>
    <section className="posts">
                <Post />
                <div className="item">post 2</div>
            </section>
        </div>
    );
};

export default MyPosts;