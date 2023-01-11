import React from "react";
import UserItem from "./UserItem/UserItem";

const UserList = ({ users, follow, unfollow, setUsers }) => {
	//   avatarImage,
	//   userName,
	// status,
	// followed,
	// country,
	// city,
  if (users.length === 0) {
    //console.log('sss')
    //выводится в 2 раза больше пользователей (вроде как функция 2 раза вызывается (2 раз из installhook))
    //для фикса убираем в index.js React.StrictMode
    setUsers([
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
    ]);
  }
	

	let userItems = users.map((u) => {
		return (
			<UserItem
				userID={u.id}
				avatarImage={u.avatarImage}
				userName={u.userName}
				status={u.status}
				followed={u.followed}
				country={u.country}
				city={u.city}
				follow={follow}
				unfollow={unfollow}
			/>
		);
	});

	return <div>{userItems}</div>;
};

export default UserList;
