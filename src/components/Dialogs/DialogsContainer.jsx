import React from "react";
import Dialogs from "./Dialogs";

import {
	addNewMessage,
	updateNewMessageBody,
} from "../../redux/dialogsPageReducer";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}


let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, {addNewMessage, updateNewMessageBody})(AuthRedirectComponent)

export default DialogsContainer;
