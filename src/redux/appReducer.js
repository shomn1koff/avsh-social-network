import {checkAuthorization} from "./authReducer";


let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            };
        }

        default:
            return state;
    }
};

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let mePromise = dispatch(checkAuthorization())
    Promise.all([mePromise]).then(() => {
        dispatch(initializedSuccess())
    })
}


export default appReducer

