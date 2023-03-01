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
};

export const dialogsPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_MESSAGE: {
			let newMessage = {
				id: state.messages.length + 1,
				senderName: "John Dhow",
				message: action.message,
			};
			return {
				...state,
				messages: [...state.messages, newMessage],
			};
		}

		default:
			return state;
	}
};

const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

export const addNewMessage = (message) => ({ type: ADD_NEW_MESSAGE, message });
