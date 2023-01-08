import React from "react";
import Dialogs from "./Dialogs";

import {
	addNewMessageActionCreator,
	updateNewMessageBodyActionCreator,
} from "../../redux/dialogsPageReducer";
import { connect } from "react-redux";

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
