import api from "../http";


class AuthService {
    static async login (username, password){
        return api.post('/user/login',{
             username,
             password,
             client_id: 6,
             client_secret: "XsCXIvC6CF6tGLSqWN7e7juDAe0DNeJBQ54JbH07"})
    }
}
 export default AuthService;