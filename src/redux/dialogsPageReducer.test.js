import {addNewMessage, dialogsPageReducer} from "./dialogsPageReducer";

it('new msg should be added ', function () {
	// 1 -- test data
	let action = addNewMessage('heyhey')
	let state = {
		messages: [
		{ id: 1, senderName: "Viktor", message: "Hi" },
		{ id: 2, senderName: "Korneplod", message: "Loerm" },
		{ id: 3, senderName: "Lol", message: "Ipmusdf" },
		{ id: 4, senderName: "Kek", message: "aiosudhf" },
		{ id: 5, senderName: "Cheburek", message: "sdf" },
	],
	}

	//2 -- action
	let newState = dialogsPageReducer(state, action)

	//3 -- expectation
	expect(newState.messages.length).toBe(6)
}); 