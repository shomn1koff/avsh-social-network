import React from 'react'
import Posts from './Posts/Posts'
import c from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({store}) => {
  return (
    <div className={c.content}>
      <ProfileInfo />
      <Posts store={store}/>
    </div>
  )
}

export default Profile