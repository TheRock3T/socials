import React from "react";
import post from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postData.map(post => <Post message={post.message} likes={post.likes} dislikes={post.dislikes}/> )

    return (
        <div className={post.PostsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add new post</button>
                </div>
            </div>
            <div className={post.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts