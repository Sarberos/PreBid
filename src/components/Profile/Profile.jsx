import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import Header from "../Header/Header";
import Footer from './../Footer/Footer'
import s from "./Profile.module.css";
import logout_ico from "./../../assets/img/logout_ico.svg";
import { useEffect, useState } from "react";
import { logoutThunk, setIsAuth, setUserInf, userInfThunk } from "../../app/redux/mainSlice";
import Preloader from "../Tools/Preloader";

export const Profile = ({children}) => {
  const dispatch =useDispatch();
  const isLoading = useSelector((state) =>state.user.isLoading);
  const user = useSelector((state) => state.user.userInf.user);
  
  useEffect(()=>{
    if(user===0){
      const userInfPromise= new Promise((resolve,reject)=>{
        resolve(dispatch(userInfThunk()))
      })
      userInfPromise.then(response=>{
        dispatch(setUserInf(response.payload.data));
        dispatch(setIsAuth(response.payload.data.status))
      }) 
    }else{
      console.log('userInf been exist')
    }
  },[dispatch])

  const resetAuth=()=>{
    dispatch(logoutThunk());
}
  const arr = [];
  for (let i = 1; i <= 15; i++) {
    arr.push(i);
  }
  if (isLoading) {
    return <Preloader />;
  } else {
  return (
    <>
      <Header />
      <div className={s.profile_setting_wrapper}>
        <div className={s.wrapper}>
          <h2 className={s.profile_title}>Настройка аккаунта {user.email}</h2>
          <div className={s.main_info_wrap}>
            <div className={s.menu_wrap}>
              <ul className={s.menu_list}>
                <li className={s.menu_list_item}><Link to='/profile' style={{textDecoration:'none',color: 'inherit'}} ><p style={{width:'100%'}}> Мой профиль</p></Link></li>
                <li className={s.menu_list_item}><Link to='/deliveryAdress' style={{textDecoration:'none',color: 'inherit'}}><p style={{width:'100%'}}>Адрес доставки</p></Link></li>
                <li className={s.menu_list_item}><Link to='/tarifPlan' style={{textDecoration:'none',color: 'inherit'}}><p style={{width:'100%'}}>Мой тарифный план</p></Link></li>
                <li className={s.menu_list_item}><Link to='/notifications' style={{textDecoration:'none',color: 'inherit'}}><p style={{width:'100%'}}> Настройки уведломлений</p></Link></li>
                <li className={s.menu_list_item}><Link to='/support' style={{textDecoration:'none',color: 'inherit'}}><p style={{width:'100%'}}> Справка и поддержка</p></Link></li>
                <li className={s.menu_list_item}>
                  <img src={logout_ico} alt="" className={s.logout_img} />
                  <button onClick={resetAuth} className={s.logout_btn}>Выход из аккаунта</button>
                </li>
              </ul>
            </div>
              <div className={s.profile_data}>
                {children}
              </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
};

export default Profile;
