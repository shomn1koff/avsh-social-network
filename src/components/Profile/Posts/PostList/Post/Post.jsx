import React from 'react'
import c from './Post.module.scss'

const Post = ({message, likesCount, avatar, ...props}) => {
  return (
    <div className={c.post}>
      <img className={c.avatar} src={avatar} alt="" />
      <div className={c.content}>
        <div>{message}</div>
        <div>Likes: {likesCount}</div>
      </div>
    </div>
  )
}

export default Post
