import React from "react";
import Dialogs from "./Dialogs";

import {
	addNewMessage,
	updateNewMessageBody,
} from "../../redux/dialogsPageReducer";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}


export default compose(
    connect(mapStateToProps, {addNewMessage, updateNewMessageBody}),
    withAuthRedirect,
)(Dialogs);
