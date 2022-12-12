const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


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
		if (action.type === ADD_NEW_POST) {
			let newPost = {
				id: this.getState().profilePage.posts.count + 1,
				message: this._state.profilePage.newPostText,
				count: 1488,
			};
			this._state.profilePage.posts.push(newPost);
			this._callSubscriber();
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			let newValue = action.text
			this._state.profilePage.newPostText = newValue
			this._callSubscriber()
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			let newValue = action.text
			this._state.dialogsPage.newMessageBody = newValue
			this._callSubscriber()
		} else if (action.type === ADD_NEW_MESSAGE) {
			let newMessage = {
				senderName: "John Dhow",
				message: this._state.dialogsPage.newMessageBody,
			};
			this._state.dialogsPage.messages.push(newMessage);
			this._callSubscriber()
		} else {
			console.log('store error')
		}
	},
	
};

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE})
export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const updateNewMessageBodyActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, text: text})


export default store
window.store = store