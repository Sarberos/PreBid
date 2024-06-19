import AuthService from "./AuthService";

class Fetching {
  static async login(username, password) {
    try {
      const response = await AuthService.login(username, password);
      localStorage.setItem("access_token", response.data.access_token);
      return response
    } catch (e) {
      console.log(e +'login request errror');
    }
  }
  static async logout() {
    try {
      const response = await AuthService.logout()
      return response;
    } catch (e) {
      console.log(e+'logout request errror');
    }
  }
  static async userInf() {
    try {
      const response = await AuthService.userInf();
      return response;
    } catch (e) {
      console.log(e+'userInf request errror');
    }
  }
  static async filterInf() {
    try {
      const response = await AuthService.filterInf();
      return response;
    } catch (e) {
      console.log(e+'filterInf request errror');
    }
  }
  static async carList(carsLimit,listPage){
    try{
      const response= await AuthService.carList(carsLimit,listPage);
      return response;
    }catch(e){
      console.log(e);
    }
  }
  static async favourite(prebid_transport_id,add){
    try {
      return AuthService.favorite(prebid_transport_id,add)
    } catch (e) {
      console.log(e);
    }
  }
  static async favoriteCarList(carsLimit,listPage){
    try{
      const response= await AuthService.favoriteCarList(carsLimit,listPage);
      return response;
    }catch(e){
      console.log(e);
    }
  }
  static async getCountries(){
    try {
      return await AuthService.getCountries()
    } catch (e) {
      console.log(e);
    }
  }
  static async getAuctionList(auctionsLimit,listPage,search){
    try {
      return await AuthService.getAuctionList(auctionsLimit,listPage,search)
    } catch (e) {
      console.log(e);
    }
  }
  static async getListOptions(){
    try {
      return await AuthService.getListOptions()
    } catch (e) {
      console.log(e);
    }
  }
  static async getSalesCount(){
    try {
      return await AuthService.getSalesCount()
    } catch (e) {
      console.log(e);
    }
  }
  static async getMySales(lotsLimit,listPage,lotStatus){
    try {
      return await AuthService.getMySales(lotsLimit,listPage,lotStatus)
    } catch (e) {
      console.log(e);
    }
  }
  static async getCoordinLots(lotsLimit,listPage){
    try {
      return await AuthService.getCoordinLots(lotsLimit,listPage)
    } catch (e) {
      console.log(e);
    }
  }
  static async transport(createLot){
    try {
      return await AuthService.transport(createLot)
    } catch (e) {
      console.log(e);
    }
  }
}
export default Fetching;
