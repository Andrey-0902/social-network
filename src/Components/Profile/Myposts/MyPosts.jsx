import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

let posts = [
    {id: '1', message: 'Здорово Корова', likeCounts: '15'},
    {id: '2', message: 'Я Бык!', likeCounts: '30'}
]

let postsElements = posts.map ( p => <Post message={p.message} likeCounts={p.likeCounts} /> )

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
                    { postsElements }
                </ul>
            </section>
        </div>
    );
};

export default MyPosts;