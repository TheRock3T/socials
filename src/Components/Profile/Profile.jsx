import React from "react";
import prof from './Profile.module.css'
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://canadiankraftpaper.com/wp-content/uploads/2018/05/s-header-forest.jpg'></img>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile