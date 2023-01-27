let initialState = {
	users: [
		
	],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0
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
		default:
			return state;
	}
};

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
