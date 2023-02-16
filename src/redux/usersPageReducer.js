import {usersAPI} from "../api/api";

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
    isFetching: false,
    isFollowing: [],
};

export const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (action.userID === u.id) {
                        u.followed = true;
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: [
                    ...state.users.map((u) => {
                        if (action.userID === u.id) {
                            u.followed = false;
                        }
                        return u;
                    }),
                ],
            };
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING: {
			return {
                ...state,
                isFollowing: action.isFetching
                    ? [...state.isFollowing, action.userID]
                    : [state.isFollowing.filter(id => id !== action.userID)]
            }
        }
        default:
            return state;
    }
};

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING"

export const setUsers = (users) => ({type: SET_USERS, users});
export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowing = (isFetching, userID) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userID})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            //console.log()
            dispatch(toggleIsFetching(false))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setUsers(data.items))
        });
    }
}

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userID))
        usersAPI.follow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userID))
            }
            dispatch(toggleIsFollowing(false, userID))
        })
    }
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userID))
        usersAPI.unfollow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userID))
            }
            dispatch(toggleIsFollowing(false, userID))
        })
    }
}
