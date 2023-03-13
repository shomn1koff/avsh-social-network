import axios from "axios";
import {usersAPI, profileAPI} from "../api/api";

let initialState = {
	posts: [
		{ id: 1, message: "asidfasd", likesCount: 12 },
		{ id: 2, message: "lol", likesCount: 228 },
		{ id: 3, message: "lolol", likesCount: 1337 },
		{ id: 4, message: "lololo", likesCount: 322 },
		{ id: 5, message: "asidfddasd", likesCount: 12 },
	],
	profile: null,
	status: ""
};

export const profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_POST: {
			let newPost = {
				id: state.posts.length + 1,
				message: action.postText,
				likesCount: 228,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			};
		}

		case SET_USER_PROFILE: {
			return {
				...state, profile: action.profile
			}
		}
		case SET_USER_PROFILE_STATUS: {
			return {
				...state, status: action.status
			}
		}
		case UPDATE_USER_PROFILE_STATUS: {
			return {
				...state, status: action.status
			}
		}
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state, profile: {...state.profile, photos: action.photos}
			}
		}
		default:
			return state;
	}
};

const ADD_NEW_POST = "ADD-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_PROFILE_STATUS = "SET_USER_PROFILE_STATUS"
const UPDATE_USER_PROFILE_STATUS = "UPDATE_USER_PROFILE_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

export const addNewPostActionCreator = (postText) => ({ type: ADD_NEW_POST, postText });


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserProfileStatus = (status) => ({type: SET_USER_PROFILE_STATUS, status})

export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})



export const getUserProfile = (userID) => {
	return (dispatch) => {
		usersAPI.getUserProfile(userID)
			.then((response) => {
				dispatch(setUserProfile(response.data))
			});
	}
}

export const getUserProfileStatus = (userID) => (dispatch) => {
	profileAPI.getUserProfileStatus(userID).then(response => {
		dispatch(setUserProfileStatus(response.data))
	})
}

export const updateUserProfileStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateUserProfileStatus(status).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setUserProfileStatus(status))
			}
		})
	}
}

export const savePhoto = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file)

	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}