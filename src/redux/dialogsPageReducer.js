let initialState = {
	dialogs: [
		{ id: 1, name: "Alex" },
		{ id: 2, name: "Elena" },
		{ id: 3, name: "Maxim" },
		{ id: 4, name: "Zurab" },
		{ id: 5, name: "Shotovich" },
	],
	messages: [
		{ id: 1, senderName: "Viktor", message: "Hi" },
		{ id: 2, senderName: "Korneplod", message: "Loerm" },
		{ id: 3, senderName: "Lol", message: "Ipmusdf" },
		{ id: 4, senderName: "Kek", message: "aiosudhf" },
		{ id: 5, senderName: "Cheburek", message: "sdf" },
	],
	newMessageBody: "msgBody",
};

export const dialogsPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_MESSAGE: {
			let newMessage = {
				id: state.messages.length + 1,
				senderName: "John Dhow",
				message: state.newMessageBody,
			};
			return {
				...state,
				messages: [...state.messages, newMessage],
				newMessageBody: "",
			};
		}

		case UPDATE_NEW_MESSAGE_BODY: {
			return {
				...state,
				newMessageBody: action.text,
			};
		}

		default:
			return state;
	}
};

const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });
export const updateNewMessageBodyActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	text: text,
});
