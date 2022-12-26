import React from "react";
import { connect } from "react-redux";

import {
	addNewPostActionCreator,
	updateNewPostTextActionCreator,
} from "../../../../redux/profilePageReducer";
import CreatePostForm from "./CreatePostForm";

// const CreatePostFormContainer = () => {
// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => {
// 				const addPost = () => {
// 					store.dispatch(addNewPostActionCreator());
// 					store.dispatch(updateNewPostTextActionCreator(""));
// 				};

// 				const updateNewPostText = (e) => {
// 					let text = e.target.value;
// 					store.dispatch(updateNewPostTextActionCreator(text));
// 				};

// 				return (
// 					<CreatePostForm
// 						addPost={addPost}
// 						updateNewPostText={updateNewPostText}
// 						newPostText={store.getState().profilePage.newPostText}
// 					/>
// 				);
// 			}}
// 		</StoreContext.Consumer>
// 	);
// };

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addNewPostActionCreator());
			dispatch(updateNewPostTextActionCreator(""));
		},
		updateNewPostText: (e) => {
			let text = e.target.value;
			dispatch(updateNewPostTextActionCreator(text));
		},
	};
};

const CreatePostFormContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CreatePostForm);

export default CreatePostFormContainer;
