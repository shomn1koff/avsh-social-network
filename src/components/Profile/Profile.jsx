import React from 'react'
import Posts from './Posts/Posts'
import c from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div className={c.content}>
      <ProfileInfo />
      <Posts />
    </div>
  )
}

export default Profile