import React from "react";
import Dialogs from "./Dialogs";

import {
	addNewMessageActionCreator,
	updateNewMessageBodyActionCreator,
} from "../../redux/dialogsPageReducer";
import { connect } from "react-redux";

// const DialogsContainer = () => {
// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => {
// 				let dialogsPage = store.getState().dialogsPage;

// 				let newMessageBody = dialogsPage.newMessageBody;

// 				const addMessage = () => {
// 					store.dispatch(addNewMessageActionCreator());
// 				};
// 				const updateNewMessageBody = (text) => {
// 					store.dispatch(updateNewMessageBodyActionCreator(text));
// 				};

// 				return (
// 					<Dialogs
// 						dialogsPage={dialogsPage}
// 						addMessage={addMessage}
// 						updateNewMessageBody={updateNewMessageBody}
// 						newMessageBody={newMessageBody}
// 					/>
// 				);
// 			}}
// 		</StoreContext.Consumer>
// 	);
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageActionCreator());
        },
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
