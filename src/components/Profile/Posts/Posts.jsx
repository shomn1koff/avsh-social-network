import React from "react";
import CreatePostFormContainer from "./CreatePostForm/CreatePostFormContainer";
import PostList from "./PostList/PostList";
import PostListContainer from "./PostList/PostListContainer";

const Posts = () => {

  // let profilePage = store.getState().profilePage
  // let newPostText = profilePage.newPostText

	return (
		<div>
			<CreatePostFormContainer/>
			<PostListContainer/>
		</div>
	);
};

export default Posts;
