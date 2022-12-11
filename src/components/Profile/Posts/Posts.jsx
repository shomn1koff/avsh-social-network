import React from 'react'
import CreatePostForm from './CreatePostForm/CreatePostForm'
import PostList from './PostList/PostList'

const Posts = ({ profilePage, dispatch}) => {
  return (
    <div>
      <CreatePostForm newPostText={profilePage.newPostText} dispatch={dispatch} />
      <PostList posts={profilePage.posts}/>
    </div>
  )
}

export default Posts
