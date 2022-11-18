import React from 'react'
import Posts from './Posts/Posts'
import c from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({posts, addNewPost}) => {
  return (
    <div className={c.content}>
      <ProfileInfo />
      <Posts posts={posts} addNewPost={addNewPost}/>
    </div>
  )
}

export default Profile