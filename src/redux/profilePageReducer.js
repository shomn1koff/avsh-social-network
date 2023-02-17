import axios from "axios";
import {usersAPI} from "../api/api";

let initialState = {
	posts: [
		{ id: 1, message: "asidfasd", likesCount: 12 },
		{ id: 2, message: "lol", likesCount: 228 },
		{ id: 3, message: "lolol", likesCount: 1337 },
		{ id: 4, message: "lololo", likesCount: 322 },
		{ id: 5, message: "asidfddasd", likesCount: 12 },
	],
	newPostText: "fffffffff",
	profile: null
};

export const profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_POST: {
			let newPost = {
				id: state.posts.length + 1,
				message: state.newPostText,
				likesCount: 1488,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: "",
			};
		}

		case UPDATE_NEW_POST_TEXT: {
			return { ...state, newPostText: action.text };
		}
		case SET_USER_PROFILE: {
			return {
				...state, profile: action.profile
			}
		}
		default:
			return state;
	}
};

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	text: text,
});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userID) => {
	return (dispatch) => {
		usersAPI.getUserProfile(userID)
			.then((response) => {
				dispatch(setUserProfile(response.data))
			});
	}
}