import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {acceptUserProfile, setUserProfile} from '../../redux/profilePageReducer'
import axios from "axios";
import withRouter from "../../reactRouter/withRouter";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        this.props.setUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))