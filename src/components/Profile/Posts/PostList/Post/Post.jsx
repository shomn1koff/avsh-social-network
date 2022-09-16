import React from 'react'
import c from './Post.module.scss'

const Post = (props) => {
  return (

    <div>
      <img className={c.avatar} src={props.avatar} alt="" />
      <div>{props.title}</div>
      <div>Likes: {props.likesCount}</div>
    </div>
  )
}

export default Post