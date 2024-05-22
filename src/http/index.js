import axios from 'axios'

const apiUrl='https://autoru.neonface.by/api/v2'

const api=axios.create({
    withCredentials: true,
    baseURL: apiUrl
})


api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})


export default api;