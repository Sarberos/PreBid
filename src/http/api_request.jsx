import AuthService from "./AuthService";

class Fetching {
  static async login(username, password) {
    try {
      const response = await AuthService.login(username, password);
      localStorage.setItem("access_token", response.data.access_token);
      return response
    } catch (e) {
      console.log(e);
    }
  }
  static async logout() {
    try {
      const response = await AuthService.logout()
      return response;
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
  static async filterInf() {
    try {
      const response = await AuthService.filterInf();
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
export default Fetching;
