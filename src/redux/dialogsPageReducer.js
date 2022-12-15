let initialState = {
    dialogs: [
        { id: 1, name: "Alex" },
        { id: 2, name: "Elena" },
        { id: 3, name: "Maxim" },
        { id: 4, name: "Zurab" },
        { id: 5, name: "Shotovich" },
    ],
    messages: [
        { senderName: "Viktor", message: "Hi" },
        { senderName: "Korneplod", message: "Loerm" },
        { senderName: "Lol", message: "Ipmusdf" },
        { senderName: "Kek", message: "aiosudhf" },
        { senderName: "Cheburek", message: "sdf" },
    ],
    newMessageBody: 'msgBody'
}


export const dialogsPageReducer = (state = initialState, action) => {
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

