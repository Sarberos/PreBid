import AuthService from "./AuthService";

class Fetching {
  static async login(username, password) {
    try {
      const response = await AuthService.login(username, password);
      localStorage.setItem("access_token", response.data.access_token);
    } catch (e) {
      console.log(e);
    }
  }
  static async userInf() {
    try {
      const response = await AuthService.userInf();
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
export default Fetching;
