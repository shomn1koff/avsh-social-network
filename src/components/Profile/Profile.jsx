import React from 'react'
import Posts from './Posts/Posts'
import c from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({profilePage, addNewPost, updateNewPostText}) => {
  return (
    <div className={c.content}>
      <ProfileInfo />
      <Posts profilePage={profilePage} addNewPost={addNewPost} updateNewPostText={updateNewPostText}/>
    </div>
  )
}

export default Profile