let initialState = {
	users: [
		{
            id: 1,
            avatarImage:
              "https://sun1-25.userapi.com/impg/2ftoZ_gXsOiqrGRoDrmuixDQZlJiuek3mONHCA/w3_sx9Ol8nM.jpg?size=1619x2160&quality=95&sign=93f4cc785d2f7c4b8123b04a561d43b5&type=album",
            userName: "Таfрас",
            status: "фыыва",
            followed: false,
            country: "Russia",
            city: "Podolsk",
          },
          {
            id: 2,
            avatarImage:
              "https://sun1-25.userapi.com/impg/2ftoZ_gXsOiqrGRoDrmuixDQZlJiuek3mONHCA/w3_sx9Ol8nM.jpg?size=1619x2160&quality=95&sign=93f4cc785d2f7c4b8123b04a561d43b5&type=album",
            userName: "Мыкола",
            status: "пвапв",
            followed: false,
            country: "Russia",
            city: "Podolsk",
          },
          {
            id: 3,
            avatarImage:
              "https://sun1-25.userapi.com/impg/2ftoZ_gXsOiqrGRoDrmuixDQZlJiuek3mONHCA/w3_sx9Ol8nM.jpg?size=1619x2160&quality=95&sign=93f4cc785d2f7c4b8123b04a561d43b5&type=album",
            userName: "Зэкич",
            status: "вапвдддд",
            followed: false,
            country: "Russia",
            city: "Podolsk",
          },
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
