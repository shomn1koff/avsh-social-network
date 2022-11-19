import React from 'react'
import CreatePostForm from './CreatePostForm/CreatePostForm'
import PostList from './PostList/PostList'

const Posts = ({ profilePage, addNewPost, updateNewPostText}) => {
  return (
    <div>
      <CreatePostForm newPostText={profilePage.newPostText} addNewPost={addNewPost} updateNewPostText={updateNewPostText} />
      <PostList posts={profilePage.posts}/>
    </div>
  )
}

export default Posts
