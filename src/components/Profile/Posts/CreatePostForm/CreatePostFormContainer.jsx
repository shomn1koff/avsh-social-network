import React from "react";

import {
	addNewPostActionCreator,
	updateNewPostTextActionCreator,
} from "../../../../redux/profilePageReducer";
import CreatePostForm from "./CreatePostForm";

const CreatePostFormContainer = ({ dispatch, newPostText }) => {

	const addPost = () => {
		dispatch(addNewPostActionCreator());
		dispatch(updateNewPostTextActionCreator(""));
	};

	const updateNewPostText = (e) => {
		let text = e.target.value;
		dispatch(updateNewPostTextActionCreator(text));
	};

	return (
		<CreatePostForm
			addPost={addPost}
			updateNewPostText={updateNewPostText}
            newPostText={newPostText}
		/>
	);
};

export default CreatePostFormContainer;
