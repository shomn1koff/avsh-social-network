import React from "react";
import { connect } from "react-redux";

import {
	addNewPostActionCreator,
	updateNewPostTextActionCreator,
} from "../../../../redux/profilePageReducer";
import CreatePostForm from "./CreatePostForm";


let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (postText) => {
			dispatch(addNewPostActionCreator(postText));
		},
		handleSubmit: (formData) => {
			console.log(formData)
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreatePostForm);;
