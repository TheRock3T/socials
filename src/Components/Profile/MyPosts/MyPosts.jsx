import React from "react";
import post from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add new post</button>
            </div>
            <div className={post.posts}>
                <Post message='Who you' likes='20' dislikes='2' />
                <Post message='Hello world' likes='999' dislikes='0'/>

            </div>
        </div>
    )
}

export default MyPosts