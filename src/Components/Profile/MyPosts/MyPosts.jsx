import React from "react";
import post from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    /*Example database*/
    let postData = [
        {id: 1, message: 'Who you?', likes: 25, dislikes: 0},
        {id: 2, message: 'What is that?', likes: 723847, dislikes: 9324823},
        {id: 3, message: 'New social?', likes: 2445, dislikes: 10},
        {id: 4, message: 'Hello React', likes: 999, dislikes: 5}
    ]

    let postsElements = postData.map(post => <Post message={post.message} likes={post.likes} dislikes={post.dislikes}/> )

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