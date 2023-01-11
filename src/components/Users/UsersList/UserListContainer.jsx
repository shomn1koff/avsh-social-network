import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../../redux/usersPageReducer";
import UserList from "./UserList";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        }
    }
}

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList)
export default UserListContainer