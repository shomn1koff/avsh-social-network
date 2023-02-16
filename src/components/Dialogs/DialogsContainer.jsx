import React from "react";
import Dialogs from "./Dialogs";

import {
	addNewMessage,
	updateNewMessageBody,
} from "../../redux/dialogsPageReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}


const DialogsContainer = connect(mapStateToProps, {addNewMessage, updateNewMessageBody})(Dialogs)

export default DialogsContainer;
