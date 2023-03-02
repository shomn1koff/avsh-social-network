import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../redux/authReducer";

class HeaderContainer extends Component {

    // componentDidMount() {
    //    this.props.checkAuthorization()
    // }

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.userID,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {logout})(HeaderContainer);