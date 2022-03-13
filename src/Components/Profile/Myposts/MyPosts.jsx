import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <section className="my-posts">
                <h2>My posts</h2>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
                <ul className="postsList">
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </ul>
            </section>
        </div>
    );
};

export default MyPosts;