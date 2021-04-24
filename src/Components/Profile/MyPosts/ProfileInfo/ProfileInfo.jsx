import React from "react";
import pi from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt='' src='https://canadiankraftpaper.com/wp-content/uploads/2018/05/s-header-forest.jpg'></img>
            </div>
            <div className={pi.AvatarDescriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo