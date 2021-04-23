import React from "react";
import post from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = [
        {message: 'Who you?', likes: 25, dislikes: 0},
        {message: 'I React', likes: 999, dislikes: 5}
    ]

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
                <Post message={postData[0].message} likes={postData[0].likes} dislikes={postData[0].dislikes}/>
                <Post message={postData[1].message} likes={postData[1].likes} dislikes={postData[1].dislikes}/>

            </div>
        </div>
    )
}

export default MyPosts