import React from "react";
import CreatePostFormContainer from "./CreatePostForm/CreatePostFormContainer";
import PostList from "./PostList/PostList";

const Posts = ({ store }) => {

  let profilePage = store.getState().profilePage
  let newPostText = profilePage.newPostText

	return (
		<div>
			<CreatePostFormContainer
				newPostText={newPostText}
				dispatch={store.dispatch}
			/>
			<PostList posts={profilePage.posts} />
		</div>
	);
};

export default Posts;
