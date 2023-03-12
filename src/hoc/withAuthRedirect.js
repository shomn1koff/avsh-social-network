import React, {Component} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>

            return <Component {...this.props}/>
        }
    }


    return connect(mapStateToPropsForRedirect, {})(RedirectComponent)
}

export default withAuthRedirect

