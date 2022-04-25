import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text);
    }

    return (
        <div>
            <section className={classes.sectionMyPosts}>
                <h2>My posts</h2>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
                </div>
                <button onClick={addPost}>Add post</button>
                <ul className="postsList">
                    {postsElements}
                </ul>
            </section>
        </div>
    );
};

export default MyPosts;