import { dialogsPageReducer } from "./dialogsPageReducer";
import { profilePageReducer } from "./profilePageReducer";



export let store = {
	_callSubscriber() {
		console.log("no subscribers?...");
	},
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "asidfasd", likesCount: 12 },
				{ id: 2, message: "lol", likesCount: 228 },
				{ id: 3, message: "lolol", likesCount: 1337 },
				{ id: 4, message: "lololo", likesCount: 322 },
				{ id: 5, message: "asidfddasd", likesCount: 12 },
			],
			newPostText: "fffffffff",
		},
		dialogsPage: {
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
		},
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		profilePageReducer(this._state.profilePage, action)
		dialogsPageReducer(this._state.dialogsPage, action)
		this._callSubscriber(this)
	},
	
};



export default store
window.store = store