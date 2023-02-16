import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import { dialogsPageReducer } from './dialogsPageReducer'
import { profilePageReducer } from './profilePageReducer'
import { usersPageReducer } from './usersPageReducer'
import authReducer from "./authReducer";
import thunk from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store;

export default store