export const profilePageReducer = (state, action) => {
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