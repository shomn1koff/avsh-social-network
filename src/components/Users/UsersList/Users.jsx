import React from "react";
import Button from "../../UI/Button/Button";
import UserItem from "./UserItem/UserItem";
import c from './UserList.module.scss'

const Users = (props) => {
	let pages = [];
	let pagesCount = Math.ceil(
		props.totalUsersCount / props.pageSize
	);

	for (let i = 1; i <= pagesCount / 100; i++) {
		pages.push(i);
	}
	//console.log(pages);
	let buttons = pages.map((p) => {
		return (
			<div className={c.button} key={p}>
				<Button
					type={
						props.currentPage === p ? "primary" : "secondary"
					}
					onClick={(e) => props.onPageChanged(p)}
					fit={"fitcontent"}
				>
					{p}
				</Button>
			</div>
		);
	});
	let userItems = props.users.map((u) => {
		return (
			<UserItem
				name={u.name}
				id={u.id}
				photos={u.photos}
				status={u.status}
				followed={u.followed}
				isFollowing={props.isFollowing}
				follow={props.follow}
				unfollow={props.unfollow}
				key={u.id}
			/>
		);
	});

	return (
		<div>
			<div className={c.buttonContainer}>{buttons}</div>
			{userItems}
		</div>
	);
};

export default Users;
