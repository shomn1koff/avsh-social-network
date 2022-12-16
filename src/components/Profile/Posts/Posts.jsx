import React from "react";
import CreatePostFormContainer from "./CreatePostForm/CreatePostFormContainer";
import PostList from "./PostList/PostList";

const Posts = () => {

  // let profilePage = store.getState().profilePage
  // let newPostText = profilePage.newPostText

	return (
		<div>
			<CreatePostFormContainer/>
			<PostList/>
		</div>
	);
};

export default Posts;
