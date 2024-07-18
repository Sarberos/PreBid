import { useSelector } from "react-redux";
import api from "./apiSetting";
import axios from "axios";


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
    return await api.post("/user/logout")
  }
  // static async logout() {
  //   return await axios.post("https://autoru.neonface.by/api/v2/user/logout",{},{
  //     headers:{
  //     'Authorization':`Bearer ${localStorage.getItem(
  //       "access_token")}`,
  //   }})
  // }


  static async userInf() {
    return await api.get("/user/information")
  }

  static async filterInf() {
    return await api.get("/transport/filters")
  }
  static async carList(carsLimit,listPage) {
    return await api.get(`/transport?page=${listPage}&limit=${carsLimit}&order=id&by=asc`)
  }
  
  static async favorite(prebid_transport_id, add) {
    return await api.post("/transport/favourite", {prebid_transport_id, add});
  }
  static async favoriteCarList(carsLimit=10,listPage=1){
    return await api.get(`/transport/favourite?page=${listPage}&limit=${carsLimit}&order=id&by=asc`)
  }
  static async getCountries(){
    return await api.get(`/countries`)
  }
  static async getAuctionList(auctionsLimit,listPage,search) {
    return await api.post(`/auctions/search?page=${listPage}&limit=${auctionsLimit}`,{search})
  }
  static async getListOptions () {
    return await api.get(`/transport/list-options`)
  }
  static async getSalesCount () {
    return await api.get(`/transport/count`)
  }
  static async getMySales(lotsLimit,listPage,lotStatus){
    return await api.get(`/transport/my-sales?page=${listPage}&limit=${lotsLimit}&status=${lotStatus}`)
  }
  static async  getCoordinLots(lotsLimit,listPage){
    return await api.get(`transport/search?page=${listPage}&limit=${lotsLimit}&status=0`)
  }
  static async transport(createLot) {
    return await api.post("/transport", {...createLot});
  }
  static async bidSearch(lotsLimit,listPage,search) {
    return await api.post(`/transport/bid/search?limit=${lotsLimit}&page=${listPage}`,{search});
  }
 
}
class UserServices{
  
}
class CarServices{
  
 
}


export default AuthService;
export const UserService = new UserServices() ;
export const CarService = new CarServices ;