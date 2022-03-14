import React from 'react';
import classes from './Post.module.css';
const Post = (props) => {
    return (
        <li className={classes.item}>
            <img src="https://krot.info/uploads/posts/2021-03/1614993981_34-p-krutaya-panda-art-kartinki-36.jpg" alt="Аватарка"/>
            <p>{ props.message }</p>
            <p><button>Like</button></p>
            <p>{ props.likeCounts }</p>
        </li>
    );
};

export default Post;