import React from 'react'
import Posts from './Posts/Posts'
import c from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({profilePage, dispatch}) => {
  return (
    <div className={c.content}>
      <ProfileInfo />
      <Posts profilePage={profilePage} dispatch={dispatch}/>
    </div>
  )
}

export default Profile