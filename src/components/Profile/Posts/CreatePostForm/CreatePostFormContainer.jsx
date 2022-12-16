import React from "react";

import {
	addNewPostActionCreator,
	updateNewPostTextActionCreator,
} from "../../../../redux/profilePageReducer";
import StoreContext from "../../../../storeContext";
import CreatePostForm from "./CreatePostForm";

const CreatePostFormContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				const addPost = () => {
					store.dispatch(addNewPostActionCreator());
					store.dispatch(updateNewPostTextActionCreator(""));
				};

				const updateNewPostText = (e) => {
					let text = e.target.value;
					store.dispatch(updateNewPostTextActionCreator(text));
				};

				return (
					<CreatePostForm
						addPost={addPost}
						updateNewPostText={updateNewPostText}
						newPostText={store.newPostText}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};

export default CreatePostFormContainer;
