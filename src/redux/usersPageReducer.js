let initialState = {
	users: [
		
	],
};

export const usersPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users],
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
		default:
			return state;
	}
};

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
