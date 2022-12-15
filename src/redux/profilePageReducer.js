let initialState = {
    posts: [
        { id: 1, message: "asidfasd", likesCount: 12 },
        { id: 2, message: "lol", likesCount: 228 },
        { id: 3, message: "lolol", likesCount: 1337 },
        { id: 4, message: "lololo", likesCount: 322 },
        { id: 5, message: "asidfddasd", likesCount: 12 },
    ],
    newPostText: "fffffffff",
}

export const profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_POST:
			let newPost = {
				id: state.posts.count + 1,
				message: state.newPostText,
				likesCount: 1488,
			};
			state.posts.push(newPost);
			break;
		case UPDATE_NEW_POST_TEXT:
			let newValue = action.text
			state.newPostText = newValue
            break
		default:
			return state;
	}
	return state;
};

const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})