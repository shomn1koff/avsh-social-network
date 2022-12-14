export const dialogsPageReducer = (state, action) => {
	switch (action.type) {
		case ADD_NEW_MESSAGE:
			let newMessage = {
				senderName: "John Dhow",
				message: state.newMessageBody,
			};
			state.messages.push(newMessage);
			break;
		case UPDATE_NEW_MESSAGE_BODY:
			let newValue = action.text;
			state.newMessageBody = newValue;
			break;
		default:
			return state;
	}

	return state;
};

const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE})
export const updateNewMessageBodyActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, text: text})

