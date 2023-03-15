import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getUserProfile,
    getUserProfileStatus,
    savePhoto,
    saveProfile,
    updateUserProfileStatus
} from '../../redux/profilePageReducer'
import withRouter from "../../reactRouter/withRouter";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refresh() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserID
        }
        this.props.getUserProfile(userId)
        this.props.getUserProfileStatus(userId)
    }
    componentDidMount() {
        this.refresh()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refresh()
        }
    }

    render() {
        return (
            <Profile {...this.props} saveProfile={this.props.saveProfile} savePhoto={this.props.savePhoto} isOwner={!this.props.router.params.userId} profile={this.props.profile} status={this.props.status} updateUserProfileStatus={this.props.updateUserProfileStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserID: state.auth.userID,
    isAuth: state.auth.isAuth
})



export default compose(
    connect(mapStateToProps, {getUserProfile, getUserProfileStatus, updateUserProfileStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)