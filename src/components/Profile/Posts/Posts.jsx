import React from 'react'
import CreatePostForm from './CreatePostForm/CreatePostForm'
import PostList from './PostList/PostList'

const Posts = () => {
  return (
    <div>
        Posts Page
        <CreatePostForm/>
        <PostList/>
      </div>
  )
}

export default Posts