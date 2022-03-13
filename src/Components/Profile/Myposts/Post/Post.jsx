import React from 'react';
import classes from './Post.module.css';
const Post = () => {
    return (
        <li className={classes.item}>
            <img src="https://krot.info/uploads/posts/2021-03/1614993981_34-p-krutaya-panda-art-kartinki-36.jpg" alt="Аватарка"/>
            <p>post1</p>
            <p><button>Like</button></p>
        </li>
    );
};

export default Post;