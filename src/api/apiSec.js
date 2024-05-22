import axios from 'axios'

const apiUrl='https://autoru.neonface.by/api/v2'

const api=axios.create({
    withCredentials:true,
    baseURL: apiUrl,
    headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}
})

export const userAPI ={
    setAuthStatus: (email, password)=>{
        return api.post('/user/login',{
            email,
            password,
            client_id: 6,
            client_secret: "XsCXIvC6CF6tGLSqWN7e7juDAe0DNeJBQ54JbH07"})
            .then(response=>{
                return response.data
            })
    }
}