import React from "react";
import prof from './Profile.module.css'

const Profile = () => {
    return (
        <div className={prof.content}>
            <div>
                <img src='https://canadiankraftpaper.com/wp-content/uploads/2018/05/s-header-forest.jpg'></img>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div className={prof.item}>
                        Post 1
                    </div>
                    <div className={prof.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile