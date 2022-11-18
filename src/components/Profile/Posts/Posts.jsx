import React from 'react'
import CreatePostForm from './CreatePostForm/CreatePostForm'
import PostList from './PostList/PostList'

const Posts = ({ posts, addNewPost }) => {
  return (
    <div>
      <CreatePostForm addNewPost={addNewPost} />
      <PostList posts={posts}/>
    </div>
  )
}

export default Posts
