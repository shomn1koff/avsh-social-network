// let rerenderAllTree = () => {
// 	console.log("like rerender");
// };

// let state = {};

// window.state = state;

// export let addNewMessage = (text) => {
// 	let newMessage = {
// 		senderName: "John Dhow",
// 		message: text,
// 	};
// 	state.dialogsPage.messages.push(newMessage);
// 	rerenderAllTree(state);
// };

// export let addNewPost = (text) => {
// 	let newPost = {
// 		id: state.profilePage.posts.length + 1,
// 		message: text,
// 		likesCount: 322,
// 	};
// 	state.profilePage.posts.push(newPost);
// 	rerenderAllTree(state);
// 	//console.log(state.profilePage.posts)
// };

// export let updateNewPostText = (text) => {
// 	let newValue = text;
// 	state.profilePage.newPostText = newValue;
// 	rerenderAllTree(state);
// 	//console.log(state.profilePage.newPostText)
// };

// export let subscribe = (observer) => {
// 	rerenderAllTree = observer;
// };

// export default state;

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
		},
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === 'ADD-NEW-POST') {
			let newPost = {
				id: this.getState().profilePage.posts.count + 1,
				message: action.text,
				count: 1488,
			};
			this._state.profilePage.posts.push(newPost);
			this._callSubscriber();
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			let newValue = action.text
			this._state.profilePage.newPostText = newValue
			this._callSubscriber()
		} else if (action.type === 'ADD-NEW-MESSAGE') {
			let newMessage = {
				senderName: "John Dhow",
				message: action.text,
			};
			this._state.dialogsPage.messages.push(newMessage);
			this._callSubscriber()
		} else {
			console.log('store error')
		}
	},
	// addNewPost(text) {
	// 	let newPost = {
	// 		id: this.getState().profilePage.posts.count + 1,
	// 		message: text,
	// 		count: 1488,
	// 	};
	// 	this._state.profilePage.posts.push(newPost);
	// 	this._callSubscriber();
	// },
	// addNewMessage(text) {
		// let newMessage = {
		// 	senderName: "John Dhow",
		// 	message: text,
		// };
		// this._state.dialogsPage.messages.push(newMessage);
        // this._callSubscriber()
	// },
    // updateNewPostText(text) {
    //     let newValue = text
    //     this._state.profilePage.newPostText = newValue
    //     this._callSubscriber()
    // }
};

export default store