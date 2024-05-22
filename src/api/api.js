import AuthService from "../services/AuthService";

class Fetching{
    static async login (username, password){
        try {
            const  response = await AuthService.login(username, password);
            localStorage.setItem('access_token',response.data.access_token);
            localStorage.setItem('refresh_token',response.data.access_token);
            console.log(localStorage.getItem('access_token'))

        } catch (e) {
            console.log(e)
        }
    }
}
export default Fetching