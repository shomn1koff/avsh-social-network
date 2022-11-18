import React from 'react'
import Post from './Post/Post'

const PostList = ({ posts }) => {
  let postsElements = posts.map((el) => (<Post
    message={el.message}
    likesCount={el.likesCount}
    avatar={
      'https://memepedia.ru/wp-content/uploads/2018/06/unnamed-768x768.jpg'
    }
  />))
  return <div>{postsElements}</div>
}

export default PostList
