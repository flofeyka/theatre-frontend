import axios from "axios";

export const baseAPI = axios.create({
    baseURL: "https://theatre-api-zoof.onrender.com",
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
})