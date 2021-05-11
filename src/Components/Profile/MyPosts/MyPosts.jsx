import React from "react";
import post from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements =
        props.state.postData.map(post => <Post message={post.message} likes={post.likes} dislikes={post.dislikes}/> )

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={post.PostsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add new post</button>
                </div>
            </div>
            <div className={post.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts