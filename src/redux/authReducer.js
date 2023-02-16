import axios from "axios";
import {usersAPI} from "../api/api";

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }

        default:
            return state;
    }
};

const SET_USER_DATA = "SET-USER-DATA";


export const setAuthUserData = (userID, email, login) => ({type: SET_USER_DATA, data: {userID, email, login}});

export const checkAuthorization = () => {
    return (dispatch) => {
        usersAPI.checkAuthorization()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

export default authReducer

