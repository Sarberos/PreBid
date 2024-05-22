import AuthService from "../services/AuthService";

class Fetching{
    static async login (username, password){
        try {
            const  response = await AuthService.login(username, password);
            localStorage.setItem('token',response.data.accessToken);
            console.log(localStorage.getItem('token'))

        } catch (e) {
            console.log(e)
        }
    }
}
export default Fetching