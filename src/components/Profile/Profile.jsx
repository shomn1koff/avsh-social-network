import React from 'react'
import Posts from './Posts/Posts'
import c from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Profile = (props) => {
    return (
        <div className={c.content}>
            <ProfileInfo profile={props.profile}/>
            <ProfileStatus status={props.status} updateStatus={props.updateUserProfileStatus}/>
            <Posts/>
        </div>
    )
}

export default Profile