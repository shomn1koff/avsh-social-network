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
        console.warn('use profileAPI instead usersAPI')
        return profileAPI.getUserProfile(userID)
    },
    follow(userID) {
        return instance.post(`follow/${userID}`)
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`)
    },
}

export const profileAPI = {
    getUserProfile(userID) {
        return instance.get(`profile/${userID}`)
    },
    getUserProfileStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },
    updateUserProfileStatus(status) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

