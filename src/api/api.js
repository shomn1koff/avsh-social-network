import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": process.env.REACT_APP_API_KEY
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
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append(`image`, photoFile)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

