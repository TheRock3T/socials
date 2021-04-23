import React from "react";
import post from './Post.module.css'

const Post = (props) => {
    return (
        <div className={post.item}>
            <img src='https://www.statnews.com/wp-content/uploads/2020/05/GettyImages-513859318.jpg'/>
            {props.message}
            <div>
                       <span className={post.likes}>
                           Likes {props.likes}
                       </span>
            </div>

            <span className={post.dislikes}>
                Dislikes {props.dislikes}
            </span>
        </div>

    )
}

export default Post