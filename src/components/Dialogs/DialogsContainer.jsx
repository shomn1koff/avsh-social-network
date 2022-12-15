import React from "react";
import Dialogs from "./Dialogs";

import {
	addNewMessageActionCreator,
	updateNewMessageBodyActionCreator,
} from "../../redux/dialogsPageReducer";

const DialogsContainer = ({ store }) => {
	let dialogsPage = store.getState().dialogsPage;

	let newMessageBody = dialogsPage.newMessageBody;

	const addMessage = () => {
		store.dispatch(addNewMessageActionCreator());
	};
	const updateNewMessageBody = (text) => {
		store.dispatch(updateNewMessageBodyActionCreator(text));
	};

	return (
		<Dialogs
			dialogsPage={dialogsPage}
			addMessage={addMessage}
			updateNewMessageBody={updateNewMessageBody}
            newMessageBody={newMessageBody}
		/>
	);
};

export default DialogsContainer;
