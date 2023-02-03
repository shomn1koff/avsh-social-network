import React from 'react'
import Posts from './Posts/Posts'
import c from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={c.content}>
      <ProfileInfo profile={props.profile} />
      <Posts/>
    </div>
  )
}

export default Profile