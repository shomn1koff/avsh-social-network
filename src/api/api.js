import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "3f87fb6e-94cc-4916-a953-0b6cf7e934ed"
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(
                `users?page=${currentPage}&count=${pageSize}`
            ).then(response => {
                return response.data
            })
    },
    getUserProfile(userID) {
        return instance.get(`profile/${userID}`)
    },
    follow(userID) {
        return instance.post(`follow/${userID}`)
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`)
    },
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

