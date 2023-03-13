import React from 'react'
import Posts from './Posts/Posts'
import c from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const Profile = (props) => {
    return (
        <div className={c.content}>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateUserProfileStatus}/>
            <Posts/>
        </div>
    )
}

export default Profile