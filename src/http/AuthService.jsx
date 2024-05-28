import api from "./apiSetting";

class AuthService {
  static async login(username, password) {
    return api.post("/user/login", {
      username,
      password,
      client_id: 6,
      client_secret: "XsCXIvC6CF6tGLSqWN7e7juDAe0DNeJBQ54JbH07",
    });
  }
  static async logout() {
    return await api.post("/user/logout");
  }
  static async userInf() {
    return await api.get("/user/information")
  }
  static async filterInf() {
    return await api.get("/transport/filters")
  }
}
export default AuthService;
