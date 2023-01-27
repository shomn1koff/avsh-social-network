import React from "react";
import UserItem from "./UserItem/UserItem";
import axios from "axios";
import UserItemC from "./UserItem/UserItemC";
import Button from "../../UI/Button/Button";
import c from "./UserList.module.scss";

class UserListC extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then((response) => {
				console.log(response);
				//console.log()
				//this.props.setTotalUsersCount(response.data.totalCount)
				this.props.setUsers(response.data.items);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		console.log(this.props.currentPage);
        axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
			)
			.then((response) => {
				console.log(response);
				//console.log()
				//this.props.setTotalUsersCount(response.data.totalCount)
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		let pages = [];
		let pagesCount = Math.ceil(
			this.props.totalUsersCount / this.props.pageSize
		);

		for (let i = 1; i <= 10; i++) {
			pages.push(i);
		}
		console.log(pages);
		let buttons = pages.map((p) => {
			return (
				<div className={c.button} key={p}>
					<Button
						type={
							this.props.currentPage === p
								? "primary"
								: "secondary"
						}
						onClick={(e) => this.onPageChanged(p)}
                        fit={"fitcontent"}
					>
						{p}
					</Button>
				</div>
			);
		});
		let userItems = this.props.users.map((u) => {
			return (
				<UserItemC
					name={u.name}
					id={u.id}
					photos={u.photos}
					status={u.status}
					followed={u.followed}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
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
	}
}

export default UserListC;
